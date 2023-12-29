import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
                    <input type="password" value={confPassword} onChange={(event) => setConfPassword(event.target.value)} />
                </label>
                <br />
                <label style={{ display: 'none' }}>
                    role:
                    <input type="text" value={role} onChange={(event) => setRole(event.target.value)} />
                </label>
                <br />
                <button type="submit">{isLoading ? "Loading..." : "Register"}</button>
            </form>
        </div>
    );
};

export default RegisterPage;
