import React from "react";
import two from "../../Assets/Wheels/23 wheels/two.webp";
import { twoImg } from "./WheelsData";

const TwoWheels = () => {
    return (
        <section>
            <div className="flex flex-col flex-col-reverse lg:flex-row bg-black text-white xl:h-[450px]">
                <div className="lg:w-1/2 pl-10 mt-10">
                <h2 className="font-bold text-4xl">
                        Vista "23" Wheels 
                    </h2>
                    <p className="font-semibold mt-4 xl:text-lg">
                    COMPLETELY CUSTOM - Built to order for ANY vehicle.
                    </p>
                    <ul className="list-disc font-semibold xl:text-lg mt-6">
                        <li>Available from 20-26"</li>
                        <li>1 Piece, 2 Piece or 3 Piece Configuration</li>
                        <li>Regular or Floating Center Cap</li>
                        <li>Any Surface Finish / Color Combinations Possible</li>
                    </ul>
                    <p className="font-semibold xl:text-lg mt-4">
                            Pricing is determined per customers request
                            </p>
                        <p className="font-semibold xl:text-lg mt-4">
                            Starting from $10,000 USD
                        </p>
                </div>
                <div className="lg:w-1/2">
                    <img src={two}  alt="" 
                    className="h-64 object-cover rounded-lg md:h-96 lg:w-1/2 xl:h-[450px] w-full"/>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-16">
                {twoImg.map((item, i) => (
                    
                        <img key={i} src={item.image} alt=""
                        className="object-cover w-80 h-80" />
                        
                ))}
            </div>
        </section>
    )

}
export default TwoWheels;