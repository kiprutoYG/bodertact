import React from "react";

const Hero = () => (
    <section id="home">
        <div className="relative w-full h-[50vh]" style={{ backgroundImage: `url(${require("./deliveryman.jpg")})`, backgroundAttachment: "fixed", // Keeps background fixed
          backgroundSize: "cover",
          backgroundPosition: "center"}}>
      {/* Gradient Overlay (Same Height as Image) */}
      <div className="absolute inset-0 bg-gradient-to-r from-main to-50%"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="mt-4 text-lg">We provide amazing services to help your business grow.</p>
      </div>
      </div>
    </section>
)

export default Hero;