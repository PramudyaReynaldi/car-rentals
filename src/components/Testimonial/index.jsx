import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Element } from "react-scroll";
import axios from "axios";
import "@splidejs/react-splide/css";
import iconRate from "../../assets/icons/rate.png";

const Testimonial = () => {
   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 991);
   const [images, setImages] = useState([]);

   useEffect(() => {
      const handleWindowSizeChange = () => {
         setIsMobileView(window.innerWidth <= 991);
      };

      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
         window.removeEventListener("resize", handleWindowSizeChange);
      };
   }, []);

   useEffect(() => {
      const getImageTestimonial = async (id) => {
         try {
            const response = await axios.get(`http://localhost:5000/images/${id}`);
            setImages((prevImages) => [...prevImages, response.data.imageUrl]);
         } catch (error) {
            console.log(error);
         }
      };

      const imageIds = ["xdvcw65lc8jvvt0tp1ek", "zztxlvfjnslrhjz7vqma", "n2oxynhk9tklhrxidvpa"];
      imageIds.forEach((id) => getImageTestimonial(id));
   }, []);

   const usersTestimonials = [
      {
         name: "John Doe",
         description: '"Saya sangat puas dengan layanan car rental ini! Mobil yang disewa dalam kondisi sangat baik dan bersih. Proses pemesanan online sangat mudah, dan stafnya ramah serta profesional. Harga yang ditawarkan pun sangat kompetitif. Saya pasti akan merekomendasikan car rental ini kepada teman-teman dan keluarga. Terima kasih atas pengalaman menyenangkan!"',
         rate: iconRate,
      },
      {
         name: "Jessica",
         description: '"Saya baru saja menggunakan layanan car rental ini untuk perjalanan bisnis singkat, dan saya sangat terkesan. Mobil yang saya sewa sangat nyaman dan terawat dengan baik. Pemesanan online cepat dan tanpa masalah, dan staf di lokasi sangat membantu. Harga yang saya bayar sebanding dengan kualitas pelayanan yang saya terima. Saya pasti akan kembali menggunakan layanan ini di masa depan."',
         rate: iconRate,
      },
      {
         name: "William",
         description: '"Pengalaman menyewa mobil dengan perusahaan ini luar biasa! Mobil yang saya dapatkan bersih, terawat, dan nyaman untuk perjalanan keluarga kami. Proses pengambilan dan pengembalian mobil sangat efisien, dan stafnya sangat ramah. Harga yang ditawarkan juga sangat bersaing, membuat perjalanan kami menjadi lebih menyenangkan. Terima kasih kepada tim car rental ini untuk layanan yang luar biasa!"',
         rate: iconRate,
      },
   ];

   const renderMobileView = () => {
      return (
         <Splide
            options={{
               rewind: true,
               perPage: 1,
               type: "loop",
               pagination: false,
            }}
            aria-label="testimonialSlider"
         >
            {usersTestimonials.map((user, idx) => (
               <SplideSlide key={idx}>
                  <div className="user-testimonials-mobile">
                     <div className="d-flex flex-column justify-content-center align-items-center">
                        <img src={images[idx]} className="img-fluid rounded-circle" width={80} alt={`testimonial-${idx + 1}`} />
                        <img src={iconRate} className="img-fluid mt-3" alt="rate-icon" />
                        <p className="pt-3">{user.description}</p>
                        <p className="fw-bold">{user.name}</p>
                     </div>
                  </div>
               </SplideSlide>
            ))}
         </Splide>
      );
   };

   const renderDesktopView = () => {
      return (
         <>
            <Splide
               options={{
                  rewind: true,
                  perPage: 2,
                  type: "loop",
                  gap: "1rem",
                  pagination: false,
               }}
               aria-label="testimonialSlider"
            >
               {usersTestimonials.map((user, idx) => (
                  <SplideSlide key={idx}>
                     <div className="user-testimonials">
                        <div className="d-flex align-items-center p-4">
                           <img src={images[idx]} className="img-fluid rounded-circle" width={80} alt={`testimonial-${idx + 1}`} />
                           <div className="ms-3">
                              <img src={iconRate} className="img-fluid mb-3" alt="rate-icon" />
                              <p>{user.description}</p>
                              <p className="fw-bold">{user.name}</p>
                           </div>
                        </div>
                     </div>
                  </SplideSlide>
               ))}
            </Splide>
         </>
      );
   };

   return (
      <>
         <Element id="testimonial">
            <div className="testimonials text-center py-5">
               <h3 className="text-subtitle fw-semibold">Testimonial</h3>
               <p className="text-paragraph">Berdasarkan ulasan para pelanggan</p>
            </div>
            {isMobileView ? renderMobileView() : renderDesktopView()}
         </Element>
      </>
   ) 
};

export default Testimonial;
