import React, { Suspense } from "react";
import About from "../About/About";
import Hero from "../Hero/Hero";


const Home = () => {
    return(
        <>
        <Suspense fallback={<div>Loading...</div>}>
            <Hero />
            <About />

        </Suspense>
        </>
    )

}
export default Home;