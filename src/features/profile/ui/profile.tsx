import { FC, useEffect, useState } from "react";
import s from "./style.module.scss";

import { EditOutlined } from "@ant-design/icons";
import { LogoutOutlined } from "@ant-design/icons";
import cover from "shared/image/cover.png";
import MyButton from "shared/ui/animate-button";
import { useNavigate } from "react-router";
import Loading from "shared/ui/Loading/Loading";
import { Link } from "react-router-dom";

const Setting: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    phone_number: "",
    city_distric: "",
    address: "",
  });

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email") as string);
    const phone_number = JSON.parse(
      localStorage.getItem("phone_number") as string
    );
    const city_distric = JSON.parse(
      localStorage.getItem("city_distric") as string
    );
    const address = JSON.parse(localStorage.getItem("address") as string);
    setUser({
      ...user,
      email: email,
      phone_number: phone_number,
      city_distric: city_distric,
      address: address,
    });
  }, []);

  const [token, setToken] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const fullUrl = window.location.href;
    const token = fullUrl.split(
      "http://localhost:3000/setting/userSettings?token="
    )[1];
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  }, []);

  useEffect(() => {
    const parsedToken = JSON.parse(localStorage.getItem("token") as string);
    setToken(parsedToken);
  }, []);

  // ---------------------------------------------------------------------------------------------------------------------------------
  // POST

  // Выйти из аккаунта
  const signOut = () => {
    navigate("/");
    localStorage.removeItem("token");
  };
  return (
    <section className={s.setting}>
      <div className={s.setting__static}>
        <img className={s.coverFirst} src={cover} alt="cover" />
        <div className={s.coverSecond}></div>
        {/* 
        <Tooltip title="Изменить фото профиля">
          <Avatar
            className={s.setting__avatar}
            src={user.file}
            alt={user.file}
            onClick={() => setIsModalOpen(true)}
          />
        </Tooltip> */}
      </div>
      <div className={s.myProfile}>
        {isLoading ? (
          <div className={s.loading}>
            <Loading />
          </div>
        ) : (
          <div className={s.myProfile__content}>
            <div className={s.container}>
              <ul className={s.myProfile__list}>
                <li className={s.myProfile__fullName}>{user.email}</li>
                <li className={s.myProfile__email}>{user.phone_number}</li>
                <li className={s.myProfile__email}>{user.address}</li>
                <li className={s.myProfile__dateOfBirth}>
                  {user.city_distric}
                </li>
              </ul>

              <div>
                <Link to={"/setting/editing"}>
                  <MyButton
                    className={s.myProfile__buttonSecond}
                    type="primary"
                    icon={<EditOutlined />}
                  >
                    Редактировать
                  </MyButton>
                </Link>
              </div>
            </div>

            <p className={s.text}>
              Рыбатекст используется дизайнерами, проектировщиками и
              фронтендерами, когда нужно быстро заполнить макеты или прототипы
              содержимым. Это тестовый контент, который не должен нести никакого
              смысла, лишь показать наличие самого текста или продемонстрировать
              типографику в деле.
            </p>

            <div className={s.myProfile__buttons}>
              <MyButton
                className={s.myProfile__buttonFirst}
                icon={<LogoutOutlined />}
                onClick={signOut}
                loading={isLoading}
              >
                Выйти
              </MyButton>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Setting;
