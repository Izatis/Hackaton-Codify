import { FC } from 'react';
import MyButton from 'shared/ui/animate-button';
import PostList from 'widgets/post-list/ui/post-list';

const ClientPage: FC = () => {

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div>
            <PostList />
        </div>
    );
};

export default ClientPage;