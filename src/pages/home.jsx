import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ServicesComponent from "../components/ServicesComponent";
import WhyUsCard from "../components/WhyUsCard";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
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
                        <div className="mt-5">
                            <ServicesComponent />
                        </div>
                    </div>
                    <div className="why-us-content">
                        <div className="mt-5">
                            <WhyUsCard />
                        </div>
                    </div>
                    <div className="testimonial-content">
                        <div className="mt-5">
                            <Testimonial />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
