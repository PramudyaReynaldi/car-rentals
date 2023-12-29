import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../features/authSlice";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { user, isLoading, isSuccess, message } = useSelector(
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
        <div className="container">
            <div className="d-flex justify-content-center align-items-center vh-100 flex-column">
                <div className="login-content">
                    <div className="login-title py-4">
                        <h1>Login</h1>
                    </div>
                    <div className="login-form-wrapper">
                        <form onSubmit={Auth}>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="form-control"
                                />
                            </div>

                            <div htmlFor="password" className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <button type="submit">{isLoading ? "Loading..." : "Login"}</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
