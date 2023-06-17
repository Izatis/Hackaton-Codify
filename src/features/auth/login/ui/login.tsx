import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import CustomButton from 'shared/ui/custom-button';
import CustomInput from 'shared/ui/custom-input';
import { LOGIN_VALIDATION } from '../model/yup.schema';
import s from './login.module.scss'

const login: FC = () => {
    
    const INITIAL_FORM_STATE = {
        role: '',
        username: '',
        password: ''
    }

    return (
        <>
            <Formik
                initialValues={INITIAL_FORM_STATE}
                validationSchema={LOGIN_VALIDATION}
                onSubmit={values => console.log(values)}
            >
                <Form>
                    <Box className={s.root}>
                        <Box>
                            <Avatar />
                        </Box>
                        <Paper
                            className={s.paper}
                            sx={{ pb: 2, pt: 2 }}
                        >
                            <Stack className={s.paper__subcontent}>
                                <Typography
                                    variant='h6'
                                    sx={{ mt: 2 }}
                                >
                                    Вход в аккаунт
                                </Typography>
                            </Stack>
                            <CustomInput
                                label="Имя"
                                name='username'
                                sx={{ mt: 2, mb: 2 }}
                            />
                            <CustomInput
                                type='password'
                                label="Пароль"
                                name="password"
                                sx={{ mb: 2 }}
                            />
                            <Stack className={s.paper__supcontent}>
                                <CustomButton sx={{ mb: 2 }}>
                                    Войти
                                </CustomButton>
                                <Typography variant='subtitle1'>
                                    Нет аккаунта ?
                                    <Link to='/register'>
                                        регистрация 
                                    </Link>
                                </Typography>
                            </Stack>
                        </Paper>
                    </Box>
                </Form>
            </Formik>
        </>
    );
};

export default login;