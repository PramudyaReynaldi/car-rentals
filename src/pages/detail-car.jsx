import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";

const DetailCarPage = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});

    const getCar = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/products/${id}`);
            console.log(response.data.product);
            setCar(response.data.product);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCar(id);
    }, [id]);

    return (
        <>
            {car && (
                <p>{car.model}</p>
            )}


        </>
    )
}

export default DetailCarPage

