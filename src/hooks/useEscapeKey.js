import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEscapeKey(event) {
      if (event.code === "Escape") {
        callback()
      }
    }
    window.addEventListener("keydown", handleEscapeKey)
    return () => (window.removeEventListener("keydown", handleEscapeKey))
  },[callback])

}

export default useEscapeKey;