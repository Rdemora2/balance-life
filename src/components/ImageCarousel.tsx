import React, { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import OptimizedImage from "./OptimizedImage";
import slide1 from "/images/slide1.webp";
import slide2 from "/images/slide2.webp";
import slide3 from "/images/slide3.webp";

const images = [
  {
    src: slide1,
    alt: "Slide 1",
    width: 1920,
    height: 1080,
  },
  {
    src: slide2,
    alt: "Slide 2",
    width: 1920,
    height: 1080,
  },
  {
    src: slide3,
    alt: "Slide 3",
    width: 1920,
    height: 1080,
  },
];

const ImageCarousel: React.FC = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Pré-carrega a primeira imagem
  useEffect(() => {
    const img = new Image();
    img.src = images[0].src;
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 5000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative h-[85vh] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Carrossel de imagens"
    >
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <OptimizedImage
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
            critical={index === 0}
            aria-hidden={index !== currentImage}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent pointer-events-none z-10"></div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition z-20 pointer-events-auto"
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition z-20 pointer-events-auto"
        aria-label="Próxima imagem"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageCarousel;
