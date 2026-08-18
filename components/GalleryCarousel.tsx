"use client";

import { useRef } from "react";

type GalleryImage = {
  alt: string;
  src: string;
};

export default function GalleryCarousel({ images }: { images: GalleryImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (direction: 1 | -1) => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.scrollBy({ behavior: "smooth", left: direction * track.clientWidth * 0.8 });
  };

  return (
    <div className="relative mt-6">
      <div
        className="carousel carousel-center w-full gap-4 rounded-box"
        ref={trackRef}
      >
        {images.map((image) => (
          <div className="carousel-item w-72 overflow-hidden rounded-xl sm:w-80 md:w-96" key={image.src}>
            <img
              className="h-80 w-full object-cover md:h-96"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>

      <button
        aria-label="Ver fotos anteriores"
        className="btn btn-circle btn-primary absolute left-2 top-1/2 -translate-y-1/2 shadow-md"
        onClick={() => scrollByAmount(-1)}
        type="button"
      >
        ❮
      </button>
      <button
        aria-label="Ver más fotos"
        className="btn btn-circle btn-primary absolute right-2 top-1/2 -translate-y-1/2 shadow-md"
        onClick={() => scrollByAmount(1)}
        type="button"
      >
        ❯
      </button>
    </div>
  );
}
