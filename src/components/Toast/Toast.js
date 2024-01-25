import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import styles from "./Toast.module.css";

import { ToastContext } from "../ToastProvider/ToastProvider";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ id, variant, children }) {
  const { setToastCollection, exitToast } = React.useContext(ToastContext);

  const Icon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        {" "}
        <Icon />
      </div>
      <p className={styles.content}>
        <div className={styles.visuallyHiddenWrapper}>{variant} -</div>
        {children}
      </p>
      <button
        className={styles.closeButton}
        aria-label="Dismiss message"
        aria-live="off"
        onClick={() => exitToast(id)}
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
