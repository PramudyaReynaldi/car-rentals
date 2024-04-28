import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { LogOut, reset } from "../../features/authSlice";
import axios from "axios";
import Button from "../Button";

const Navbar = (props) => {
   const { children, className, navLinks = [] } = props;
   const [ scrollY, setScrollY ] = useState(0);
   const [imageUrl, setImageUrl] = useState(null);
   
   const dispatch = useDispatch();
   const navigate = useNavigate();

   useEffect(() => {
      window.addEventListener('scroll', handleScrollY);

      return () => {
        window.removeEventListener('scroll', handleScrollY);
      };
   }, []);

   const handleScrollY = () => {
      setScrollY(window.scrollY);
   };

   const backgroundStyle = {
      background: scrollY < 368 ? 'var(--bg-secondary)' : 'var(--bg-primary)',
      transition: 'background 0.5s',
   };

   const { user } = useSelector((state) => state.auth);

   const handleLogout = () => {
      dispatch(LogOut());
      dispatch(reset());
      navigate("/");
   }

   const getImageBanner = async () => {
      try {
         const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/images/wgx4hfulbg1ioktbyf9h`);
         setImageUrl(response.data.imageUrl);
      } catch (error) {
         console.log(error);
      }
   }

   useEffect(() => {
      getImageBanner();
   });

   return (
      <>
         <header>
            <nav className="navbar navbar-expand-lg bg-home fixed-top" style={backgroundStyle}>
               <div className="container">
                  <a className="navbar-brand" href="/">
                     <img src={imageUrl} alt="logo_car" className="car-logo" />
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
                        <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
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
                        <ul className="navbar-nav mx-2">
                           {navLinks.map((link) => (
                              <li className="nav-item" key={link.name}>
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
                           ))}
                        </ul>
                        {user && user.name ? (
                           // If user is logged in, show logout button
                           <Button onClick={handleLogout} style={{ cursor: "pointer" }}>
                              Logout
                           </Button>
                        ) : (
                           // If user is not logged in, show register button
                           <>
                              <Link to="/register" className="text-decoration-none mx-2">
                                 <Button styles="text-center w-100 justify-content-center">Register</Button>
                              </Link>

                              <Link to="/login" className="text-decoration-none">
                                 <Button styles="text-center w-100 justify-content-center">Login</Button>
                              </Link>
                           </>
                        )}
                     </div>
                  </div>
               </div>
            </nav>
         </header>
         {children}
      </>
   );
};

export default Navbar;
