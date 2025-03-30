import { useState, useCallback } from "react";

interface UseLoadingStateReturn {
  isLoading: boolean;
  error: Error | null;
  startLoading: () => void;
  stopLoading: () => void;
  setError: (error: Error | null) => void;
  withLoading: <T>(promise: Promise<T>) => Promise<T>;
}

export const useLoadingState = (): UseLoadingStateReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const startLoading = useCallback(() => {
    setIsLoading(true);
    setError(null);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const withLoading = useCallback(
    async <T>(promise: Promise<T>): Promise<T> => {
      try {
        startLoading();
        const result = await promise;
        return result;
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Ocorreu um erro inesperado")
        );
        throw err;
      } finally {
        stopLoading();
      }
    },
    [startLoading, stopLoading]
  );

  return {
    isLoading,
    error,
    startLoading,
    stopLoading,
    setError,
    withLoading,
  };
};
