import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ServicesComponent from "../components/ServicesComponent";
import WhyUsCard from "../components/WhyUsCard";
import Testimonial from "../components/Testimonial";
import CardBanner from "../components/CardBanner";
import Faq from "../components/Faq";
import axios from "axios";

const HomePage = () => {
    const [products, setProducts] = useState();

    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:5000/products");
            console.log("API Response:", response.data.apiData);
            setProducts(response.data.apiData);

        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
            <div className="bg-home">
                <div className="container">
                    <div className="navbar-home">
                        <Navbar>
                            <div className="banner-home">
                                <Banner className="mt-5" />
                            </div>
                        </Navbar>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="home-content-wrapper">
                    <div className="our-service-content">
                        <ServicesComponent />
                    </div>
                    <div className="why-us-content">
                        <WhyUsCard />
                    </div>
                    <div className="testimonial-content">
                        <Testimonial />
                    </div>
                    <div className="card-banner-content">
                        <CardBanner />
                    </div>
                    <div className="faq-content">
                        <Faq />
                    </div>
                </div>

                <div className="products">
                {products && products.map((product) => (
                    <div key={product.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">{product.plate}</h5>
                            <p className="card-text">{product.description}</p>
                            <img src={product.image} alt={product.name} />
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </>
    );
};

export default HomePage;
