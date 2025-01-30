import React from "react";
import codeImg from'./shopping.jpg';

const Services = () => (
    <section id="services" className="flex flex-col h-fit items-center pt-10">
        <div className="container text-black mx-4">
            <h1 className="md:text-xl sm:text-lg mb-3">Our Services</h1>
        </div>
        <div className="flex flex-col mx-4">
            <div className="container py-4">
                <div className="flex flex-row flex-grow">
                    <div>
                        <h1>Harmonized Code Generation</h1>
                        <p>Proper classification of your products is essential for smooth customs clearance. 
                            Our Harmonized Code Generation service ensures that your goods are classified correctly under the global Harmonized System (HS) codes. 
                            By accurately assigning the appropriate codes, we help you avoid costly delays, fines, and penalties, while ensuring you meet all legal and regulatory 
                            requirements for imports and exports.</p>
                    </div>
                    <div className="container pl-20"><img src= {codeImg} alt="harmonized code" style={{height: '200px', opacity: '0.6', borderRadius: '30px'}}/></div>
                    
                </div>
            </div>
            <div className="container py-4">
                <h1>Customs Valuation</h1>
                <p>Customs valuation is a critical part of the import and export process, influencing the duties and taxes applied to your shipments. 
                    We offer expert customs valuation services to determine the correct transaction value of goods and ensure compliance with local and international customs laws. 
                    Our team uses proven methodologies to assess the fair value of your products while minimizing unnecessary costs and maximizing profitability.</p>
            </div>
            <div className="container py-4">
                <h1>Customs Consultation</h1>
                <p>Navigating the ever-changing landscape of customs regulations can be overwhelming for businesses engaged in global trade. 
                    Our Customs Consultation service provides you with tailored advice to ensure that your business stays compliant with all relevant regulations and takes advantage of available trade opportunities. 
                    Whether you need assistance with documentation, tariff analysis, or regulatory compliance, our team offers practical solutions to streamline your international trade processes.</p>
            </div>
        </div>
    </section>
)

export default Services;