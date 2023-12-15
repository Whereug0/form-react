import React from "react";
import styles from "./styles.module.scss";

function Button(props) {
  return (
    <div className={styles.btn}>
      <button 
        style={{backgroundColor: props.disabled ? "red" : "#1676F3"}}
        className={styles.btnSubmit} type="submit">
            {props.value}
      </button>
    </div>
  );
}

export default Button;
