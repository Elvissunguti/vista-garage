import React, { useState } from "react";
import Nav from "../Hero/Nav";
import belts_horses from "../../Assets/Service/belts_horses.jpg";
import { Link } from "react-router-dom";
import { question } from "./ServiceData";

const Belts = () => {
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
                <h2 className="my-10 font-bold text-2xl xl:text-4xl text-center title">BELTS & HOSES</h2>
                <div className="lg:w-1/2">
                    <img src={belts_horses} alt=""
                     className="h-full w-full object-cover" />
                </div>
                <div>
                    <h2 className="font-bold my-6 text-2xl xl:text-3xl">
                        SERVICE OVERVIEW
                    </h2>
                    <p>
                    We offer a full range of garage services to vehicle owners in Kenya. Our professionals know how to handle a wide range of car services. Whether you drive a passenger car or medium sized truck or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our car shop. We can help you with everything from a belt change. We can handle any problem on both foreign and domestic vehicles.
                    <br></br><br></br>
                    Our professionals know how to handle a wide range of car services. Whether you drive a passenger car or medium sized truck or SUV, our mechanics strive to ensure that your vehicle will be performing at its best.
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
export default Belts;