import React from "react";

const About = () => (
    <section id="about" className="flex flex-col h-fit items-center pt-10">
        <div className="container text-black mx-auto">
            <h1 className="md:text-3xl sm:text-2xl font-extrabold pb-5">About BoderTact</h1>
            <div className="container text-left w-fit flex flex-col">
                <div>
                    <h1 className="md:text-xl sm:text-lg font-bold mb-3">Overview</h1>
                </div>
                <div className="container flex flex-col">
                    <p className="sm:text-lg md:text-xl py-3">At BoderTact Consulting, we specialize in providing comprehensive customs solutions that help businesses navigate the complexities of international trade.
                     Our experienced team is dedicated to simplifying the process of customs compliance through a range of services, including harmonized code generation, customs valuation, and expert consultation.</p>
                </div>
                <div>
                    <h1 className="md:text-xl sm:text-lg font-bold mb-3 mt-3">Core Values</h1>
                </div>
                <div className="container flex flex-col">
                    <div className="flex flex-row py-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg><p className="sm:text-lg md:text-xl "> <span className="font-bold">Local Expertise:</span>  With our base in Kenya, we offer deep insights into local customs processes and challenges.</p>
                    </div>
                    <div className="flex flex-row py-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg><p className="sm:text-lg md:text-xl "> <span className="font-bold">Seamless Coordination:</span>  We bridge the gap between importers and clearing/forwarding firms for efficient, hassle-free operations.</p>
                    </div>
                    <div className="flex flex-row py-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg><p className="sm:text-lg md:text-xl "> <span className="font-bold">Customized Solutions:</span> We provide tailored strategies to meet your specific business needs, focusing on compliance, efficiency, and cost reduction.</p>
                    </div>
            </div>
            </div>
        </div>
    </section>
)

export default About;