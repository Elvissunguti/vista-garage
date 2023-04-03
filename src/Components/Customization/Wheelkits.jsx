import React from "react";
import { Link } from "react-router-dom";
import wheelkit from "../../Assets/Customization/wheelkit.webp";

const Wheelkits = () => {
    return(
        <section>
            <div className="flex flex-col flex-col-reverse lg:flex-row bg-black text-white xl:h-[450px] mt-10">
                <div className="lg:w-1/2 pl-10 mt-10">
                    <h2 className="font-bold mt-4 text-2xl">
                        Wheels
                    </h2>
                    <p className="font-semibold mt-2">
                        We have the perfect wheels for your car.
                    </p>
                    <p className="font-semibold mt-2"> 
                        Besides our own Wheel Brands, we additionally sell other top wheel brands in the market.
                    </p>
                    <p className="font-semibold mt-2">
                        see below a sample of the wheel brands we sell and install.
                    </p>
                    <Link to="/contact us">
                    <button className="bg-white text-black px-5 py-3 md:text-lg mt-2">INQUIRY</button>
                    </Link>
                </div>
                <div className="lg:w-1/2">
                    <img src={wheelkit} alt="" 
                    className="object-cover h-64 md:h-96 xl:h-[450px] w-full" />
                </div>

            </div>
        </section>
    )

}
export default Wheelkits;