// Button design inspired and amended from: https://codepen.io/dhanishgajjar/pen/NgQqVj

import React from "react";
import styles from "./DownloadButton.module.css";

const DownloadButton = ({ downloadLink, text, icon, ariaLabel }) => {
  return (
    <div className="flex justify-center space-x-4 mt-4">
      <a
        href={downloadLink}
        download
        className={`${styles.button} ${styles["download-button"]}`}
        aria-label={ariaLabel} // For screen readers
      >
        <span className={styles.gradient}></span>
        <span className="flex items-center">
          {icon && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M7 10l5 5m0 0l5-5m-5 5V3"
              />
            </svg>
          )}
          {text}
        </span>
      </a>
    </div>
  );
};

export default DownloadButton;
