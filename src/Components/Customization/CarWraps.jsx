import React from "react";
import { Link } from "react-router-dom";
import carwrap from "../../Assets/Customization/carwrap.webp";

const CarWraps = () => {
    return(
        <section>
            <div className="flex flex-col flex-col-reverse lg:flex-row  bg-black text-white xl:h-[450px]">
                <div className="lg:w-1/2 pl-10 mt-10">
                    <h2 className="font-bold mt-4 text-2xl">
                        CAR WRAPS
                    </h2>
                    <p className="font-semibold mt-2">
                        For years we have been Pioneers in pushing the limits for car wraps.
                    </p>
                    <p className="font-semibold md:w-[70%]">
                    Our experienced Team will take care of anything related to vehicle wraps.
                    <br></br>Cars, Trucks, Snowmobiles, Go-Carts - nothing is impossible!
                    <ul className="list-disc pl-6">
                        <li>Paint Protection film(Gloss/film)</li>
                        <li>Full Color Change incl. Door jambs</li>
                        <li>Decals</li>
                        <li>Custom Printed Wraps</li>
                        <li>etc.</li>
                    </ul>
                    </p>
                    <p className="font-semibold md:w-[70%]">
                        See below a sample of the vinyl brands we use.
                    </p>
                    <Link to="/contact us">
                    <button className="bg-white text-black px-5 py-3 md:text-lg mt-2">INQUIRY</button>
                    </Link>
                </div>
                <div className="lg:w-1/2">
                    <img src={carwrap} alt=""
                    className="h-64 object-cover md:h-96 xl:h-[450px] w-full" />
                </div>
            </div>
        </section>
    )

}
export default CarWraps;