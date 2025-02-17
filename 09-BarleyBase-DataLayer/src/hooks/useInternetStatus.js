import { useEffect, useState } from "react";

const useInternetStatus = () => {
  const [isOnline, SetIsOnline] = useState(() => navigator.onLine);

  useEffect(() => {
    const updateStatus = () => SetIsOnline(navigator.onLine);

    // Initial check
    updateStatus();

    window.addEventListener("online", updateStatus);
    window.addEventListener("offline", updateStatus);

    return () => {
      window.removeEventListener("online", updateStatus);
      window.removeEventListener("offline", updateStatus);
    };
  }, []);

  return isOnline;
};

export default useInternetStatus;
