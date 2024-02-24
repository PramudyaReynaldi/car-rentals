import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import ListCars from "../components/ListCars";

const ListCarsPage = () => {
    return (
        <>
            <div className="navbar-home">
                <Navbar className="bg-home">
                    <div className="container">
                        <Banner 
                            className="mt-5"
                            title="Silahkan Pilih Mobilmu!"
                            description={
                                ` Selamat datang di Car Rental kami, tempat di mana kenyamanan dan kualitas berkumpul! 
                                Kami menyediakan armada mobil dengan standar kualitas tertinggi, dan yang lebih 
                                menarik lagi, dengan harga yang sangat terjangkau. Tim kami siap memberikan pelayanan terbaik 
                                untuk memenuhi segala kebutuhan sewa mobil Anda, bahkan selama 24 jam penuh! 
                                Jangan ragu untuk temukan mobil impian Anda sekarang juga!`
                            }
                        />
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