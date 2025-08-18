"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cars = [
  { id: 1, src: "/images/cars/car-red.png", alt: "Red Car" },
  { id: 2, src: "/images/cars/car-blue.png", alt: "Blue Car" },
  { id: 3, src: "/images/cars/car-orange.png", alt: "Orange Car" },
  { id: 4, src: "/images/cars/car-yellow.png", alt: "Yellow Car" },
  { id: 5, src: "/images/cars/car-orange.png", alt: "Orange Car" },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? cars.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === cars.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[900px] mx-auto py-12 flex justify-center items-center">
      <button
        onClick={prevSlide}
        className="absolute left-1 z-10 bg-black/30 p-3 rounded-full"
      >
        <ChevronLeft className="text-white w-6 h-6" />
      </button>

      <div className="w-full h-[400px] flex justify-center items-center relative">
        {cars.map((car, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={car.id}
              className={`absolute transition-opacity duration-1200 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={car.src}
                alt={car.alt}
                width={680}
                height={300}
                className="object-contain"
              />
            </div>
          );
        })}
      </div>

      <button
        onClick={nextSlide}
        className="absolute right-1 z-10 bg-black/30 p-3 rounded-full"
      >
        <ChevronRight className="text-white w-6 h-6" />
      </button>
    </div>
  );
}
