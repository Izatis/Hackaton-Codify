import { FC, useEffect, useState } from "react";
import s from "./signIn.module.scss";

import { Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { userAuthorization } from "./api/signIn.slice";
import { useAppDispatch, useAppSelector } from "shared/model/redux-hooks";
import { IUserAuthorization } from "./model/signIn";

import MyButton from "shared/ui/animate-button";
import ParticlesComponent from "shared/ui/Particles/Particles";

const SignIn: FC = () => {
  // const [token, setToken] = useState("");
  // useEffect(() => {
  //   const parsedToken = JSON.parse(localStorage.getItem("token") as string);
  //   setToken(parsedToken);
  // }, []);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.authorization);

  // ---------------------------------------------------------------------------------------------------------------------------------
  // POST
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ ...form.getFieldsValue() });
  }, []);

  const handleSubmit = (values: IUserAuthorization) => {
    setIsButtonClicked(true);
    dispatch(userAuthorization(values));
  };

  return (
    <section className={s.signIn}>
      <ParticlesComponent />
      <h2>Авторизация</h2>
      <Form form={form} name="sign-in-form" onFinish={handleSubmit}>
        <Form.Item
          className={s.signIn__deIndenting}
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

        <span className={s.error}>{error}</span>

        <Form.Item
          className={s.signIn__deIndenting}
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите ваш пароль",
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Пароль" />
        </Form.Item>

        <Form.Item>
          <MyButton
            className={s.signIn__deIndenting}
            background="#03d665"
            hoverBackground="#7329c2"
            type="primary"
            loading={isLoading}
          >
            Войти
          </MyButton>
        </Form.Item>
      </Form>
    </section>
  );
};

export default SignIn;
