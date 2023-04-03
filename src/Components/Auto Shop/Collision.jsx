import React from "react";
import collision from "../../Assets/About/collision.webp";

const Collision = () => {
    return (
        <section>
                <div className="flex flex-col lg:flex-row bg-black text-white">
                    <img src={collision} alt="" 
                    className="h-64 object-cover md:h-96 lg:h-96 xl:h-[450px] lg:w-1/2" />
                 <div>
                 <div className="px-6 ">
                        <h2 className="font-bold text-2xl mt-10">
                            COLLISION SERVICE
                        </h2>
                        <p className="font-semibold mt-4">
                            With our long experience in collision repair and our strong chain for spare parts,<br></br> we can take care of all collision repair.
                        </p>
                        <p className="font-semibold lg:text-lg mt-4">
                            We accept all insurance companies
                        </p>
                       
                        <button className="bg-white px-5 py-3 m-5 text-black text-lg mt-4">
                            INQUIRY
                        </button>
                 </div>  
                </div>
            </div>
        </section>
    );
};
export default Collision;