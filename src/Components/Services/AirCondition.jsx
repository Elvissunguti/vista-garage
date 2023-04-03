import React, { useState } from "react";
import Nav from "../Hero/Nav";
import air_conditioning from "../../Assets/Service/air_conditioning.jpg";

import { Link } from "react-router-dom";
import { question } from "./ServiceData";

const AirCondition = () => {
    const [openIndex, setOpenIndex] = useState(-1);

    const handlePanelClick = (index) => {
      setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
    };


    return (
        <section>
            <div>
                {/* Nav */}

                <Nav />
            </div>
            <div className="px-2 mt-10 mx-auto max-w-5xl xl:max-w-7xl xl:px-0">
                <h2 className="my-10 font-bold text-2xl xl:text-4xl text-center title">HEATING & COOLING</h2>
                <div className="lg:w-1/2">
                    <img src={air_conditioning} alt="" 
                     className="h-full w-full object-cover" />
                </div>
                <div>
                    <h2 className="my-6 font-bold text-2xl xl:text-3xl">SERVICE OVERVIEW</h2>
                    <p>
                    Keep your car comfortable at any temperature with Homeboys Auto Garage. If you are experiencing temperature discomfort, our technicians are equipped to diagnose climate control issues and repair both air conditioning and heater systems on a wide range of car makes and models.
                     <br></br><br></br>
                    Regular maintenance and attention to your vehicle’s heating and cooling system will prevent the drying out and cracking of A/C components and leaky valves or blockages to your heater. We take the time to make sure your car’s heating and cooling system is performing as expected and won’t send you on your way till we can guarantee system performance and consistent climate control – that’s our promise
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row mt-6 gap-5">
                    <div className="lg:w-1/2 ">
                    <h2 className="font-bold text-2xl">WHY CHOOSE US?</h2>

                        <p className="mt-4">
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
                       <div className="mt-4">
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
    );

};
export default AirCondition;