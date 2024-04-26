import React from "react";
import HomePage from "./pages/home";
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import ListCarsPage from "./pages/list-cars";
import DetailCarPage from "./pages/detail-car";
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
                    <Route path="/detail-car/:id" element={<DetailCarPage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
