import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RegisterUser, reset } from '../features/authSlice';

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [role, setRole] = useState('user');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isError ,isLoading, isSuccess, message } = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if (user || isSuccess) {
            // Redirect to home or login page after successful registration
            navigate("/");
        }
        // Reset the auth state to clear previous state
        dispatch(reset());
    }, [user, isSuccess, navigate, dispatch]);

    const handleRegister = async (e) => {
        e.preventDefault();
        // Dispatch the register action
        dispatch(RegisterUser({ email, password, name, confPassword, role }));
    }

    return (
        <div className="container-auth container">
            <div className="login-content">
                <div className="row">
                    <div className="col-lg-4 col-12 d-lg-block d-none">
                        <div className="login-banner"></div>
                    </div>
                    <div className="col-lg-8 col-12">
                        <div className="logo-mobile d-lg-none d-flex">
                            {/* <img src="public/assets/images/logo_mobile.png" alt="Logo" /> */}
                        </div>
                        <div className="login-form">
                            <div className="card shadow-2-strong">
                                <div className="card-body">
                                    <div className="card-login-title text-center mb-3">
                                        <h3 className="fw-bold">Register</h3>
                                        <p>Selamat datang!</p>
                                    </div>

                                    <form onSubmit={handleRegister}>
                                        <div className="form-outline mb-4">
                                            <label className="form-label">Nama</label>
                                            <input 
                                                type="text" 
                                                className="form-control form-control-lg"
                                                onChange={(e) => setName(e.target.value)}
                                                value={name}
                                                placeholder="Masukan Nama Anda" 
                                            />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label">Email</label>
                                            <input 
                                                type="email"
                                                value={email}
                                                className="form-control form-control-lg"
                                                onChange={(e) => setEmail(e.target.value)} 
                                                placeholder="Masukan Email" 
                                            />
                                        </div>
                            
                                        <div className="form-outline mb-4">
                                            <label className="form-label">Password</label>
                                            <input 
                                                type="password"
                                                value={password}
                                                placeholder="Masukan Kata Sandi"
                                                className="form-control form-control-lg"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            <i className="fa-solid fa-eye" id="eye"></i>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label">Confirm Password</label>
                                            <input 
                                                type="password"
                                                value={confPassword}
                                                placeholder="Konfirmasi Kata Sandi"
                                                className="form-control form-control-lg"
                                                onChange={(e) => setConfPassword(e.target.value)}
                                            />
                                            <i className="fa-solid fa-eye" id="eye"></i>
                                        </div>

                                        <div className="form-outline mb-4 d-none">
                                            <label className="form-label">Role</label>
                                            <input 
                                                type="text" 
                                                value={role}
                                                className="form-control form-control-lg"
                                                onChange={(e) => setRole(e.target.value)}
                                            />
                                            <i className="fa-solid fa-eye" id="eye"></i>
                                        </div>
                            
                                        <button className="button-login" type="submit">{isLoading ? "Loading..." : "Register"}</button>
                                    </form>

                                    <p className="my-3 text-center">
                                        Sudah punya akun ? {" "}
                                        <Link to="/login" className="text-decoration-none">
                                            Masuk
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
