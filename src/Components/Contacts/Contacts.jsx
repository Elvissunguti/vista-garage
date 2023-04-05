import React from "react";
import Nav from "../Hero/Nav";

const Contacts = () => {

    return(
        <section>
            <div>
                {/* nav */}
                <Nav />
            </div>
            <div className="mx-auto mt-10 max-w-5xl px-2 xl:px-0 xl:max-w-7xl">
                <div className="flex justify-center w-full py-6 mx-auto pt-6 bg-black text-white">
                    <div className="text-center">
                    <h2 className="font-bold text-3xl xl:text-4xl mb-6 ">CONTACT US</h2>
                    
                    <p className="font-semibold mb-6">SHOP OPENING HOURS</p>
                    <p>
                        MON - Fri : 8am - 9pm
                        <br></br>
                        SATURDAY :  8am - 3pm
                    </p>
                    </div>
                </div>
                <div className="flex flex-col gap-5 md:flex-row mt-10  gap-4 mb-6 pb-10 px-6">
                    <div className="p-5 text-center space-y-2 md:w-1/3 bg-blue-700 text-white mx-auto sm:w-full hover:shadow-2xl duration-700">
                        <h2 className="font-bold mb-4 text-xl">SHOP ADDRESS</h2>
                        <p className="font-semibold">
                            VIsta GROUP INC 
                            <br></br>
                            2378 Industrial Area
                            <br></br>
                            Nairobi, Kenya

                        </p>
                    </div>
                    <div className="p-5 text-center space-y-2 md:w-1/3 sm:w-full bg-blue-700 text-white mx-auto hover:shadow-2xl duration-700">
                        <h2 className="font-bold mb-4 text-xl ">PHONE</h2>
                        <p className="font-semibold">
                            PHONE: +254 7427 62754
                            <br></br>
                            SMS: +254 7427 62754
                        </p>
                    </div>
                    <div className="p-5 text-center space-y-2 md:w-1/3 sm:w-full bg-blue-700 text-white mx-auto hover:shadow-2xl duration-700">
                        <h2 className="font-bold mb-4 text-xl">E-MAIL</h2>
                        <p className="font-semibold">
                            Auto Shop & Customisation:
                            <br></br>
                            info@vistagarage.com 
                            <br></br>
                            Merchandise:
                            <br></br>
                            merchandise@vistagarage.com
                        </p>
                    </div>
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
    );
}
export default Contacts;