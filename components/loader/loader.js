import React from "react";
import styles from "./loader.module.css";

function Loader() {
  return (
    <svg
      className={styles.spinner}
      width="66px"
      height="66px"
      viewBox="0 0 67 67"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className={styles.path}
        fill="none"
        stroke-width="4"
        stroke-linecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  );
}

export default Loader;
