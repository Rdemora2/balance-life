import React, { useEffect } from "react";

const CacheManager: React.FC = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch((error) => {
          console.error("ServiceWorker registration failed:", error);
        });
      });
    }
  }, []);

  return null;
};

export default CacheManager;
