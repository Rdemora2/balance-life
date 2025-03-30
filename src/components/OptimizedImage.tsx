import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Pré-carrega a imagem
    const img = new Image();
    img.src = src;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setIsError(true);
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !isError && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {isError && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <span className="text-gray-400">Erro ao carregar imagem</span>
        </div>
      )}
      <motion.img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      />
    </div>
  );
};

export default OptimizedImage; 