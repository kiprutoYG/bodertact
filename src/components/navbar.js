import React from "react";

const Navbar = () => (
    <nav className="bg-white text-black p-4 w-full  h-34 items-center sticky top-0 shadow-md sm:text-lg md:text-2xl py-5">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="bg-black sm:text-2xl md:text-3xl font-bold">BoderTact</h1>
            <ul className="flex space-x-6">
                <li className="sm:text-lg md:text-xl"><a href="#home">Home</a></li>
                <li className="sm:text-lg md:text-xl"><a href="#about">About</a></li>
                <li className="sm:text-lg md:text-xl"><a href="#services">Services</a></li>
                <li className="sm:text-lg md:text-xl"><a href="#pricing">Pricing</a></li>
            </ul>
        </div>
    </nav>
)

export default Navbar;