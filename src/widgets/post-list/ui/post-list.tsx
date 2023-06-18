import { Select } from "antd";
import { useGetPostByCommentsQuery, useGetPostByDateQuery, useGetPostsQuery } from "entities/post/api/post-api";

import Post from "entities/post/ui/post";
import { useEffect, useState } from "react";

export interface IPost {
    email: string;
    author: string;
    text: string;
    title: string;
    file: string;
    address: string;
    custom_user: string;
    comments: any;
    created_at: string;
}

const PostList = () => {
    const [token, setToken] = useState("");
    useEffect(() => {
        const parsedToken = JSON.parse(localStorage.getItem("token") as string);
        setToken(parsedToken);
    }, []);

    const { data: posts = [] } = useGetPostsQuery({ token });
    const { data: datePost = [] } = useGetPostByDateQuery({ token });
    const { data: commentData = [] } = useGetPostByCommentsQuery({ token })

    const [query, setQuery] = useState('');

    const handleChange = (value: string) => {
        setQuery(value);
    };

    return (
        <div style={{ marginTop: "100px" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: 'column',
                    alignItems: "center",
                    justifyContent: "center",
                    gap: '30px'
                }}
            >
                <Select
                    defaultValue="Сортировка по"
                    style={{ width: 120 }}
                    onChange={handleChange}
                    options={[
                        { value: 'По лайкам', label: 'По лайкам' },
                        { value: 'По дате', label: 'По дате' },
                        { value: 'По комментам', label: 'По комментам' },
                        { value: 'disabled', label: 'Disabled', disabled: true },
                    ]}
                />
                {query === '' &&
                    posts.map((post: IPost) => (
                        <Post key={post.title} post={post} />
                    ))
                }

                {query === 'По дате' &&
                    datePost.map((post: IPost) => (
                        <Post key={post.created_at} post={post} />
                    ))
                }

                {query === 'По комментам' &&
                    commentData.map((post: IPost) => (
                        <Post key={post.address} post={post} />
                    ))
                }
            </div>
        </div>
    );
};

export default PostList;
