import React from "react";
import engine from "../../Assets/About/engine.jpeg";

const Mechanical = () => {
    return(
        <section>
            <div className="flex flex-col flex-col-reverse lg:flex-row bg-black text-white xl:h-[450px]">
                <div className="lg:w-1/2 pl-10 mt-10">
                    <h2 className="font-bold mt-10 text-2xl">
                        MECHANICAL WORK
                    </h2>
                    <p className="font-semibold">
                    RDB LA is a full mechanical shop and service center. We can properly repair or service your vehicle. From full collision repair, engine builds to basic maintenance like an oil change, transmission service, A/C service etc.
                    </p>
                    <p className="font-semibold mt-4">Honest and transparent pircing.</p>

                    <p className="font-semibold mt-4">All vehicle models/types are welcome!</p>
                    <div >
                        <button className="bg-white px-5 py-3 m-5 text-black text-lg">INQUIRY</button>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <img src={engine} alt="" 
                    className="h-64 object-cover rounded-lg md:h-96  xl:h-[450px] w-full" />
                </div>

            </div>
        </section>
    );

}
export default Mechanical;