import React, { useEffect, useState } from "react";
import axios from "axios";

const ListCars = () => {
    const [products, setProducts] = useState();

    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/products");
            console.log("API Response:", response.data.carsData);
            setProducts(response.data.carsData);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="products">
            {products && products.map((product) => (
                <div key={product.uuid} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{product.plate}</h5>
                        <p className="card-text">{product.description}</p>
                        <img src={product.image} alt={product.name} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ListCars;