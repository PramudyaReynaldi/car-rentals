import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
            <Container>
                <Navbar />
                    {car && (
                        <p>{car.model}</p>
                    )}
                <Footer />
            </Container>
        </>
    )
}

export default DetailCarPage

