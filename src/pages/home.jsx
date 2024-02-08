import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ServicesComponent from "../components/ServicesComponent";
import WhyUsCard from "../components/WhyUsCard";
import Testimonial from "../components/Testimonial";
import CardBanner from "../components/CardBanner";
import Faq from "../components/Faq";
import Button from "../components/Button";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <>
            <div className="bg-home">
                <div className="container">
                    <div className="navbar-home">
                        <Navbar navLinks={[
                            { name: "Our Services", href: "ourServices" },
                            { name: "Why Us", href: "whyUs" },
                            { name: "Testimonial", href: "testimonial" },
                            { name: "FAQ", href: "faq" },
                        ]}>
                            <div className="banner-home">
                                <Banner className="mt-5">
                                    <Button styles="mt-3 mb-lg-0 mb-4">Mulai Sewa Mobil</Button>
                                </Banner>
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
                    <div className="footer-content">
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
