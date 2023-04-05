import React from "react";
import Nav from "../Hero/Nav";
import BodyShop from "./BodyShop";
import Collision from "./Collision";
import Mechanical from "./Mechanical";
import PaintJob from "./PaintJob";


const AutoShop = () => {

    const  components = [
        {name: Mechanical},
        {name: BodyShop},
        {name: PaintJob},
        {name: Collision},
    ];

    return(
        <section>
            <div>
                {/* nav */}
                <Nav />
            </div>
            <div className="flex justify-center mx-auto mt-10 max-w-5xl px-2 xl:px-0 xl:max-w-7xl">
                <div className="mx-auto  ">
                    <h2 className="title text-gray-700 text-center text-4xl font-bold xl:text-5xl">
                    MECHANICAL, AUTO BODY, PAINT & COLLISION SERVICES
                    </h2>
                    <p className="font-semibold md:w-[70%] mx-auto xl:text-lg text-center">
                     At Vista Garage Each single vehicle is treated with special care and attention to detail.
                     <br></br>
                     We only use the best material available in the market, and we specialize in high quality auto work.
                     <br></br>
                     Our 35+ Years of Auto Body experience is proof of our consistent quality and customer satisfaction.
                     <br></br>
                      We work on all cars, but we specialise in high-end vehicles including, Lamborghini, Ferrari, Rolls Royce, McLaren, BMW, Mercedes Benz, Lexus and more!
                    </p>
                </div>
            </div>
            <div className="mx-auto mt-4 max-w-5xl px-2 xl:px-0 xl:max-w-7xl">
            <div className="mt-4 space-y-16 xl:space-y-26">
                {components.map((component, i) => (
                    <div key={i}>
                        <component.name />

                    </div>
                ))}

            </div>
            </div>

            <form className="text-center mb-10 md:w-[70%] mt-4 space-y-5 mx-auto h-full">
                
                <h2 className="font-bold mb-4 md:text-2xl sm:text-xl">YOU CAN ALSO CONTACT US HERE:</h2>

                <div className="flex flex-col lg:flex-row gap-5">
                <div className="lg:w-1/2">
                <label className="block">
                    <input type="text" placeholder="Name" className="outline-none sm:w-full border py-3 px-2  bg-gray-100 " />
                </label>
                <label className="block mt-4">
                    <input type="email" placeholder="Email" className="outline-none sm:w-full border py-3 px-2  bg-gray-100 " />
                </label>
                <label className="block mt-4">
                    <input type="tel"  placeholder="Phone number" className="outline-none sm:w-full border py-3 px-2  bg-gray-100" />
                </label>
                </div>
                <div className="lg:w-1/2 h-full">
                <label className="block">
                    <textarea type="text"  placeholder="Comments"
                    rows={window.screen.width > 768 ? "7" : "3"}
                    className="outline-none border sm:w-full p-2 rounded  bg-gray-100" />
                </label>
                </div>
                </div>
                <label>
                    <input
                    type="submit" value="SEND"
                    className="bg-blue-400 mt-4 outline-none border text-lg px-2 py-3 rounded cursor-pointer hover:bg-green-400 hover:text-white text-bold" />
                </label>

            </form>
        </section>
    )

}
export default AutoShop;