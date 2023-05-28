import React from "react";
import styles from "./loader.module.css";

function Loader() {
  return (
    <svg
      className={styles.spinner}
      width="26px"
      height="26px"
      viewBox="0 0 27 27"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={styles.path}
        fill="none"
        stroke-width="2"
        stroke-linecap="round"
        cx="13"
        cy="13"
        r="10"
      ></circle>
    </svg>
  );
}

export default Loader;
