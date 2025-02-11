import { useEffect, useState } from "react";

const useInternetStatus = () => {
  const [isOnline, SetIsOnline] = useState(false);

  const handleOnline = () => {
    SetIsOnline(true);
  };

  const handleOffline = () => {
    SetIsOnline(false);
  };

  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useInternetStatus;
