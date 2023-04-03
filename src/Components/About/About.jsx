import React from "react";
import { chooseData, list } from "../Home/HomeData";
import serviceImg from "../../Assets/Service/serviceImg.jpg";
import { Link } from "react-router-dom";

const About = () => {
    return(
        <section className="">
            <div className="mx-auto max-w-5xl px-2 py-10 md:py-16 xl:mt-32 xl:max-w-7xl xl:px-0">
                <h2 className="title text-4xl xl:text-5xl text-center">
                    WHY CHOOSE US
                </h2>
                <p className="text-center text-lg">
                We are one of the leading auto repair shops serving customers in Kenya.
                <br></br>
                All mechanic services are performed by highly qualified mechanics
                </p>
                <div className="flex flex-col gap-5 mt-10 md:flex-row">
                    {chooseData.map((items, i) => (
                        <div key={i}
                        className="p-5 text-center space-y-2 rounded-xl md:w-1/3 hover:shadow-2xl duration-700">
                            <img src={items.image} alt=""
                            className="mx-auto object-cover" />
                            <h2 className="font-semibold text-xl title">{items.title}</h2>
                            <p>{items.content}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col lg:flex-row mt-16 gap-4 bg-gray-100 ">
                    <img src={serviceImg} alt="" 
                    className="object-cover rounded-lg lg:w-1/2"/>
                    <div className="flex justify-center">
                        <div className="py-6">
                        <h2 className="font-semibold text-4xl xl:text-4xl text-center title">VEHICLES SERVICED</h2>
                        <p className="text-lg text-center">
                        We provide top notch maintenance service for all types of vehicles.
                        <br></br>
                         We are experienced to service and repair the following makes:
                        </p>

                        <ul className="grid grid-cols-3 gap-4 pl-10 mt-6">
                            {list.map((item) => (
                                <li key={item} className="col-span-1"> 
                                    <span className="text-blue-400">&#10004;</span> {item.name}
                                </li>
                            ))}
                         </ul>
                         </div>
                    </div>
                </div>
                <div className="mt-16 bg-gray-600 flex flex-row items-center text-white py-10 rounded-xl gap-16 justify-center">
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
export default About;