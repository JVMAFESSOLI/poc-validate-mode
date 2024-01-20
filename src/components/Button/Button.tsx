import React from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  title: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  title,
  onClick,
}: ButtonProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {title}
    </button>
  );
};
