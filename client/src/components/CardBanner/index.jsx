import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { showAlertError } from "../Alert";
import Button from "../Button";

const CardBanner = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const handleButtonClick = () => {
        if (!user) {
            showAlertError("Anda harus login terlebih dahulu!", "Ok");
        } else {
            navigate("/halaman-setelah-login");
        }
    };

    return (
        <div className="container">
            <div className="card-banner">
                <div className="card-banner-wrapper">
                    <div className="card-banner-text">
                        <h2 className="mb-4 fw-bold">Sewa Mobil di Tangerang Sekarang</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, eaque?
                        </p>
                    </div>
                    <div className="card-banner-button">
                        <Button styles="mb-lg-0" onClick={handleButtonClick}>
                            Mulai Sewa Mobil
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardBanner;
