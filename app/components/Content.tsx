import React from "react";

const Content = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-white p-4">
        <div className="col-span-1">
          <div className="p-4 rounded-2xl shadow-xl h-[100px] bg-black/20">
            1
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-4 rounded-2xl shadow-xl h-[100px] bg-black/20">
            2
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-4 rounded-2xl shadow-xl h-[100px] bg-black/20 ">
            3
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-4 rounded-2xl shadow-xl h-[100px] bg-black/20">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
