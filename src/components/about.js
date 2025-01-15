import React from "react";

const About = () => (
    <section id="about" className="flex flex-col h-fit items-center pt-10">
        <div className="container text-black mx-auto">
            <h1 className="md:text-3xl sm:text-2xl font-extrabold pb-5">About BoderTact</h1>
            <div className="container text-left w-fit flex flex-col">
                <div>
                    <ul className="flex flex-row space-x-5 sm:text-lg md:text-2xl py-4">
                        <li className="hover:bg-main font-semibold">Overview</li>
                        <li className="hover:bg-main font-semibold"><a href="#core">Core Values</a></li>
                    </ul>
                </div>
                <div className="container flex flex-col">
                    <p className="sm:text-lg md:text-xl py-3">At BoderTact Consulting, we specialize in providing comprehensive customs solutions that help businesses navigate the complexities of international trade.
                     Our experienced team is dedicated to simplifying the process of customs compliance through a range of services, including harmonized code generation, customs valuation, and expert consultation.</p>
                </div>
            </div>
        </div>
    </section>
)

export default About;