import React from "react";

const Hero = () => (
    <section id="home" className="bg-cover bg-center bg-gradient-to-r from-cyan-800 to-blue-500 ... w-screen h-screen flex flex-col items-center sm:text-3xl md:text-4xl" 
    style={{backgroundImage: `url(${require("./deliveryman.jpg")})`,height: '400px', opacity: '0.6'}}>
        <div className="container mt-24 flex flex-col text-left">
            <h1 className="text-white font-bold sm:text-3xl md:text-5xl py-4">Welcome to BoderTact</h1>
            <h2 className="text-white sm:text-2xl md:text-4xl py-4">We offer customs advisory services</h2>
        </div>
    </section>
)

export default Hero;