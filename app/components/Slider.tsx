"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CarFace = {
  id: number;
  src: string;
  alt: string;
};

interface CarProps {
  cars: CarFace[];
}

export default function Slider({ cars }: CarProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? cars.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === cars.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center p-6">
      <div className="w-[320px] md:w-[520px] lg:w-full h-[200px] lg:h-[400px] flex justify-center items-center relative">
        {cars.map((car, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={car.id}
              className={`absolute transition-opacity duration-1200 ease-in-out   ${
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

      <div className="flex justify-center items-center gap-4">
        <div>
          <button
            onClick={prevSlide}
            className=" z-10 bg-black/30 p-3 rounded-full"
          >
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
        </div>
        <div>
          <button
            onClick={nextSlide}
            className="z-10 bg-black/30 p-3 rounded-full"
          >
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}
