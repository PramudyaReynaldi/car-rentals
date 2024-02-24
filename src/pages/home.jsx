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
import { useSelector } from "react-redux";

const HomePage = () => {
    const { user } = useSelector((state) => state.auth);
    const username = user?.name.charAt(0).toUpperCase() + user?.name.slice(1);

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
                                <Banner 
                                    className="mt-5"
                                    title={`Selamat Datang Di Rental Kami ${username}!`}
                                    description={
                                        ` Selamat datang di Car Rental kami ${username}, kami menyediakan mobil
                                        kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                                        kebutuhanmu untuk sewa mobil selama 24 jam. Klik disini untuk mencari mobil!`
                                    }
                                >
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
