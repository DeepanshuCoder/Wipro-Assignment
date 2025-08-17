import React from "react";
import ServiceCard from "./ServiceCard";

function TailorShop() {
    const services = [
        {
            serviceName: "Shirt",
            price: 20,
            fabricsAvailable: ["Cotton", "Linen", "Polyester"],
        },
        {
            serviceName: "Pants",
            price: 30,
            fabricsAvailable: ["Denim", "Wool", "Chino"],
        },
        {
            serviceName: "Lehenga",
            price: 150,
            fabricsAvailable: ["Silk", "Georgette", "Chiffon"],
        },
        {
            serviceName: "Blouse",
            price: 40,
            fabricsAvailable: ["Cotton", "Silk", "Satin"],
        },
        {
            serviceName: "Kurta",
            price: 50,
            fabricsAvailable: ["Cotton", "Khadi", "Silk"],
        },
        {
            serviceName: "Suit",
            price: 200,
            fabricsAvailable: ["Wool", "Terry Rayon", "Linen"],
        },
    ];

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Tailoring Services</h2>
            <div className="row">
                {services.map((service, index) => (
                    <ServiceCard key={index} service={service} />
                ))}
            </div>
        </div>
    );
}

export default TailorShop;
