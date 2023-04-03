import React from "react";
import { Link } from "react-router-dom";
import more from "../../Assets/Customization/more.webp";

const More = () => {
    return(
        <section>
            <div className="flex flex-col  lg:flex-row mt-10 bg-black text-white">
                <img src={more} alt=""
                 className="object-cover h-64  md:h-96 lg:w-1/2 xl:h-[450px]" />
                 <div className="w-full md:w-1/2 pl-10">
                    <h2 className="font-bold mt-4 text-2xl">
                        AND MORE
                    </h2>
                    <p className="mt-4 ">
                    Exterior & interior lighting, audio systems, full engine builds, suspension work, exhaust builds, software, etc.
                    <br />
                    <br />

                     We take care of all you customisation need.
                    </p>
                    <Link to="/contact us">
                    <button className="bg-white text-black px-5 py-3 md:text-lg mt-2">INQUIRY</button>
                    </Link>
                 </div>
               
            </div>
        </section>
    )

}
export default More;