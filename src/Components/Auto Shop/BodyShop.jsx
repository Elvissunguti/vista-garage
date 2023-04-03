import React from "react";
import Bodyshop from "../../Assets/About/Bodyshop.webp"

const BodyShop = () => {
    return(
        <section>
            <div className="my-16">
                <div className="flex flex-col lg:flex-row bg-black text-white">
                    <img src={Bodyshop}  alt=""
                    className="h-64 object-cover md:h-96 lg:w-1/2 xl:h-[450px] w-full"/>
                    <div className="pl-10 md:pb-10">
                        <h2 className="font-bold mt-10 text-2xl">
                            BODY SHOP
                        </h2>
                        <p className="font-semibold">
                        Our Auto Body Repair Specialists will take care of all your body shop needs.
                        <br></br> From custom body work to collision repairs
                        </p>
                        <p className="font-semibold mt-4">
                            All in-house.
                        </p>
                        <button className="bg-white px-5 py-3 m-5 text-black text-lg">
                            INQUIRY
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )

}
export default BodyShop;