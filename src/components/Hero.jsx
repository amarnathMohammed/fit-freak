import React from "react";
import Button from "./Button";

function Hero() {
  const handleButtonClick = () => {
    window.location.href = "#generate";
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT&apos;S TIME TO BE A</p>
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          FITNESS<span className="text-blue-400 font-medium">FREAK</span>
        </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may become unbelievably{" "}
        <span className="text-blue-400 font-medium">FIT</span> and accept all
        the risks of becoming the local{" "}
        <span className="text-blue-400 font-medium">MASS MONSTER</span> ,
        afflicted by severe body dysmorphia and might be unable to fit through small doors
      </p>
      <Button func={handleButtonClick} text="Accept & Begin" />
    </div>
  );
}

export default Hero;
