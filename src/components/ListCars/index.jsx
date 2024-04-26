import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../Button";
import { Link } from "react-router-dom";
import iconUser from "../../assets/icons/fi_users.png";
import iconTransmision from "../../assets/icons/fi_settings.png";
import iconCalendar from "../../assets/icons/fi_calendar.png";

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
                            <div className="card-body card-list-cars">
                                <div className="card-image">
                                    <img src={product.image} alt={product.name} className="w-100" style={{ height: "200px" }}  />
                                </div>
                                <div className="card-text mt-4">
                                    <h5 className="card-title fw-bold">{product.manufacture} <span className="fw-normal">{product.model}</span></h5>
                                    <p className="card-text fw-bold">Rp. {product.rentPerDay} / Hari</p>
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <img src={iconUser} alt="Icon User" />
                                        <p className="card-text">{product.capacity} Orang</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                        <img src={iconTransmision} alt="Icon Transmision" />
                                        <p className="card-text">{product.transmission}</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <img src={iconCalendar} alt="Icon Calendar" />
                                        <p className="card-text">Tahun {product.year}</p>
                                    </div>
                                </div>
                                <Link to={`/detail-car/${product.uuid}`} className="text-decoration-none">
                                    <Button styles="w-100 mt-4 d-flex justify-content-center">Lihat Detail</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListCars;