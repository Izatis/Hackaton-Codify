import * as Yup from 'yup'

export const LOGIN_VALIDATION = Yup.object().shape({
    login: Yup
        .string()
        .required('обязательное поле'),
    password: Yup
        .string()
        .required('обязательное поле'),
})