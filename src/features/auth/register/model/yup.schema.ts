import * as Yup from 'yup'

// (Один символ в uppercase, один в lowercase, одна цифра, один спецсимвол и мин восемь символов)
const PASSWORD_RULES = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/

export const REGISTER_VALIDATION = Yup.object().shape({
    userName: Yup
        .string()
        .min(3, 'минимальнаяя длина 3')
        .required('обязательное поле'),
    email: Yup
        .string()
        .email('введите валидный email')
        .min(5, 'минимальная длина 5')
        .required('обязательное поле'),
    password: Yup
        .string()
        .matches(PASSWORD_RULES,
            { 
            message:    
            'Один символ в uppercase, один в lowercase, одна цифра, один спецсимвол и мин восемь символов'
            })
        // .min(8, 'минимальная длина 8')
        .required('обязательное поле')
})
