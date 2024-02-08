import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../features/authSlice";

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

    return (
        <div className="container-auth container">
            <div className="login-content">
                <div className="login-form">
                    <div className="card shadow-2-strong">
                        <div className="card-body">
                            <div className="card-login-title text-center mb-3">
                                <h3 className="fw-bold">Login</h3>
                                <p>Selamat datang kembali</p>
                            </div>

                            <form onSubmit={Auth}>
                                <div className="form-outline mb-4">
                                    <label className="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        className="form-control form-control-lg"
                                        onChange={(e) => setEmail(e.target.value)} 
                                        placeholder="Masukan Email" 
                                    />
                                </div>
                    
                                <div className="form-outline mb-4">
                                    <label className="form-label">Password</label>
                                    <input 
                                        type="password" 
                                        placeholder="Masukan Kata Sandi"
                                        className="form-control form-control-lg"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <i className="fa-solid fa-eye" id="eye"></i>
                                </div>
                    
                                <button className="button-login" type="submit">{isLoading ? "Loading..." : "Login"}</button>
                            </form>

                            <p className="my-3 text-center">
                                Belum punya akun ? {" "}
                                <Link to="/register" className="text-decoration-none">
                                    Daftar
                                </Link>
                            </p>

                            <p className="my-3 text-center text-or">atau</p>
                    
                            <button className="button-login-google"
                                type="submit"><i className="fa-brands fa-google me-2"></i> Login dengan Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
