import { useState, useEffect, useCallback } from "react";

export const useInitialLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  const checkResourcesLoaded = useCallback(() => {
    // Verifica apenas imagens críticas
    const criticalImages = document.querySelectorAll(
      "img[data-critical='true']"
    );
    const allCriticalImagesLoaded = Array.from(criticalImages).every(
      (img) =>
        (img as HTMLImageElement).complete &&
        (img as HTMLImageElement).naturalHeight !== 0
    );

    return allCriticalImagesLoaded;
  }, []);

  useEffect(() => {
    let mounted = true;
    let timeoutId: ReturnType<typeof setTimeout>;

    const initializeLoading = async () => {
      // Tempo mínimo de carregamento para evitar flash
      const minLoadingTime = 1000;

      // Verifica recursos críticos
      const checkResources = () => {
        if (!mounted) return;

        const loaded = checkResourcesLoaded();
        setResourcesLoaded(loaded);

        if (loaded) {
          timeoutId = setTimeout(() => {
            if (mounted) {
              setIsLoading(false);
            }
          }, minLoadingTime);
        } else {
          // Continua verificando se os recursos ainda não foram carregados
          requestAnimationFrame(checkResources);
        }
      };

      checkResources();
    };

    initializeLoading();

    return () => {
      mounted = false;
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [checkResourcesLoaded]);

  return isLoading;
};
