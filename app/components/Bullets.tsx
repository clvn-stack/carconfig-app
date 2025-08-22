import React, { useEffect } from "react";
import { useState } from "react";

type CarFace = {
  id: number;
};

interface CarProps {
  selectedCar: CarFace;
  bulletdata: CarFace[];
}

const Bullets = ({ bulletdata, selectedCar }: CarProps) => {
  const [setActive, getActive] = useState(1);

  useEffect(() => {
    getActive(selectedCar.id);
  }, [selectedCar]);

  return (
    <div>
      <div className="fixed top-20 md:top-1/3 md:right-12 right-0 -translate-y-1/2 p-4  text-white rounded-l-lg shadow-lg">
        {bulletdata.map((bul, index) => {
          const isActive = bul.id === setActive;
          return (
            <div
              key={index}
              className={`flex rounded-full border border-white/30 p-1 gap-2 my-4 transition duration-300 ease-in-out ${
                isActive ? "ring-1 ring-white scale-105" : ""
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Bullets;
