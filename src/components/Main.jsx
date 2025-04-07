import React, { useState } from "react";
import LocalImage from "../assets/forage.jpg";
import Info from "./Info";
import ContactInfo from "./ContactInfo";

const slides = [
  {
    url: "https://cpimg.tistatic.com/05709722/b/5/extra-05709722.jpg",
  },
  {
    url: LocalImage,
  },
  {
    url: "https://5.imimg.com/data5/YM/PD/MY-32599370/truck-mounted-direct-rotary-drilling-machine.jpg",
  },
];

function Main() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <>
      <Info />

      <div className="relative group max-w-[1400px] w-full m-auto py-10">
        {/* Slide Image */}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[750px] rounded-2xl bg-center bg-cover duration-1000"
        ></div>

        {/* Left Arrow */}
        <div
          onClick={goPrev}
          className="absolute top-1/2 left-4 -translate-y-1/2 text-2xl p-3 bg-black/50 text-white rounded-full cursor-pointer z-10
          md:hidden sm:flex flex items-center justify-center"
        >
          <i className="fa-solid fa-angles-left"></i>
        </div>

        {/* Right Arrow */}
        <div
          onClick={goNext}
          className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl p-3 bg-black/50 text-white rounded-full cursor-pointer z-10
          md:hidden sm:flex flex items-center justify-center"
        >
          <i className="fa-solid fa-angles-right"></i>
        </div>

        {/* Arrows for desktop on hover */}
        <div
          onClick={goPrev}
          className="hidden md:group-hover:flex absolute top-1/2 left-4 -translate-y-1/2 text-2xl p-3 bg-black/50 text-white rounded-full cursor-pointer z-10"
        >
          <i className="fa-solid fa-angles-left"></i>
        </div>

        <div
          onClick={goNext}
          className="hidden md:group-hover:flex absolute top-1/2 right-4 -translate-y-1/2 text-2xl p-3 bg-black/50 text-white rounded-full cursor-pointer z-10"
        >
          <i className="fa-solid fa-angles-right"></i>
        </div>
      </div>

      <ContactInfo />
    </>
  );
}

export default Main;
