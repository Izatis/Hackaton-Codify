import { useGetPostsQuery } from "entities/post/api/post-api";

import Post from "entities/post/ui/post";
import { useEffect, useState } from "react";

export interface IPost {
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
    console.log(posts);
    return (
        <div
            style={{
                display: "flex",
                flexDirection: 'column',
                alignItems: "center",
                justifyContent: "center",
                marginTop: "100px",
                gap: '30px'
            }}
        >
            {posts.map((post: IPost) => {
                return <Post post={post} />;
            })}
        </div>
    );
};

export default PostList;
