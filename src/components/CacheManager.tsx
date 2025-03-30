import React, { useEffect } from "react";

const CacheManager: React.FC = () => {
  useEffect(() => {
    // Registra o service worker para cache
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
