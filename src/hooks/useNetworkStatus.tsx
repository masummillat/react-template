import { useState, useEffect } from "react";

/**
 * Custom hook to monitor network status (online/offline)
 * @returns {boolean} - `true` if the browser is online, otherwise `false`
 */
const useNetworkStatus = (): boolean => {
  // Initialize the state with the current online status
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Define event handlers to update state on online/offline events
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    // Attach event listeners
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return isOnline;
};

export default useNetworkStatus;
