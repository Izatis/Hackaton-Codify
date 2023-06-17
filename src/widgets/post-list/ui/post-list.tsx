import Post from 'entities/post/ui/post';
import React from 'react';

const PostList = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', 'justifyContent': 'center', marginTop: '100px'}}>
            <Post />
        </div>
    );
};

export default PostList;