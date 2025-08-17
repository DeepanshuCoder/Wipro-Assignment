import React from "react";

function ServiceCard({ service }) {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 text-center shadow">
                <div className="card-body">
                    <h4 className="card-title">{service.serviceName}</h4>
                    <p className="card-text">
                        <strong>Price:</strong> ${service.price}
                    </p>
                    <h6>Fabrics:</h6>
                    <ul className="list-unstyled">
                        {service.fabricsAvailable.map((fabric, index) => (
                            <li key={index}>- {fabric}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
