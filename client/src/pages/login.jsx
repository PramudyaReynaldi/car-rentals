import React, { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../features/authSlice";
import logoCar from "../assets/images/logo_car.png";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLoading, isSuccess } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if(user || isSuccess) {
            dispatch(reset());
            navigate("/");
        }
    }, [user, isSuccess, navigate, dispatch]);

    const Auth = async (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    }

    useLayoutEffect(() => {
        const styleTag = document.createElement('style');
        styleTag.innerHTML = `
            @keyframes gradient {
                0% {
                background-position: 0% 50%;
                }
                50% {
                background-position: 100% 50%;
                }
                100% {
                background-position: 0% 50%;
                }
            }
        
            body {
                background: linear-gradient(-45deg, var(--bg-accent), var(--bg-primary));
                background-size: 400% 400%;
                animation: gradient 15s ease infinite;
            }
        `;
    
        document.body.appendChild(styleTag);
    
        return () => {
          document.body.removeChild(styleTag);
        };
    }, []);


    return (
        <div className="container-fluid">
            <div className="row auth-content bg-success text-center">
                <div className="col-md-4 text-center auth__info">
                    <img src={logoCar} alt="Car Rentals" />
                </div>
                <div className="col-md-8 col-xs-12 col-sm-12 auth_form ">
                    <div className="container-fluid">
                        <div className="row">
                            <h2 className="auth__title">Log In</h2>
                        </div>
                        <div className="row">
                            <form className="form-group" onSubmit={Auth}>
                                <div className="row">
                                    <input 
                                        type="email" 
                                        name="email" 
                                        className="form__input" 
                                        placeholder="example@mail.com"
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </div>
                                <div className="row">
                                    <input 
                                        type="password" 
                                        name="password"
                                        className="form__input" 
                                        placeholder="Password"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                
                                <input type="submit" value={isLoading ? "Loading..." : "Login"} className="button-auth" />
                            </form>
                        </div>
                        <div className="row">
                            <p>Don't have an account? {" "}
                                <Link to="/register">Register</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
