import React, { useEffect, useState } from "react";
import axios from "axios";

const ListCars = () => {
    const [products, setProducts] = useState();

    const getProducts = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products`);
            console.log(response.data.products);
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
                    <div className="col-lg-4 col-12">
                        <div key={product.uuid} className="card mb-3" style={{height: "580px"}}>
                            <div className="card-body">
                                <div className="card-image">
                                    <img src={product.image} alt={product.name} className="" style={{width: "100%", height: "300px"}} />
                                </div>
                                <div className="card-text mt-4">
                                    <h5 className="card-title fw-bold">{product.manufacture} <span className="fw-normal">{product.model}</span></h5>
                                    <p className="card-text fw-bold">Rp. {product.rentPerDay} / Hari</p>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">{product.capacity} Orang</p>
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