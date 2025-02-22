import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://i.ibb.co/BVTpZxvF/Imagem-do-Whats-App-de-2025-02-21-s-22-11-12-1527fdbd.jpg",
  "https://i.ibb.co/c7X48TV/Imagem-do-Whats-App-de-2025-02-21-s-22-11-11-b253c357.jpg",
  "https://i.ibb.co/qF1CwKBj/Imagem-do-Whats-App-de-2025-02-21-s-22-11-10-b65b045c.jpg",
];

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative h-[85vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Degradê e Blur - Agora abaixo dos botões */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent z-10"></div>

      {/* Botões de Navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition z-20 pointer-events-auto"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition z-20 pointer-events-auto"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20 pointer-events-auto">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage ? "bg-blue-500 w-4" : "bg-white/50"
            }`}
            onClick={() => setCurrentImage(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
