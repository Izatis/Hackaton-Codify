import { FC, useEffect, useState } from "react";
import s from "./style.module.scss";
  
import { Form, Input } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import ParticlesComponent from "shared/ui/Particles/Particles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faGlobe,
  faCity,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "shared/model/redux-hooks";
import { userRegistration } from "./api/signUp.slice";
import { IUserRegistration } from "./model/signUp";

import MyButton from "shared/ui/animate-button";

const SignUp: FC = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [passwordMismatchMessage, setPasswordMismatchMessage] = useState("");

  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.registration);

  // ---------------------------------------------------------------------------------------------------------------------------------
  // POST
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({ ...form.getFieldsValue() });
  }, []);

  const handleSubmit = (values: IUserRegistration) => {
    setIsButtonClicked(true);
    const { password, passwordСonfirmation } = values;
    if (password !== passwordСonfirmation) {
      setPasswordMismatchMessage("Пароли не совпадают!");
    } else {

      dispatch(userRegistration(values));
    }
  };

  return (
    <section className={s.signUp}>
      <ParticlesComponent />
      <h2>Регистрация</h2>
      <Form form={form} name="sign-up-form" onFinish={handleSubmit}>
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

        <span className={s.error}>{error}</span>

        <Form.Item
          className={s.signUp__deIndenting}
          name="password"
          rules={[
            {
              required: true,
              message: "Пожалуйста введите ваш пароль",
            },
            {
              min: isButtonClicked ? 8 : undefined,
              message: "Пароль должен содержать не менее 8 знаков",
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

        <div className={s.flex}>
          <Form.Item
            className={s.signUp__deIndenting}
            name="phone_number"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите номер телефона",
              },
            ]}
          >
            <Input
              prefix={
                <FontAwesomeIcon style={{ color: "#7329c2" }} icon={faPhone} />
              }
              placeholder="Номер телефона"
            />
          </Form.Item>

          <Form.Item
            className={s.signUp__deIndenting}
            name="region"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите регион",
              },
            ]}
          >
            <Input
              prefix={
                <FontAwesomeIcon style={{ color: "#7329c2" }} icon={faGlobe} />
              }
              placeholder="Регион"
            />
          </Form.Item>
        </div>

        <div className={s.flex}>
          <Form.Item
            className={s.signUp__deIndenting}
            name="city_district"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите поле",
              },
            ]}
          >
            <Input
              prefix={
                <FontAwesomeIcon style={{ color: "#7329c2" }} icon={faCity} />
              }
              placeholder="Область, Район, Город"
            />
          </Form.Item>

          <Form.Item
            className={s.signUp__deIndenting}
            name="address"
            rules={[
              {
                required: true,
                message: "Пожалуйста, введите адрес адрес проживания",
              },
            ]}
          >
            <Input
              prefix={
                <FontAwesomeIcon
                  style={{ color: "#7329c2" }}
                  icon={faAddressBook}
                />
              }
              placeholder="Адрес проживания"
            />
          </Form.Item>
        </div>

        <Form.Item>      
          <MyButton
            className={s.signUp__deIndenting}
            background="#7329c2"
            hoverBackground="#7329c2"
            type="primary"
            loading={isLoading}
          >
            Зарегистрироваться
          </MyButton>
        </Form.Item>
      </Form>
    </section>
  );
};

export default SignUp;
