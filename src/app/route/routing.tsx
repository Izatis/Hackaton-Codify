import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom'


const Layout = lazy(() => import('../../app/layout/layout'))
const RegisterForm = lazy(() => import('../../features/auth/signUp'))
const HomePage = lazy(() => import('../../pages/main/ui/index'))
const LoginForm = lazy(() => import('../../features/auth/signIn'))
const ClientPage = lazy(() => import('../../pages/client/ui/client-page'))
const AddPost = lazy(() => import('../../features/add-post/ui/add-post'))
const Profile = lazy(() => import('../../features/profile/ui/profile'))
const PostList = lazy(() => import('../../widgets/post-list/ui/post-list'))

export const Routing: FC = () => {


    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='register' element={<RegisterForm />} />
                <Route path='login' element={<LoginForm />} />
                <Route path='client' element={<ClientPage />} />
                <Route path='add-post' element={<AddPost />} />
                <Route path='profile' element={<Profile />} />
                <Route path='post-list' element={<PostList />} />
            </Route>
        </Routes>
    )
}