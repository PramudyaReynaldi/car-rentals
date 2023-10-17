/* eslint-disable react/jsx-key */
import React, { useState, useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Testimonial = () => {

   // Logic responsive view
   const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 991);

   const usersTestimonials = [
      {
         name: "John Doe",
         description: "Lorem ipsum dolor sit amet.",
      },
      {
         name: "John Doe",
         description: "Lorem ipsum dolor sit amet.",
      },
      {
         name: "John Doe",
         description: "Lorem ipsum dolor sit amet.",
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
      return <h1>Ini mobile view</h1>;
   };

   const renderDesktopView = () => {
      return (
         <>
            <Splide 
               options = {{ 
                  rewind: true,
                  perPage: 3,
                  type: 'loop'
               }} 
               aria-label="testimonialSlider"
            >
               {usersTestimonials.map((user, idx) => (
                  <SplideSlide key={idx}>
                     <div className="user-testimonials">
                        <h1>{user.name}</h1>
                        <p>{user.description}</p>
                     </div>
                  </SplideSlide>
               ))}
            </Splide>
         </>
      );
   };

   return <>{isMobileView ? renderMobileView() : renderDesktopView()}</>;
};

export default Testimonial;
