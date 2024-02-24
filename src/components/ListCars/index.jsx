import React, { useEffect, useState } from "react";
import axios from "axios";

const ListCars = () => {
    const [products, setProducts] = useState();

    const getProducts = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/products`);
            setProducts(response.data.products);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="container">
            <div className="row">
                {products && products.map((product) => (
                    <div key={product.uuid} className="col-lg-4 col-12 mb-3">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="card-image">
                                    <img src={product.image} alt={product.name} className="w-100" style={{ height: "200px" }}  />
                                </div>
                                <div className="card-text mt-4">
                                    <h5 className="card-title fw-bold">{product.manufacture} <span className="fw-normal">{product.model}</span></h5>
                                    <p className="card-text fw-bold">Rp. {product.rentPerDay} / Hari</p>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.capacity} Orang</p>
                                    <p className="card-text">{product.transmission}</p>
                                    <p className="card-text">Tahun {product.year}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListCars;