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
            <form className="mb-10 text-center md:w-[70%] space-y-5 mx-auto mt-10 max-w-5xl px-2 xl:px-0 xl:max-w-7xl">
                
                <h2 className="font-bold mb-4">YOU CAN ALSO CONTACT US HERE:</h2>
                <label className="block">
                    <input type="text" placeholder="Name" className="outline-none sm:w-full border py-3 px-2 md:w-2/3 bg-gray-100" />
                </label>
                <label className="block">
                    <input type="email" placeholder="Email" className="outline-none sm:w-full border py-3 px-2 md:w-2/3 bg-gray-100 " />
                </label>
                <label className="block">
                    <input type="tel"  placeholder="Phone number" className="outline-none sm:w-full border py-3 px-2 md:w-2/3 bg-gray-100" />
                </label>
                <label className="block">
                    <textarea type="text"  placeholder="Comments"
                    rows={window.screen.width > 768 ? "4" : "3"}
                    className="outline-none border p-2 rounded sm:w-full md:w-2/3 bg-gray-100" />
                </label>
                <label>
                    <input
                    type="submit" value="SEND"
                    className="bg-blue-400 outline-none border p-2 rounded cursor-pointer hover:bg-green-400 hover:text-white" />
                </label>
            
             

            </form>

        </section>
    )

}
export default AutoShop;