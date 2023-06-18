import { useEffect, useState } from "react";
import s from "./style.module.scss";

import { Form, Input } from "antd";

import MyButton from "shared/ui/animate-button";
import { useNavigate } from "react-router";
import { useAddAPostMutation } from "../api/add-post";

interface ICourseCreation {
  text: string;
  title: string;
  file: any;
  address: string;
  custom_user: string;
}

export default function () {
  const navigate = useNavigate();
  // // Состояния - для данных
  // const [мфд, setFile] = useState<ICourseCreation>({
  //   title:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet culpa corrupti, itaque exercitationem temporibus quos iste recusandae quis tempore consequuntur consequatur corporis beatae saepe facere illum perferendis quisquam. Reprehenderit, iusto!",
  //   text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet culpa corrupti, itaque exercitationem temporibus quos iste recusandae quis tempore consequuntur consequatur corporis beatae saepe facere illum perferendis quisquam. Reprehenderit, iusto!",
  //   file: "Russian",
  //   address: "Russian",
  //   custom_user: "Russian",
  // });

  // Для сохранения значений инпутов
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({ ...form.getFieldsValue() });
  }, []);

  // Отправляем post запрос
  const [file, setSelectedFile] = useState(null);

  const [addPost, { isLoading, error }] = useAddAPostMutation();

  const handleSubmit = async (value: ICourseCreation) => {
    const token = JSON.parse(localStorage.getItem("token") as string);
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
console.log(formData);

      const values = {
        author: 3,
        title: value.title,
        text: value.text,
        file: "https://marketplace.canva.com/EAE-xnqWvJk/1/0/1600w/canva-retro-smoke-and-round-light-desktop-wallpapers-JLofAI27pCg.jpg",
        address: value.address,
        custom_user: 1,
      };
      await addPost({ values, token }).unwrap();
    }
  };

  return (
    <section className={s.signIn}>
      <h2>Создание поста</h2>
      <Form
        layout="vertical"
        form={form}
        name="add-course-form"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="title"
          label={"Заголовок"}
          rules={[
            {
              required: true,
              message: "Обязательное поле",
            },
          ]}
        >
          <Input.TextArea placeholder={"Заголовок"} />
        </Form.Item>

        <Form.Item
          name="text"
          label={"Описание"}
          rules={[
            {
              required: true,
              message: "Обязательное поле",
            },
          ]}
        >
          <Input.TextArea placeholder={"Описание"} />
        </Form.Item>
        <Form.Item>
          <input
            type="file"
            accept="video/picture/*"
            onChange={(e: any) => setSelectedFile(e.target.files[0])}
          />
        </Form.Item>

        <Form.Item
          name="address"
          label={"Адрес"}
          rules={[
            {
              required: true,
              message: "Обязательное поле",
            },
          ]}
        >
          <Input placeholder={"Адрес"} />
        </Form.Item>

        {/* <span className={s.error}>{error}</span> */}

        <Form.Item>
          <MyButton
            background="#03d665"
            hoverBackground="#7329c2"
            type="primary"
            loading={isLoading}
          >
            Создать
          </MyButton>
        </Form.Item>
      </Form>
    </section>
  );
}
