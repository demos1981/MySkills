"use client";

import { useState } from "react";
import "../components/PortfolioCarousel.module.css";

interface CarouselItem {
  id: number;
  content: string;
}

const items: CarouselItem[] = [
  { id: 1, content: "Item 1" },
  { id: 2, content: "Item 2" },
  { id: 3, content: "Item 3" },
  { id: 4, content: "Item 4" },
  { id: 5, content: "Item 5" },
];

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

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6">
      <div className="flex items-center space-x-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`flex-shrink-0 rounded-lg bg-blue-500 text-white flex items-center justify-center transition-all duration-300 ${getClassName(
              index
            )}`}
          >
            {item.content}
          </div>
        ))}
      </div>
      <div className="flex space-x-4">
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
  );
};

export default PortfolioCarousel;
