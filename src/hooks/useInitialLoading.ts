import { useState, useEffect } from "react";

export const useInitialLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um tempo mínimo de carregamento para evitar flash
    const minLoadingTime = 1500;

    // Verifica se todos os recursos críticos foram carregados
    const checkResourcesLoaded = () => {
      const images = document.querySelectorAll("img");
      const allImagesLoaded = Array.from(images).every(
        (img) => img.complete && img.naturalHeight !== 0
      );

      return allImagesLoaded;
    };

    const timer = setTimeout(() => {
      if (checkResourcesLoaded()) {
        setIsLoading(false);
      }
    }, minLoadingTime);

    return () => clearTimeout(timer);
  }, []);

  return isLoading;
};
