import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {

    const infoLinks = [
        {name: "Home"},
        {name: "Shipping"},
        {name: "Returns"},
        {name: "Privacy Policy"},
        {name: "Terms of Service"},
    ];

    const Links = [
        {name: "Vista Wheels"},
        {name: "Auto Shop"},
        {name: "Customization"},   
    ];

    const date = new Date();
    const year = date.getFullYear();

    return (
        <section className="footer px-2 pt-0 text-white lg:pt-10 xl:px-0 bg-black">
            <div className="space-y-10 mx-auto max-w-5xl xl:max-w-7xl">
                <div className="flex flex-col space-y-10 justify-between md:flex-row md:space-y-10">
                    <div className="space-y-3 mt-10 md:mt-0">
                        <h2 className="font-bold text-lg xl:text-2xl">
                            Info
                        </h2>
                        <div className="flex flex-col font-semibold space-y-1">
                            {infoLinks.map((infoLink, i) => (
                                <Link key={i}
                                to={
                                    infoLink.name === "Home"
                                    ? "/"
                                    : `/${infoLink.name.charAt(0).toLowerCase() + infoLink.name.slice(1)
                                    }`
                                }
                                className="md:ml-3 hover:border-b-2 hover:border-red-500 duration-300" 
                                >
                                {infoLink.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="font-bold text-lg xl:text-2xl">
                            Useful Links
                        </h2>
                        <div className="flex flex-col font-semibold space-y-1">
                            {Links.map((link, i) => (
                                <Link key={i}
                                to={`/${
                                   link.name.charAt(0).toLowerCase() + link.name.slice(1) 
                                }`}
                                className="md:ml-3 hover:border-b-4 hover:border-red-500 duration-300"
                                >
                                {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="space-y-1 w-2/3">
                            <h2 className="font-bold text-lg xl:text-2xl">
                                Customer Service
                            </h2>
                            <p className="font-semibold">
                            Do you have a questions about our services, products or your orders? Feel free to send us an email.
                            </p>
                            <p className="font-semibold">
                            AUTO SHOP: info@vistagarage.com
                            </p>
                            <p className="font=semibold">
                            MERCHANDISE: merchandise@vistagarage.com
                            </p>
                        </div>
                    </div>
                    </div>
                    <div className="pt-3 border-t border-dashed pb-3">
                        <p className="text-center">
                            &#169;{year} Copyright Vista Garage, All Right Reserved
                        </p>
                    </div>
            </div>
        </section>
    )
}
export default Footer;