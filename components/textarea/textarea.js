import React, { useRef, useEffect } from "react";
import styles from "./Textarea.module.css";

function Textarea({ placeholder, value, onChange, rows = 5, label }) {
  return (
    <div className={styles.holder}>
      <label className={styles.label}>{label}</label>
      <textarea
        className={styles.textarea}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </div>
  );
}

export default Textarea;
