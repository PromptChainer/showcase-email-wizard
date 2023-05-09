import React from "react";
import styles from "./Input.module.css";

function Input({ placeholder, value, onChange, label }) {
  return (
    <div className={styles.holder}>
      <label className={styles.label}>{label}</label>

      <input
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
