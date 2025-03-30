import { useEffect } from "react";

export const usePreload = (resources: string[]) => {
  useEffect(() => {
    resources.forEach((resource) => {
      if (
        resource.endsWith(".jpg") ||
        resource.endsWith(".png") ||
        resource.endsWith(".webp")
      ) {
        const img = new Image();
        img.src = resource;
      } else if (resource.endsWith(".css")) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = resource;
        document.head.appendChild(link);
      }
    });
  }, [resources]);
};
