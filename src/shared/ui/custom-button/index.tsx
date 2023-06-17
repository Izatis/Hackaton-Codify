import { FC, memo } from 'react';
import { Button, ButtonProps } from "@mui/material"
import { useFormikContext } from 'formik'

const CustomButton: FC<ButtonProps> = memo(({
    children,
    ...props
}) => {

    const { isValid, resetForm } = useFormikContext()

    const handleSubmit = async () => {
        setTimeout(() => {
            resetForm()
        }, 700)
    }

    const configButton = {
        ...props,
        variant: props.variant || 'contained',
        onClick: handleSubmit,
        type: props.type || 'submit',
        disabled: !isValid
    }

    return <Button {...configButton}>{children}</Button>
});

export default CustomButton;