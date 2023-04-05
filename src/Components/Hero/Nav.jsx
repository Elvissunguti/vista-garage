import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo/logo.png";
import { AiOutlineMenu } from "react-icons/ai";


const Nav = () => {
    const [sticky, setSticky] = useState("#")
    const  [active, setActive] = useState(false);

    const navFunc = () => {
        window.addEventListener("scroll", () => {
            if(window.pageYOffset >= 100){
                return setSticky("sticky")
            }
            setSticky("#")
        });
    };

    useEffect(() => {
        navFunc();
    },[])

    const navLinks = [
        {name: "Home"},
        {name: "Services"},
        {name: "Vista Wheels"},
        {name: "Auto Shop"},
        {name: "Customization"},
        {name: "Contact Us"}
    ];
    // disable nav onscroll
    window.addEventListener("scroll", ()=> {
        return setActive(false);
    });
    return(
        <nav className={`py-0 md:px-2 z-50 ${
            sticky === "sticky" ? `fixed w-full top-0 bg-white` : ""

        }`}>
          <div className="relative flex flex-row justify-between mx-auto items-center max-w-5xl xl:max-w-7xl">
            <Link to="/"
            className="flex flex-row h-20 items-center md:h-20 lg:h-20 xl:h-20 z-50">
            <img src={logo} alt="" className="w-full h-full object-cover z-[-10] bg-transparent" />
            <p className="-ml-3 italic text-bold md:text-lg">
                Vista Garage
            </p>
            </Link>
            <ul className={`flex flex-col items-center absolute ${
                active ? `top-[4rem]` : `top-[-450%]`
                } duration-500 w-full pb-4 bg-white space-y-3 md:flex-row md:pb-0 md:space-y-0 md:pb-0 md:relative md:w-max md-top-0 lg:space-x-8`}>
                {navLinks.map((navLink, i) => (
                    <li key={i}
                    className={`xl:text-xl ${
                        navLink.name === `Contact Us`
                        ? `border border-green-500 py-2 px-5 md:py-1 lg:px-2 rounded-full hover:bg-green-500 hover:text-white duration-700 `
                        : `px-3 hover:border-b-4 hover:border-red-500 duration-300`
                    }`}
                    >
                        <Link to={
                            navLink.name === `Home`
                            ? `/`
                            : `/${
                                navLink.name.charAt(0).toLocaleLowerCase() +
                                navLink.name.slice(1)
                            }`
                        }>
                            {navLink.name}
                        </Link>
                    </li>
                ))}

            </ul>
            <div className="flex mr-1 z-50 md:hidden"
            onClick={() => setActive(!active)}>
                <AiOutlineMenu className="text-2xl" />

            </div>
          </div>
        </nav>
    )
}
export default Nav;