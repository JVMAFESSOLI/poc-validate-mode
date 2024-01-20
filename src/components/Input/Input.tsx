import React from "react";
import styles from "./Input.module.css";

type InputProps = {
  title: string;
  placeholder: string;
};

export const Input: React.FC<InputProps> = ({ title, placeholder }) => {
  return (
    <div className={styles.input}>
      <h2>{title}</h2>
      <input placeholder={placeholder}></input>
    </div>
  );
};
