/* eslint-disable react/no-unknown-property */
import React, { useState, useEffect } from "react";
import Button from "../Elements/Button";

const Navbar = (props) => {
   const { children, className } = props;

   const [ scrollY, setScrollY ] = useState(0);

   const handleScrollY = () => {
      setScrollY(window.scrollY);
   };

   useEffect(() => {
      window.addEventListener('scroll', handleScrollY);
  
      return () => {
        window.removeEventListener('scroll', handleScrollY);
      };
   }, []);

   const backgroundStyle = {
      background: scrollY < 100 ? 'var(--bg-secondary)' : 'var(--bg-primary)',
      transition: 'background 0.5s',
   };

   const Links = [
      { name: "Our Services", href: "#" },
      { name: "Why Us", href: "#whyUs" },
      { name: "Testimonial", href: "#testimonial" },
      { name: "FAQ", href: "#faq" },
   ];

   return (
      <>
         <div className={className}>
            <nav className="navbar navbar-expand-lg bg-home fixed-top" style={backgroundStyle}>
               <div className="container">
                  <a className="navbar-brand" href="#">
                     Car rentals
                  </a>
                  <button
                     className="navbar-toggler"
                     type="button"
                     data-bs-toggle="offcanvas"
                     data-bs-target="#offcanvasScrolling"
                     aria-controls="offcanvasScrolling"
                  >
                     <span className="navbar-toggler-icon"></span>
                  </button>

                  <div
                     className="offcanvas offcanvas-end"
                     data-bs-scroll="true"
                     data-bs-backdrop="false"
                     id="offcanvasScrolling"
                     aria-labelledby="offcanvasScrollingLabel"
                  >
                     <div className="offcanvas-header">
                        <h5
                           className="offcanvas-title"
                           id="offcanvasScrollingLabel"
                        >
                           Car Rentals
                        </h5>
                        <button
                           type="button"
                           className="btn-close"
                           data-bs-dismiss="offcanvas"
                           aria-label="Close"
                        ></button>
                     </div>
                     <div className="offcanvas-body d-lg-flex justify-content-lg-end">
                        {Links.map((link) => (
                           <ul key={link.name} className="navbar-nav mx-2">
                              <li className="nav-item">
                                 <a
                                    href={link.href}
                                    className="nav-link active nav-fonts"
                                    aria-current="page"
                                 >
                                    {link.name}
                                 </a>
                              </li>
                           </ul>
                        ))}
                        <Button>Register</Button>
                     </div>
                  </div>
               </div>
            </nav>
            {children}
         </div>
      </>
   );
};

export default Navbar;
