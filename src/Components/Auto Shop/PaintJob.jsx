import React from "react";
import paint from "../../Assets/About/paint.webp";

const PaintJob = () => {
    return (
        <section>
            <div className="flex flex-col flex-col-reverse lg:flex-row bg-black text-white xl:h-[450px]">
                <div className="lg:w-1/2 pl-10 mt-10">
                    <h2 className="font-bold text-2xl ">
                        PAINT SHOP
                    </h2>
                    <p className="font-bold">
                    Our Paint experts will take care of your car using only the best equipment and materials.
                    </p>
                    <p className="font-bold">
                    Using PPG paint, we offer our clients amazing paint quality and life-time warranty. 
                    </p>
                    <p className="font-bold">
                    Our state of the art Paintshop features a PPG Paint mixing station and a DownDraft Spray Booth.
                    </p>
                    <button className="bg-white px-5 py-3 m-5 text-black text-lg">
                        INQUIRY
                    </button>
                </div>
                <div className="lg:w-1/2">
                    <img src={paint} alt="" 
                    className="h-64 object-cover rounded-lg md:h-96 xl:h-[450px] w-full"/>
                </div>
            </div>
        </section>
    )

}
export default PaintJob;