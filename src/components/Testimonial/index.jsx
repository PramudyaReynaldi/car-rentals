/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Element } from "react-scroll";
import imgTesti1 from "../../assets/images/img_testi1.png";
import imgTesti2 from "../../assets/images/img_testi2.png";
import imgTesti3 from "../../assets/images/img_testi3.jpg";
import iconRate from "../../assets/icons/rate.png";
import "@splidejs/react-splide/css";

const Testimonial = () => {
   // Logic responsive view
   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 991);

   const usersTestimonials = [
      {
         name: "John Doe",
         description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
         image: imgTesti1,
         rate: iconRate,
      },
      {
         name: "Jessica",
         description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
         image: imgTesti2,
         rate: iconRate,
      },
      {
         name: "William",
         description: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”",
         image: imgTesti3,
         rate: iconRate,
      },
   ];

   useEffect(() => {
      const handleWindowSizeChange = () => {
         setIsMobileView(window.innerWidth <= 991);
      };

      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
         window.removeEventListener("resize", handleWindowSizeChange);
      };
   }, []);

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
                        <img src={user.image} className="img-fluid rounded-circle" width={80} />
                        <img src={iconRate} className="img-fluid mt-3" />
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
                           <img src={user.image} className="img-fluid rounded-circle" width={80} />
                           <div className="ms-3">
                              <img src={iconRate} className="img-fluid mb-3" />
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
