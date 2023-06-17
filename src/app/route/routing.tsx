import { FC, lazy } from 'react';
import { Route, Routes } from 'react-router-dom'


const Layout = lazy(() => import('../../app/layout/layout'))
const RegisterForm = lazy(() => import('../../features/auth/register/ui/register'))
const HomePage = lazy(() => import('../../pages/main/ui/index'))
const LoginForm = lazy(() => import('../../features/auth/login/ui/login'))

export const Routing: FC = () => {


    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='/register' element={<RegisterForm />} />
                <Route path='/login' element={<LoginForm />} />
            </Route>
        </Routes>
    )
}