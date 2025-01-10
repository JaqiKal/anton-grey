// Button design inspired and amended from: https://codepen.io/astitva2009/pen/ExQeNxb

import React from "react";
import styles from "./SubmitButton.module.css";

const SubmitButton = ({ onClick, children }) => {
  return (
    <div className="flex justify-center">
      <button
        className={`${styles.button}`}
        type="Send message"
        onClick={onClick}
      >
        <span>{children}</span>
      </button>
    </div>
  );
};

export default SubmitButton;
