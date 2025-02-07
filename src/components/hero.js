import React from "react";
import { FaCheck } from "react-icons/fa6";

const Hero = () => (
    <section id="home" className="">
      <div className="md:flex-row grid grid-cols-1 h-screen md:h-[70vh] lg:h-[50vh] md:grid-cols-2 md:gap-2">
        <div className=" bg-main h-1/2 md:h-full md:col-span-1">
          <div className="inset-0 top-1 text-left text-acc lg:p-8 lg:pt-16 lg:align-middle">
            <h1 className="p-2 m-1 font-semibold text-lg xs:p-1 xs:text-sm md:p-3 md:text-xl lg:text-3xl">BoderTact</h1>
            <p className="p-2 m-1 text-lg xs:p-1 xs:text-sm md:p-3 lg:text-2xl">Navigating customs regulations can be complex, but expert guidance ensures a smooth, compliant, and cost-effective supply chain.</p>
            
              <ul className="text-sm font-semibold lg:text-xl">
                <li className="p-2 m-2 xs:p-1 md:p-3 lg:p-5"><FaCheck className="inline-block align-middle mr-3"/>Local Expertise: Based in Kenya, we offer deep insights into local customs processes and challenges.</li>
                <li className="p-2 m-2 xs:p-1 md:p-3 lg:p-5"><FaCheck className="inline-block align-middle mr-3"/>Seamless Coordination: Bridging the gap between importers and clearing firms for efficient operations.</li>
                <li className="p-2 m-2 xs:p-1 md:p-3 lg:p-5"><FaCheck className="inline-block align-middle mr-3"/>Holistic Customs Solutions: In-depth assessment of compliance risks, opportunities, and enhancements.</li>
              </ul> 
          </div>
          <div className="h-1/2 object-cover md:col-span-1 md:h-full " style={{ backgroundImage: `url(${require("./deliveryman.jpg")})`, backgroundAttachment: "", // Keeps background fixed
            backgroundSize: "cover"}}>
          </div>
        </div>
      </div>
    </section>
)

export default Hero;