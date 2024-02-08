import React from "react";
import HomePage from "./pages/home";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import ListCarsPage from "./pages/list-cars";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/list-cars" element={<ListCarsPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
