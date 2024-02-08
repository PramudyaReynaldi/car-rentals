import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ListCars from "../components/ListCars";

const ListCarsPage = () => {
    return (
        <>
            <div className="navbar-home">
                <Navbar className=" bg-home">
                    <div className="container">
                        <Banner className="mt-5" />
                    </div>
                </Navbar>
            </div>
            <div className="mt-5">
                <ListCars />
            </div>
        </>
    );
};

export default ListCarsPage;