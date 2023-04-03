import React from "react";
import { Link } from "react-router-dom";
import bodykit from "../../Assets/Customization/bodykit.webp";

const Bodykits = () => {
    return(
        <section>
            <div className="flex flex-col lg:flex-row bg-black text-white mt-10 ">
                <div className="w-full md:w-1/2 ">
                <img src={bodykit} alt="" 
                className="w-full h-64 object-cover md:h-96 xl:h-[450px]" />
                </div>
                <div className="mt-10 w-full md:w-1/2 pl-10">
                    <h2 className="font-bold mt-4 text-2xl">
                        BODYKITS
                    </h2>
                    <p className="font-semibold mt-2">
                         We are famous for our Widebody Builds that broke the internet multiple times.
                    </p>
                    <p className="font-semibold mt-2 md:w-[70%]">
                        Our experience team can install all body kits out there with perfect fit and professional installation guaranteed.
                    </p>
                    <Link to="/contact us">
                    <button className="bg-white text-black px-5 py-3 md:text-lg mt-2">INQUIRY</button>
                    </Link>
                 
                </div>
            </div>
        </section>
    )

}
export default Bodykits;