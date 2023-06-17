import { FC, useRef } from "react";
import s from "./style.module.scss";

import Button, { ButtonProps } from "antd/lib/button";
import cn from "classnames";

interface IMyButtonProps extends ButtonProps {
  background?: string;
  hoverBackground?: string;
}

const MyButton: FC<IMyButtonProps> = ({
  children,
  className,
  background,
  hoverBackground,
  type,
  icon,
  onClick,
  loading,
}) => {
  // С помощью useRef получаем элемента
  const spanElement = useRef<HTMLSpanElement>(null);
  const buttonElement = useRef<HTMLButtonElement>(null);

  // Функция - при входе курсора
  const handleMouseEnter = () => {
    if (spanElement.current && buttonElement.current) {
      buttonElement.current.style.background = hoverBackground || "";
      spanElement.current.style.height = "100%";
      spanElement.current.style.top = "auto";
      spanElement.current.style.bottom = "0";
    }
  };

  // Функция - при выходе курсора
  const handleMouseLeave = () => {
    if (spanElement.current && buttonElement.current) {
      buttonElement.current.style.background = background || "";
      spanElement.current.style.height = "0";
      spanElement.current.style.top = "0";
    }
  };

  return (
    <Button
      ref={buttonElement}
      className={cn(s.myButton, className)}
      style={{ background }}
      type={type}
      htmlType="submit"
      icon={icon}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      loading={loading}
    >
      {children}
      <span
        className={s.myButton__hover}
        style={{ background: hoverBackground }}
        ref={spanElement}
      ></span>
    </Button>
  );
};

export default MyButton;
