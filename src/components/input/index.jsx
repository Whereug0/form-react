import React from "react";
import styles from './styles.module.scss'

function Input({ label, onChangeInput, value, type = "text", hasError, onBlur}) {

    return (
      <div>
        <label className={styles["label"]}>{label}</label>
        <input
          style={{borderColor: hasError ? 'red': 'rgba(28, 55, 90, 0.16)'}}  
          value={value}
          onChange={(e) => onChangeInput(e.target.value)}
          type={type}
          onBlur={onBlur}
        />
      </div>
    );
  }
  

export default Input