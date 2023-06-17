import Post from 'entities/post/ui/post';
import AddPost from 'features/add-post/ui/add-post';
import { FC } from 'react';

const ClientPage: FC = () => {
    return (
        <div>
            <AddPost />
            <Post />
        </div>
    );
};

export default ClientPage;