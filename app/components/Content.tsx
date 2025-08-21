import React from "react";

type CarFace = {
  id: number;
  name: string;
  model: string;
  myear: number;
  desc: string;
  src: string;
  alt: string;
  color: string;
};

interface CarProps {
  selectedCar: CarFace;
  allCars: CarFace[];
}

const Content = ({ selectedCar, allCars }: CarProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-white p-4">
        <div className="col-span-1">
          <div className="p-4 rounded-2xl flex flex-col gap-2">
            <div className="font-bold text-2xl capitalize">
              name : {selectedCar.name}
            </div>
            <div className="text-lg capitalize">
              model : {selectedCar.model}
            </div>
            <div className="text-lg capitalize">year : {selectedCar.myear}</div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-4 bg-black/0 h-32 flex gap-6 justify-center items-center">
            <div
              className="radial-progress"
              style={
                {
                  "--value": "70",
                  "--size": "8rem",
                  "--thickness": "2px",
                } as React.CSSProperties
              }
              aria-valuenow={70}
              role="progressbar"
            >
              32°C
            </div>
            <div
              className="radial-progress"
              style={
                {
                  "--value": "70",
                  "--size": "8rem",
                  "--thickness": "2px",
                } as React.CSSProperties
              }
              aria-valuenow={70}
              role="progressbar"
            >
              32°C
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-4 bg-black/0 h-32 flex flex-col gap-4 items-center justify-center">
            <progress
              className="progress w-full"
              value="40"
              max="100"
            ></progress>

            <progress
              className="progress w-full"
              value="70"
              max="100"
            ></progress>
            <progress
              className="progress w-full"
              value="100"
              max="100"
            ></progress>
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-4 bg-black/0 h-32 flex items-center justify-center">
            <div className="flex gap-4 justify-center flex-wrap">
              {allCars.map((car, indx) => {
                const isColorActive = car.id === selectedCar.id;
                console.log("test : ", selectedCar.id);
                return (
                  <div
                    key={indx}
                    className={`rounded-full p-6 shadow-md transition duration-600 ease-in-out ${
                      car.color
                    } ${isColorActive ? "ring-6 ring-white/10 scale-90" : ""}`}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
