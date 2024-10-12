"use client";
import React, { useState, useEffect } from "react";

const slides = [
  {
    heading: "Project name 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    link: "Project link",
    bgImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/3d-slider-3.jpg",
  },
  {
    heading: "Project name 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    link: "Project link",
    bgImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/3d-slider-2.jpg",
  },
  {
    heading: "Project name 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    link: "Project link",
    bgImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/3d-slider-1.jpg",
  },
  {
    heading: "Project name 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit...",
    link: "Project link",
    bgImage:
      "https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/3d-slider-4.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatically transition to the next slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === slides.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slide Controls */}
      <div
        className={`slider-control absolute left-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10 ${
          currentSlide === 0 ? "inactive" : ""
        }`}
        onClick={handlePrevSlide}
      >
        &#10094;
      </div>
      <div
        className="slider-control absolute right-4 top-1/2 transform -translate-y-1/2 text-white cursor-pointer z-10"
        onClick={handleNextSlide}
      >
        &#10095;
      </div>

      {/* Slides */}
      <div
        className="slider flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide w-full h-screen relative flex-shrink-0`}
          >
            <div
              className="slide__bg absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            ></div>
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>
            <div className="slide__content relative z-10 text-white text-center flex flex-col items-center justify-center h-full px-4">
              <svg
                className="slide__overlay absolute top-0 left-0 w-full h-full opacity-20"
                viewBox="0 0 720 405"
                preserveAspectRatio="xMaxYMax slice"
              >
                <path
                  className="slide__overlay-path"
                  d="M0,0 150,0 500,405 0,405"
                  fill="rgba(255, 255, 255, 0.3)"
                />
              </svg>
              <div className="slide__text">
                <h2 className="slide__text-heading text-4xl md:text-6xl font-bold mb-4">
                  {slide.heading}
                </h2>
                <p className="slide__text-desc text-lg md:text-2xl mb-6">
                  {slide.description}
                </p>
                <a
                  href="#"
                  className="slide__text-link text-white underline text-xl"
                >
                  {slide.link}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <ul className="slider-pagi absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <li
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`slider-pagi__elem w-3 h-3 rounded-full cursor-pointer border-2 border-white ${
              currentSlide === index ? "bg-white" : ""
            }`}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
