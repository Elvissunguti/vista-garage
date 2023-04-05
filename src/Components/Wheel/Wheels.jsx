import React from "react";
import Nav from "../Hero/Nav";
import FiftyWheels from "./FiftyWheels";
import Masterpiece from "./Masterpiece";
import Revolver from "./Revolver";
import Signature from "./Signature";
import TwoWheels from "./TwoWheels";
import Zero from "./Zero";

const Wheels = () => {

    const components = [
        {name: FiftyWheels},
        {name: Masterpiece},
        {name: Revolver},
        {name: Signature},
        {name: Zero},
        {name: TwoWheels},
    ]
    return(
        <section>
            <div>
                <Nav />
            </div>
            <div className="mx-auto mt-10 max-w-5xl px-2 xl:px-0 xl:max-w-7xl">
                <h2 className="title text-gray-700 text-center text-4xl font-bold xl:text-5xl">
                    Vista Wheels 
                </h2>
                <p className="text-center font-semibold mt-4 text-lg">
                    Only Available through Vista Garage.
                </p>
                <p className="text-center font-semibold text-lg">
                    Anywhere else is unauthorised.
                </p>
                <p className="text-center font-semibold mt-7 text-lg">
                Below are some of our designs however we can design any wheel you like.
                <br></br> We are not limited to just these designs!
                </p>
                <div className="mt-10 space-y-16 xl:space-y-32">
                {components.map((component, i) => (
                    <div key={i}>
                        <component.name />

                    </div>
                ))}

            </div>

            <form className="text-center mb-10 md:w-[70%] space-y-5 mx-auto h-full">
                
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
            </div>
        </section>
    )

}
export default Wheels;