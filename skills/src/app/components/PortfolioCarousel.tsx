"use client";

import { useState } from "react";
import { items } from "@/data/dataPortfolio";
import "../components/PortfolioCarousel.module.css";

const PortfolioCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the second element as the center

  const nextItem = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const getClassName = (index: number) => {
    const length = items.length;
    const position = (index - activeIndex + length) % length;

    if (position === 1) {
      // Center element
      return "w-64 h-64 transform scale-110 reflection";
    } else if (position === 0 || position === 2) {
      // Side elements
      return "w-40 h-40 opacity-75";
    } else {
      // Hide other elements
      return "hidden";
    }
  };

  const activeContent = items[activeIndex]?.content || "";
  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen space-y-6 transition-all duration-300"
        style={{
          background: `rgba(0, 0, 255, 0.5)`, // Optional default background
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/${activeContent}.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center space-x-4 h-2/4">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`flex-shrink-0 rounded-lg bg-blue-500 text-white flex items-center justify-center transition-all duration-300 ${getClassName(
                index
              )}`}
            >
              <div className="flex flex-col">
                <div>{item.content}</div>
                <div>{item.stack}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex space-x-4 relative top-11">
          <button
            onClick={prevItem}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Previous
          </button>
          <button
            onClick={nextItem}
            className="px-4 py-2 bg-gray-800 text-white rounded"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default PortfolioCarousel;
