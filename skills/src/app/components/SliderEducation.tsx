import React from "react";

const SliderEducation: React.FC = () => {
  return (
    <div className="flex flex-row justify-center items-center  p-6 ">
      <div className=" relative slideItem block-item bg-blue-500 w-32 h-64 text-white text-center flex items-center justify-center ">
        Block 1
      </div>
      <div className=" relative slideItem block-item bg-green-500 w-32 h-64 text-white text-center flex items-center justify-center  mx-1 ">
        Block 2
      </div>
      <div className=" relative slideItem block-item bg-red-500 w-32 h-64 text-white text-center flex items-center justify-center  mx-1 ">
        Block 3
      </div>
      <div className=" relative slideItem block-item bg-yellow-500 w-32 h-64 text-white text-center flex items-center justify-center mx-1">
        Block 4
      </div>
    </div>
  );
};

export default SliderEducation;
