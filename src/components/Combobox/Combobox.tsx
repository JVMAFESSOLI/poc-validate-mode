import React, { useState } from "react";

import { ReactComponent as Arrow } from "../../assets/svg/arrow.svg";

import styles from "./Combobox.module.css";

type ComboboxProps = {
  label: string;
  placeholder: string;
};

export const Combobox: React.FC<ComboboxProps> = ({ label, placeholder }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.combobox}>
      <span>{label}</span>
      <input type="text" placeholder={placeholder} />
      <Arrow onClick={() => setOpen(!open)} className={styles.arrow} />
    </div>
  );
};
