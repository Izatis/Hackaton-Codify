import { FC, useEffect, useState } from "react";
import s from "./signUp.module.scss";

import { Form, Input } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import MyButton from "shared/ui/animate-button";
import ParticlesComponent from "shared/ui/Particles/Particles";

interface IUserRegister {
  fullName: string;
  email: string;
  password: string;
  passwordСonfirmation: string;
}

const SignUp: FC = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [passwordMismatchMessage, setPasswordMismatchMessage] = useState("");

  // ---------------------------------------------------------------------------------------------------------------------------------
  // POST
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ ...form.getFieldsValue() });
  }, []);

  const handleSubmit = (value: IUserRegister) => {
    setIsButtonClicked(true);
    console.log("ok");
  };

  return (
    <section className={s.signUp}>
      <ParticlesComponent />
      <h2>Регистрация</h2>
      <Form form={form} name="sign-up-form" onFinish={handleSubmit}>
        <Form.Item
          className={s.signUp__deIndenting}
          name="fullName"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите ваше имя",
            },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Имя" />
        </Form.Item>

        <Form.Item
          className={s.signUp__deIndenting}
          name="email"
          rules={[
            {
              required: true,
              message: "Пожалуйста, введите адрес электронной почты",
            },
            {
              type: isButtonClicked ? "email" : undefined,
              message:
                "Пожалуйста, введите действительный адрес электронной почты",
            },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>

        {/* <span className={s.error}>{error}</span> */}

        <Form.Item
          className={s.signUp__deIndenting}
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите ваш пароль",
            },
            {
              min: isButtonClicked ? 6 : undefined,
              message: "Пароль должен содержать не менее 6 знаков",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Пароль" />
        </Form.Item>

        <span className={s.error}>{passwordMismatchMessage}</span>

        <Form.Item
          className={s.signUp__deIndenting}
          name="passwordСonfirmation"
          rules={[
            {
              required: true,
              message: "Пожалуйста, подтвердите свой пароль",
            },
            {
              message: passwordMismatchMessage,
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Подтвердите пароль"
          />
        </Form.Item>

        <Form.Item>
          <MyButton
            className={s.signUp__deIndenting}
            background="#7329c2"
            hoverBackground="#03d665"
            type="primary"
            // loading={isLoading}
          >
            Зарегистрироваться
          </MyButton>
        </Form.Item>
      </Form>
    </section>
  );
};

export default SignUp;
