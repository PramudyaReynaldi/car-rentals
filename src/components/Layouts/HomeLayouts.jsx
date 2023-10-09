import React from "react";
import { Navbar, Banner, Services, WhyUsCard, Testimonial } from "../Fragments";

export const HomeLayouts = () => {
   return (
      <div className="home-layouts">
         <Navbar className="bg-home">
            <div className="container mt-5">
               <Banner />
            </div>
         </Navbar>
         <section className="container mt-5">
            <div className="mt-4">
               <Services />
            </div>
            <div className="mt-5">
               <WhyUsCard />
            </div>
            <div className="mt-5">
               <Testimonial />
            </div>
         </section>
      </div>
   );
};
