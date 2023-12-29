import React, { useEffect } from "react";
import carImage from "../../assets/images/img_car.png";
import Button from "../Button";
import { showAlertError } from "../Alert";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/authSlice";

const Banner = (props) => {
   const { className } = props;

   const dispatch = useDispatch();
   const navigate = useNavigate();

   const { user } = useSelector((state) => state.auth);
   const username = user?.name.charAt(0).toUpperCase() + user?.name.slice(1);

   useEffect(() => {
      dispatch(getMe());
   }, [dispatch]);

   const handleLogin = (event) => {
      event.preventDefault();
      if (!user) {
         showAlertError("Anda belum login, silahkan login terlebih dahulu!", "Ok");
      } 
   };

   return (
      <div className={`row pt-lg-5 pt-3 ${className}`}>
         <div className="col-lg-6 col-12 mt-lg-4 mt-0">
            {user ? (
               <>
                  <div className="text-title fw-semibold">
                     Selamat Datang {username}!
                  </div>
                  <div className="text-paragraph mt-3">
                     Selamat datang di Car Rental kami {username}, kami menyediakan mobil
                     kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                     kebutuhanmu untuk sewa mobil selama 24 jam. Klik disini untuk mencari mobil!
                  </div>
                  <Link to="#!" className="text-decoration-none">
                     <Button styles="mt-3 mb-lg-0 mb-4">Mulai Sewa Mobil</Button>
                  </Link>
               </>
            ) : (
               <>
                  <div className="text-title fw-semibold">
                     Sewa & Rental Mobil Terbaik di kawasan Tangerang
                  </div>
                  <div className="text-paragraph mt-3">
                     Selamat datang di Binar Car Rental. Kami menyediakan mobil
                     kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                     kebutuhanmu untuk sewa mobil selama 24 jam.
                  </div>
                  <Button styles="mt-3 mb-lg-0 mb-4" onClick={handleLogin}>Mulai Sewa Mobil</Button>
               </>
            )}
         </div>
         <div className="col-lg-6 col-12">
            <img src={carImage} alt="Car rental" className="img-fluid" />
         </div>
      </div>
   );
};

export default Banner;
