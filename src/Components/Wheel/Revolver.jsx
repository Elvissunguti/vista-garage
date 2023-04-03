import React from "react";
import revolver from "../../Assets/Wheels/Revolver/revolver.webp";
import { revolverimg } from "./WheelsData";

const Revolver = () => {
    return(
        <section>
            <div>
                <div className="flex flex-col lg:flex-row bg-black text-white">
                    <img src={revolver} alt="" 
                    className="h-64 object-cover md:h-96 lg:w-1/2 xl:h-[450px]"/>

                    <div className="pl-10 md:pb-10">
                        <h2 className="font-bold text-5xl mt-10">
                            Vista "Revolver" Wheels
                        </h2>
                        <p className="mt-4 font-semibold xl:text-lg">
                            COMPLETELY CUSTOM - BUILD BY ORDER
                        </p>
                        <ul className="list-disc font-semibold xl:text-lg mt-6">
                            <li>Available from 20-26"</li>
                            <li>1 Piece, 2 Piece or 3 Piece Configurations</li>
                            <li>Regular or Floating Center Cap</li>
                            <li>Any Surface Finish / Color Combination possible</li>
                        </ul>
                        <p className="font-semibold xl:text-lg mt-4">
                            Pricing is determined per customers request
                            </p>
                        <p className="font-semibold xl:text-lg mt-4">
                            Starting from $10,000 USD
                        </p>
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-4">
                    {revolverimg.map((item, i) => (
                        
                            <img key={i} src={item.image} alt=""
                            className="object-cover w-80 h-80 " />
                            
                    ))}
                </div>

            </div>
        </section>
    )

}
export default Revolver;