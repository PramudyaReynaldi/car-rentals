import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showAlertSuccess, showAlertError } from "../components/Alert";
import axios from "axios";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await axios.post(`http://localhost:3000/login`, {
                email: email,
                password: password,
            });
            showAlertSuccess("Login Successfull", "Anda akan diarahkan ke halaman utama");

            setTimeout(() => {
                navigate("/");
            }, 3000);
            
        } catch (error) {
            if(error.response) {
                console.error(error.response.data);
            }
            showAlertError("Login Failed", "Silahkan coba kembali");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
