import React from "react";
import { fiftyImages } from "./WheelsData";
import fifty from "../../Assets/Wheels/50 Wheels/fifty.webp";


const FiftyWheels = () => {
    return(
        <section>
            <div className="my-16">
            <div className="mt-10 flex flex-col lg:flex-row bg-black text-white ">
                <img src={fifty} alt=""
                 className="h-64 object-cover rounded-lg md:h-96 lg:w-1/2 xl:h-[450px]" />

                   <div className="pl-10 md:pb-10">
                <h2 className="font-bold  text-5xl mt-10">
                            Vista "50" Wheels
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
                <div className="grid sm:grid-cols-2 gap-2  md:grid-cols-4 ">
                    {fiftyImages.map((item, i) => (
                        
                            <img key={i}  alt="" src={item.image}
                            className="object-cover w-80 h-80" />
                        
                    ))}
                </div>
            </div>
        </section>
    );
  

}
export default FiftyWheels;