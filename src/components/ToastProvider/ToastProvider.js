import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({children}) {
  const [toasts, setToasts] = React.useState([])

  function createToast(variant, message) {
    const newToast = {
      id: crypto.randomUUID(),
      variant,
      message
    }
    const nextToasts = [...toasts, newToast]
    setToasts(nextToasts)
  }

  function dismissToast(id) {
    const newToasts = toasts.filter((toast) => toast.id !== id)
    setToasts(newToasts)
  }


  return (
    <ToastContext.Provider value={{toasts, createToast, dismissToast}}>
      {children}
    </ToastContext.Provider>
  )
}

export default ToastProvider;
