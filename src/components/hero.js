import React from "react";
import { FaCheck } from "react-icons/fa6";

const Hero = () => (
    <section id="home">
      <div className="flex flex-col lg:flex-row h-[80vh] lg:h-[50vh]">
        <div className="relative h-1/2 lg:h-full lg:w-1/2 bg-main bg-cover">
          <div className="absolute h-1/2 lg:h-full pr-8 ml-6 flex flex-col text-acc text-left py-8">
            <h1 className="lg:text-4xl sm:text-2xl font-bold py-10">BoderTact</h1>
            <p className="lg:text-2xl sm:text-lg pb-7">Navigating customs regulations can be complex, but expert guidance ensures a smooth, compliant, and cost-effective supply chain.</p>
            <div>
              <ul className="font-semibold lg:text-xl sm:text-sm">
                <li className="pt-5"><FaCheck className="inline-block align-middle mr-3"/>Local Expertise: Based in Kenya, we offer deep insights into local customs processes and challenges.</li>
                <li className="py-8"><FaCheck className="inline-block align-middle mr-3"/>Seamless Coordination: Bridging the gap between importers and clearing firms for efficient operations.</li>
                <li className="pb-5"><FaCheck className="inline-block align-middle mr-3"/>Holistic Customs Solutions: In-depth assessment of compliance risks, opportunities, and enhancements.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="relative lg:h-full h-1/2 lg:w-1/2" style={{ backgroundImage: `url(${require("./deliveryman.jpg")})`, backgroundAttachment: "", // Keeps background fixed
            backgroundSize: "cover"}}>

        </div>
      </div>
    </section>
)

export default Hero;