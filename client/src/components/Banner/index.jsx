import React, { useState } from "react";
import carImage from "../../assets/images/img_car.png";
import Button from "../Button";
import { showAlertError } from "../Alert";

const Banner = (props) => {
   const { className } = props;
   const [isLoggedIn, setIsLoggedIn] = useState();

   const handleLogin = (event) => {
      event.preventDefault();

      if(isLoggedIn) {
         setIsLoggedIn(true);
         alert("Login Successful");
      } else {
         setIsLoggedIn(false);
         showAlertError("Silahkan login terlebih dahulu", "Login");
      }
   }

   return (
      <div className={`row pt-lg-5 pt-3 ${className}`}>
         <div className="col-lg-6 col-12 mt-lg-4 mt-0">
            <div className="text-title fw-semibold">
               Sewa & Rental Mobil Terbaik di kawasan Tangerang
            </div>
            <div className="text-paragraph mt-3">
               Selamat datang di Binar Car Rental. Kami menyediakan mobil
               kualitas terbaik dengan harga terjangkau. Selalu siap melayani
               kebutuhanmu untuk sewa mobil selama 24 jam.
            </div>
            <Button styles="mt-3 mb-lg-0 mb-4" onClick={handleLogin}>Mulai Sewa Mobil</Button>
         </div>
         <div className="col-lg-6 col-12">
            <img src={carImage} alt="Car rental" className="img-fluid" />
         </div>
      </div>
   );
};

export default Banner;
