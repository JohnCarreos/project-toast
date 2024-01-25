import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastCollection, exitToast }) {
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastCollection.map(({ id, variant, message }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast variant={variant} id={id} exitToast={exitToast}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
