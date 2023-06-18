// import { FC, memo } from 'react';
// // import { TextField, TextFieldProps } from '@mui/material'
// import { useField, FieldHookConfig } from 'formik'
// import { Input, InputProps } from 'antd';

// const CustomInput: FC<InputProps & FieldHookConfig<string>> = memo(({
//     name,
//     ...props
// }) => {

//     const [field, meta] = useField(name)

//     const configTextField = {
//         ...field,
//         ...props,
//         fullWidth: true,
//         // variant: props.variant || 'outlined'
//     }

//     // if (meta && meta.touched && meta.error) {
//     //     configTextField.error = true;
//     //     configTextField.helperText = meta.error;
//     // }

//     return <Input {...configTextField} />
// });

// export default CustomInput;