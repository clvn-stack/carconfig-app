import React from "react";
import { Snowflake, Bolt } from "lucide-react";
import CountUp from "react-countup";

type CarFace = {
  id: number;
  name: string;
  model: string;
  speed: number;
  myear: number;
  desc: string;
  temp: number;
  fuel: number;
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
          <div className="p-4 rounded-2xl flex flex-col gap-1">
            <div className="font-bold text-4xl capitalize">
              {selectedCar.name}
            </div>
            <div className="text-md capitalize text-gray-400">
              model : {selectedCar.model}
            </div>
            <div className="text-md capitalize text-gray-400">
              year : {selectedCar.myear}
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-4 bg-black/0 h-32 flex gap-12 justify-center items-center">
            <div className="flex flex-col">
              <div className="text-4xl font-bold">
                <CountUp end={selectedCar.speed} duration={3} />
                <span className="text-xl font-bold italic">ms</span>
              </div>
              <div className="font-bold text-md text-gray-400">k/m</div>
            </div>
            <div className="flex flex-col">
              <div className="text-4xl font-bold">
                <CountUp end={selectedCar.fuel} duration={3} />
                <span className="text-xl font-bold italic">L</span>
              </div>
              <div className="font-bold text-md text-gray-400">Liters</div>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-4 bg-black/0 h-32 flex flex-col gap-2 items-center justify-center">
            <div className="flex w-full gap-4 justify-center items-center">
              <div>
                <Bolt size={24} />
              </div>
              <div className="w-full bg-gray-400 rounded h-2 overflow-hidden">
                <div
                  className="h-4 bg-white transition-all duration-700 ease-in-out"
                  style={{ width: `${selectedCar.fuel}%` }}
                ></div>
              </div>
            </div>
            <div className="flex w-full gap-4 justify-center items-center">
              <div>
                <Snowflake size={24} />
              </div>
              <div className="w-full bg-gray-400 rounded h-2 overflow-hidden">
                <div
                  className="h-4 bg-white transition-all duration-700 ease-in-out"
                  style={{ width: `${selectedCar.temp}%` }}
                ></div>
              </div>
            </div>
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
