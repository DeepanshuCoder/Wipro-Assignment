import React, { useState, useEffect } from "react";
import LoadingComponent from "./LoadingComponent";
import ErrorComponent from "./ErrorComponent";
import ProductComponent from "./ProductComponent";

const ElectronicMain = () => {
    // here i am using the useState hook for state updation
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // simulate API call by using the setTimeout arrow function
        setTimeout(() => {
            const success = true; // change to false to test error whether your success is true is goes in the 
            // setproduct part otherwise goes into setError part if it is (true) else it goes to setloading part
            // after 1.5 seconds it execute the result according to the boolean value.       
            success
                ? setProduct({
                    name: "MacBook Pro",
                    brand: "Apple",
                    price: 120000,
                    category: "Laptop",
                    warranty: 2,
                    availability: true,
                })
                : setError(true);
            setLoading(false);
        }, 1500);
    }, []);

    // here I'm rendering the conditional by using ternary operator 
    return loading ? (
        <LoadingComponent />
    ) : error ? (
        <ErrorComponent />
    ) : (
        <ProductComponent product={product} />
    );
};

export default ElectronicMain;
