import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showAlertSuccess, showAlertError } from "../components/Alert";
import axios from "axios";

const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            await axios.post("http://localhost:3000/users", {
                name: name,
                email: email,
                password: password,
                confirmPassword: confirmPassword
            });
            showAlertSuccess("Register Successfull", "Anda akan diarahkan ke halaman utama");
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (error) {
            if(error.response) {
                console.log(error.response.data);
            }
            showAlertError("Register Failed", "Silahkan coba kembali");
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <br />
                <label>
                    Email:
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                </label>
                <br />
                <label>
                    Password:
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
                </label>
                <br />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterPage;
