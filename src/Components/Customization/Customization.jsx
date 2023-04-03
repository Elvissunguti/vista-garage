import React from "react";
import Nav from "../Hero/Nav";
import Bodykits from "./Bodykits";
import CarWraps from "./CarWraps";
import More from "./More";
import Wheelkits from "./Wheelkits";

const Customization = () => {

    const components = [
        {name: CarWraps},
        {name: Bodykits},
        {name: Wheelkits},
        {name: More},
    ];

    return(
        <section>
            <div>
                {/*nav */}

                <Nav />
            </div>
            <div className="px-2 mt-10 mx-auto max-w-5xl xl:max-w-7xl xl:px-0">
                <div className="">
                <div className=""> 
                    <h2 className="title text-gray-700 text-center text-4xl font-bold xl:text-5xl">
                        CUSTOMIZATION
                    </h2>
                    <p className="font-semibold text-center mt-5 mx-auto md:w-[70%] xl:text-lg">
                    At RDB LA we are well known for our full vehicle customization options. Our highly experienced team will take care of any custom job including body kits, suspension, vehicle wraps, paint, wheels and more.
                    </p>
                    <p className="font-semibold text-center xl:text-lg">
                    Our Reputation and Experience is unmatchable!
                    </p>
                </div>
                </div>
                <div>
                    {components.map((component, i) => (
                        <div key={i}>
                            <component.name />
                        </div>
                    ))}
                </div>
                <form className="text-center mb-10 md:w-[70%] space-y-5 mx-auto mt-10">
                
                <h2 className="font-bold mb-4 text-xl">YOU CAN ALSO CONTACT US HERE:</h2>
                <label className="block">
                    <input type="text" placeholder="Name" className="outline-none sm:w-full border py-3 px-2 md:w-2/3 bg-gray-100 " />
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
                    className="outline-none border sm:w-full p-2 rounded md:w-2/3 bg-gray-100" />
                </label>
                <label>
                    <input
                    type="submit" value="SEND"
                    className="bg-blue-400 outline-none border p-2 rounded cursor-pointer hover:bg-green-400 hover:text-white" />
                </label>
            </form>
            </div>
        </section>
    );

}
export default Customization;