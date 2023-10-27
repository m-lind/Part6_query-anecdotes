import { useContext, useState, useEffect } from "react";
import NotificationContext from "../NotificationContext";

const Notification = () => {
  const [notification, dispatch] = useContext(NotificationContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (notification) {
      setIsVisible(true);

      const closeTimeout = setTimeout(() => {
        setIsVisible(false);
        dispatch({ type: "CLOSE" });
      }, 5000);

      return () => {
        clearTimeout(closeTimeout);
      };
    }
  }, [notification, dispatch]);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  return <div>{isVisible && <div style={style}>{notification}</div>}</div>;
};

export default Notification;
