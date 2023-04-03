import React from "react";
import engine_diagnostics from "../../Assets/Service/engine_diagnostics.jpg";
import wheel_tyre from "../../Assets/Service/wheel_tyre.jpg";
import car_brake from "../../Assets/Service/car_brake.jpg";
import air_conditioning from "../../Assets/Service/air_conditioning.jpg";
import belts_horses from "../../Assets/Service/belts_horses.jpg";
import oil_change from "../../Assets/Service/oil_change.jpg";
import car_wash from "../../Assets/Service/car_wash.jpg";

import Nav from "../Hero/Nav";
import { Link } from "react-router-dom";


const Services = () => {
    return(
        <section>
            <div>
            {/* Nav */}
            <Nav />
            </div>

            <div className="px-2 mt-10 mx-auto max-w-5xl xl:max-w-7xl xl:px-0 ">
                <h2 className="title font-bold text-4xl xl:text-5xl text-center">
                    Services
                </h2>
                <p className="text-lg mt-4 text-center">
                We offer a full range of garage services to vehicle owners located in the Coast.
                <br></br>Our professionals know how to handle a wide range of car services.
                </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 my-6">
                <Link to="/engine diagnostics">
                <div className="">
                    <img src={engine_diagnostics} alt=""
                     className="object-cover w-full h-full opacity-100 hover:opacity-60 transition duration-300 " />
                    <h2 className="flex justify-between p-4 font-semibold text-2xl bg-gray-200 hover:text-green-600">
                        Engine Diagnostics<span className="font-bold font-4xl hover:text-green-600">&gt;</span>
                        </h2>
                </div>
                </Link>
                <Link to="/tyre wheel">
                <div>
                    <img src={wheel_tyre} alt=""
                     className="object-cover w-full h-full opacity-100 hover:opacity-60 transition duration-300" />
                    <h2 className="flex justify-between p-4 font-semibold text-2xl bg-gray-200 hover:text-green-600">
                        Tire & Wheel Services<span className="font-bold font-4xl hover:text-green-600">&gt;</span>
                        </h2>
                </div>
                </Link>
                <Link to="/brake repair">
                <div>
                    <img src={car_brake} alt=""
                     className="object-cover w-full h-full opacity-100 hover:opacity-60 transition duration-300" />
                    <h2 className="flex justify-between p-4 font-semibold text-2xl bg-gray-200 hover:text-green-600">
                        Brake Repair <span className="font-bold font-4xl hover:text-green-600">&gt;</span>
                        </h2>
                </div>
                </Link>
                <Link to="/heating and cooling">
                <div>
                    <img src={air_conditioning} alt=""
                     className="object-cover w-full h-full opacity-100 hover:opacity-60 transition duration-300" />
                    <h2 className="flex justify-between p-4 font-semibold text-2xl bg-gray-200 hover:text-green-600">
                        Heating & Cooling <span className="font-bold font-4xl hover:text-green-600">&gt;</span>
                        </h2>
                </div>
                </Link>
                <Link to="/belts and hoses">
                <div>
                    <img src={belts_horses} alt="" 
                     className="object-cover w-full h-full opacity-100 hover:opacity-60 transition duration-300" />
                    <h2 className="flex justify-between p-4 font-semibold text-2xl bg-gray-200 hover:text-green-600">
                        Belts & Hoses <span className="font-bold font-4xl hover:text-green-600">&gt;</span>
                        </h2>
                </div>
                </Link>
                <Link to="/lube oil filters">
                <div>
                    <img src={oil_change} alt="" 
                     className="object-cover w-full h-full opacity-100 hover:opacity-60 transition duration-300" />
                    <h2 className="flex justify-between p-4 font-semibold text-2xl bg-gray-200 hover:text-green-600">
                        Lube, Oil & Filters <span className="font-bold font-4xl hover:text-green-600">&gt;</span>
                        </h2>
                </div>
                </Link>
                <Link to="/car wash">
                <div>
                    <img src={car_wash} alt="" 
                     className="object-cover w-full h-full opacity-100 hover:opacity-60 transition duration-300" />
                    <h2 className="flex justify-between p-4  font-semibold text-2xl bg-gray-200 hover:text-green-600">
                        Car Wash <span className="font-bold font-4xl hover:text-green-600">&gt;</span>
                        </h2>
                </div>  
                </Link> 
            </div>
            
            </div>
        </section>
    )

}
export default Services;