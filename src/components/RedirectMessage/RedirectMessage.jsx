import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import "./RedirectMessage.css"

function RedirectMessage({ path, message, duration, status }) {
  const [showMessage, setShowMessage] = useState(true);

  const hideMessageAndRedirect = () => {
    setTimeout(() => {
      setShowMessage(false);
    }, duration * 1000);
  };

  useEffect(() => {
    if (duration > 0)
    hideMessageAndRedirect();
  }, []);

  return (
    <div className={`text-message-div ${status}`}>
      {showMessage && <div>{message}</div>}
      {!showMessage && <Navigate to={path} />}
    </div>
  );
}

export default RedirectMessage
