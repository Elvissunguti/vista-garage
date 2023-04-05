import React from "react";
import signature from "../../Assets/Wheels/Signature/signature.webp";
import { SignImg } from "./WheelsData";

const Signature = () => {
    return(
        <section>
            <div className="flex flex-col flex-col-reverse lg:flex-row bg-black text-white xl:h-[450px] ">
                <div className="mt-10 lg:w-1/2 pl-10 my-8">
                <h2 className="font-bold text-4xl">
                        Vista "Signature" Wheels 
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
                    <img src={signature} alt=""
                    className="h-64 object-cover rounded-lg md:h-96  xl:h-[450px] w-full" />

                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ">
                {SignImg.map((item, i) => (
                    
                        <img  key={i} src={item.image} alt=""
                        className="object-cover w-80 h-80" />
                    
                ))}
            </div>
        </section>
    );
};
export default Signature;