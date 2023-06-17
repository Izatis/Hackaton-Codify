import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { REGISTER_VALIDATION } from '../model/yup.schema';
import { Avatar, Box, Paper, Stack, Typography } from '@mui/material';
import { REGISTER_MODEL } from '../model/types';
import { useRegisterMutation } from '../api/register-api';
import { toast } from 'react-toastify';

import CustomInput from 'shared/ui/custom-input';
import CustomButton from 'shared/ui/custom-button';
import s from './register.module.scss'

const register = () => {

    const [setRegister, { data }] = useRegisterMutation()

    const handleSubmit = async (values: REGISTER_MODEL) => {
        await setRegister(values)
    }

    useEffect(() => {
        console.log(data);
        if (data) {
            toast.success('успешная регистрация')
        }
    }, [data])

    const INITIAL_FORM_STATE = {
        // login: '',
        email: '',
        password: '',
        phone_number: '',
        region: '',
        city_district: '',
        address: '',
    }

    return (
        <Formik
            initialValues={INITIAL_FORM_STATE}
            validationSchema={REGISTER_VALIDATION}
            onSubmit={values => handleSubmit(values)}
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
                            <Avatar className={s.paper__ava} />
                            <Typography
                                variant='h6'
                                sx={{ mb: 2 }}
                            >
                                Регистрация аккаунта
                            </Typography>
                        </Stack>

                        {/* <CustomInput
                            label="Имя"
                            name='login '
                            sx={{ mb: 2, mr: 2 }}
                        /> */}

                        <CustomInput
                            label="Почта"
                            name='email'
                            sx={{ mb: 2, mr: 2 }}
                        />
                        <CustomInput
                            label="Пароль"
                            name="password"
                            type='password'
                        />

                        <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
                            <CustomInput
                                label="Номер тел"
                                name="phone_number"
                                type='number'
                                sx={{ mt: 2, mb: 2, mr: 2 }}

                            />
                            <CustomInput
                                label="Область"
                                name="region"
                                sx={{ mt: 2, mb: 2 }}


                            />
                        </Stack>
                        <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
                            <CustomInput
                                label="Район/город/село"
                                name="city_district"
                                sx={{ mr: 2 }}
                            />
                            <CustomInput
                                label="Адрес проживания"
                                name="address"
                            />
                        </Stack>
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
                                <Link to='/login'> войти </Link>
                            </Typography>
                        </Stack>
                    </Paper>
                </Box>
            </Form >
        </Formik >
    );
};

export default register;