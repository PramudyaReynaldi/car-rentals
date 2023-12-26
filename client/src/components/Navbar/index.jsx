import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import logoCar from "../../assets/images/logo_car.png";
import Button from "../Button";

const Navbar = (props) => {
   const { children, className } = props;
   const [ scrollY, setScrollY ] = useState(0);
   const [token, setToken] = useState('');

   const navigate = useNavigate();

   useEffect(() => {
      refreshToken();

      window.addEventListener('scroll', handleScrollY);

      return () => {
        window.removeEventListener('scroll', handleScrollY);
      };
   }, []);

   const handleScrollY = () => {
      setScrollY(window.scrollY);
   };

   const refreshToken = async () => {
      try {
         const response = await axios.get('http://localhost:3000/token');
         setToken(response.data.accessToken);
         const decoded = jwtDecode (response.data.accessToken);
         console.log(decoded);
      } catch (error) {
         console.log(error.response.data);   
      }
   }

   const backgroundStyle = {
      background: scrollY < 100 ? 'var(--bg-secondary)' : 'var(--bg-primary)',
      transition: 'background 0.5s',
   };

   const Links = [
      { name: "Our Services", href: "ourServices" },
      { name: "Why Us", href: "whyUs" },
      { name: "Testimonial", href: "testimonial" },
      { name: "FAQ", href: "faq" },
   ];

   return (
      <>
         <div className={className}>
            <nav className="navbar navbar-expand-lg bg-home fixed-top" style={backgroundStyle}>
               <div className="container">
                  <a className="navbar-brand" href="#">
                     <img src={logoCar} alt="logo_car" className="car-logo" />
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
                                 <ScrollLink
                                    to={link.href}
                                    smooth={true}
                                    duration={500}
                                    className="nav-link active nav-fonts cursor-pointer"
                                    aria-current="page"
                                    style={{ cursor: "pointer" }}
                                 >
                                    {link.name}
                                 </ScrollLink>
                              </li>
                           </ul>
                        ))}
                        <Link to={"/login"} className="text-decoration-none">
                           <Button>Login</Button>
                        </Link>
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
