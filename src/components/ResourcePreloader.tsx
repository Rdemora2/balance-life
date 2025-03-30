import React, { useEffect } from "react";

interface ResourcePreloaderProps {
  images?: string[];
  fonts?: string[];
}

const ResourcePreloader: React.FC<ResourcePreloaderProps> = ({
  images = [],
  fonts = [],
}) => {
  useEffect(() => {
    // Pré-carrega imagens
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Pré-carrega fontes
    fonts.forEach((font) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "font";
      link.href = font;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });
  }, [images, fonts]);

  return null;
};

export default ResourcePreloader;
