import * as Yup from 'yup'

export const LOGIN_VALIDATION = Yup.object().shape({
    username: Yup
        .string()
        .required('обязательное поле'),
    password: Yup
        .string()
        .required('обязательное поле'),
    role: Yup
        .string()
        .required('обязательное поле')
})
