import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import car1 from "../../Assets/Background/car1.jpg";
import car2 from "../../Assets/Background/car2.jpg";
import wheel3 from "../../Assets/Wheels/wheel3.jpeg";
import OilChange from "../../Assets/About/OilChange.jpg";
import engine from "../../Assets/About/engine.jpeg";



 
const Hero = () => {
  const [backgroundImages, setBackgroundImages] = useState([
    car1,
    car2,
    wheel3,
    OilChange,
    engine,
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, backgroundImages]);

  const handleNextClick = () => {
    setCurrentImageIndex(
      currentImageIndex === backgroundImages.length - 1
        ? 0
        : currentImageIndex + 1
    );
  };

  const handlePreviousClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0
        ? backgroundImages.length - 1
        : currentImageIndex - 1
    );
  };
  
 
    return (
       <section className="h-max lg:h-[110vh] flex flex-col relative"
       id="home">
        {/* Nav */}
         
         <Nav />

         {/*Hero */}
         <div
      className="h-full bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImages[currentImageIndex]})` }}
    >
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
        onClick={handlePreviousClick}
      >
        Previous
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded"
        onClick={handleNextClick}
      >
        Next
      </button>
      
    </div>
       </section>
    );

};
export default Hero;