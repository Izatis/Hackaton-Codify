import { Formik, Form} from 'formik';
import { REGISTER_VALIDATION } from '../model/yup.schema';
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';

import CustomInput from 'shared/ui/custom-input';

import s from './register.module.scss'
import CustomButton from 'shared/ui/custom-button';
import { Link } from 'react-router-dom';

const register = () => {

    const INITIAL_FORM_STATE = {
        userName: '',
        email: '',
        password: ''
    }

    return (
        <Formik
            initialValues={INITIAL_FORM_STATE}
            validationSchema={REGISTER_VALIDATION}
            onSubmit={values => console.log(values)}
        >
            <Form>
                <Box className={s.root}>
                    <Paper
                        className={s.paper}
                        sx={{ pb: 2, pt: 2 }}
                    >
                        <Stack className={s.paper__subcontent}>
                            <Avatar className={s.paper__ava} />
                            <Typography
                                variant='h6'
                                sx={{ mb: 2, mt: 2 }}
                            >
                                Регистрация аккаунта
                            </Typography>
                        </Stack>

                        <CustomInput
                            label="Имя"
                            name='userName'
                        />
                        <CustomInput
                            label="Почта"
                            name="email"
                            sx={{ mb: 2, mt: 2 }}
                        />
                        <CustomInput
                            type='password'
                            label="Пароль"
                            name="password"
                        />
                        <Stack className={s.paper__supcontent}>
                            <CustomButton
                                sx={{ mb: 2, mt: 2 }}
                            >
                                Зарегестрироваться
                            </CustomButton>
                            <Typography
                                variant='subtitle1'
                            >
                                eсть аккаунт ?
                                <Link to='/login'>
                                    войти
                                </Link>
                            </Typography>
                        </Stack>
                    </Paper>
                </Box>
            </Form >
        </Formik >
    );
};

export default register;