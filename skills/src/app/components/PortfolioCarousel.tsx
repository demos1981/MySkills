"use client";

import { useState } from "react";
import { items } from "@/data/dataPortfolio";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../components/PortfolioCarousel.module.css";
import Image from "next/image";

const PortfolioCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const getVisibleItems = () => {
    const visibleItems = [];
    for (let i = -1; i <= 1; i++) {
      const index = (activeIndex + i + items.length) % items.length;
      visibleItems.push(items[index]);
    }
    return visibleItems;
  };

  const activeItem = items[activeIndex];

  return (
    <div className="relative w-full  mx-auto h-full overflow-hidden">
      {/* Blurred background */}
      <div
        className="absolute inset-0 transition-all duration-300 ease-linear"
        style={{
          backgroundImage: `url(${activeItem.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(9px) brightness(0.9)",

          transform: "scale(1.1)", // Prevent blur edges from showing
        }}
      />

      {/* Navigation buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Carousel items */}
      <div className="relative h-full flex items-center justify-center">
        {getVisibleItems().map((item, index) => (
          <div
            key={item.id}
            className={`absolute transition-all duration-500 ease-in-out
            ${index === 0 ? "translate-x-[-120%] scale-75 opacity-70" : ""}
            ${index === 1 ? "translate-x-0 scale-100 z-20" : ""}
            ${index === 2 ? "translate-x-[120%] scale-75 opacity-70" : ""}
          `}
          >
            {/* Card */}
            <div
              className="w-64 h-80 rounded-lg shadow-xl overflow-hidden transform transition-transform hover:scale-105"
              onClick={() =>
                setActiveIndex(
                  (activeIndex + index - 1 + items.length) % items.length
                )
              }
            >
              <Image
                src={item.image}
                width={300}
                height={300}
                alt={item.stack}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.stack}
                </h3>
                <p className="text-white/90">{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioCarousel;
