import React from "react";

import useEscapeKey from "../../hooks/useEscapeKey";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastCollection, setToastCollection] = React.useState([]);
  useEscapeKey(() => {
    setToastCollection([]);
  });
  function exitToast(id) {
    const newToastCollection = toastCollection.filter(
      (toast) => toast.id !== id
    );
    setToastCollection(newToastCollection);
  }
  return (
    <ToastContext.Provider
      value={{ toastCollection, setToastCollection, exitToast }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
