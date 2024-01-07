import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ServicesComponent from "../components/ServicesComponent";
import WhyUsCard from "../components/WhyUsCard";
import Testimonial from "../components/Testimonial";
import CardBanner from "../components/CardBanner";
import Faq from "../components/Faq";

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
            </div>
        </>
    );
};

export default HomePage;
