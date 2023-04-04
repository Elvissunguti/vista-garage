import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Hero/Nav";
import { brakeImg, question } from "./ServiceData";

const Brake = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const handlePanelClick = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };

    return(
        <section>
            <div>
                {/* nav */}
                <Nav />
            </div>
            <div className="px-2 mt-10 mx-auto max-w-5xl xl:max-w-7xl xl:px-0">
                <h2 className="font-bold my-10 text-2xl xl:text-4xl text-center title">BRAKE REPAIR</h2>
                <div className="flex flex-row">
                    {brakeImg.map((item, i) => (
                        <div key={i} className="w-1/2">
                            <img src={item.image} alt="" 
                             className="h-full w-full object-cover sm:h-96"  />
                        </div>
                    ))}

                </div>
                <div>
                    <h2 className="font-bold text-2xl xl:text-3xl my-6">SERVICE OVERVIEW</h2>
                    <p>Friendly, expert brake repair service from Vista Garage. Your safety is our number one priority and your braking system is the single most important safety feature on your car or truck. For this reason, it’s very important that you bring your vehicle in for service if you’re experiencing problems with your braking system.Common signs that your vehicle is in need of service can include:</p>
                    <ol className="list-decimal list-inside my -4 px-4">
                        <li>A squealing or grinding sound when your brakes are applied</li>
                        <li>A pulsating sensation when you step on the brakes</li>
                        <li>A ‘brake’ icon illuminated on your dashboard</li>
                        <li>An ‘ABS’ icon illuminated on your dashboard</li>
                        <li>A ‘soft’ or ‘spongy’ feeling brake pedal</li>
                        <li>Unusual odors emitting from the wheels after the brakes are applied</li>
                    </ol>
                    <p>
                     We’ll perform a thorough inspection of your vehicle’s braking system, which can include disk and drum brakes, your ABS system, brake fluid level and condition, and other braking system components.
                    <br></br><br></br>
                     Once the diagnostics is complete, you will be properly informed before any repair work begins, ensuring that you understand the problem, the repair process and all estimated costs involved.
                     <br></br><br></br>
                     Our technicians will make sure your braking system is serviced in accordance with your vehicle’s manufacturer specifications, including all replacement parts.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row mt-6 gap-5">
                    <div className="lg:w-1/2">
                    <h2 className="font-bold text-2xl">WHY CHOOSE US?</h2>

                        <p>
                        We offer a full range of garage services to vehicle owners in Kenya. We can help you with everything from an oil change to an engine change. We can handle any problem on both foreign and domestic vehicles.
                        </p>
                        <ul className="pl-6">
                            <li><span className="text-blue-400">&#10004;</span> We are a Toyota Authorised Service Centre</li>
                            <li><span className="text-blue-400">&#10004;</span> We make auto repair more convenient for you</li>
                            <li><span className="text-blue-400">&#10004;</span> We are a friendly and professional group of people</li>
                            <li><span className="text-blue-400">&#10004;</span> We handle a wide range of car services</li>
                            <li><span className="text-blue-400">&#10004;</span> Same day service for most repairs and maintenance</li>
                            <li><span className="text-blue-400">&#10004;</span> We get the job done right — the first time</li>
                        </ul>
                    </div>
                    <div className="lg:w-1/2">
                        <h2 className="font-bold text-2xl">POPULAR QUESTIONS</h2>
                       <div>
                       {question.map((panel, index) => (
        <div className="panel" key={index}>
          <div className={`panel-header ${openIndex === index ? 'open' : ''}`} onClick={() => handlePanelClick(index)}>
            {panel.title}
          </div>
          <div className={`panel-body ${openIndex === index ? 'open' : ''}`}>
            {panel.answer}
          </div>
        </div>
      ))}

                        </div> 
                    </div>
                </div>
                <div className="my-16 bg-gray-600 flex flex-row items-center text-white py-10 rounded-xl gap-16 justify-center">
                    <div>
                        <h2 className="font-bold text-xl">GET IN TOUCH WITH US</h2>
                        </div>
                        <div>
                        <button className="border border-green-500 py-4 px-10 md:py-2 lg:px-4 font-bold rounded-full hover:bg-green-500 hover:text-white duration-700">
                            <Link to="/contact us">CONTACT US</Link> 
                            </button>
                    </div>
                    </div>
            </div>
        
        </section>
    )
    
}
export default Brake;