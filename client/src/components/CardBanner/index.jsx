import Button from "../Button";

const CardBanner = () => {
    return (
        <div className="container">
            <div className="card-banner">
                <div className="card-banner-wrapper">
                    <div className="card-banner-text">
                        <h2 className="mb-4 fw-bold">Sewa Mobil di Tangerang Sekarang</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, eaque?
                        </p>
                    </div>
                    <div className="card-banner-button">
                        <Button styles="mb-lg-0">Mulai Sewa Mobil</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardBanner;