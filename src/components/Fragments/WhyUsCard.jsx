import iconComplete from "../../assets/icons/icon_complete.png";
import iconPending from "../../assets/icons/icon_24hrs.png";
import iconPrice from "../../assets/icons/icon_price.png";
import iconProfesional from "../../assets/icons/icon_professional.png";

const WhyUsCard = () => {
    const whyUsList = [
        {
            title: "Mobil Lengkap",
            body: "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
            icon: iconComplete
        },
        {
            title: "Harga Murah",
            body: "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
            icon: iconPrice
        },
        {
            title: "Layanan 24 Jam",
            body: "Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
            icon: iconPending
        },
        {
            title: "Sopir Profesional",
            body: "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
            icon: iconProfesional
        },
    ]

    return (
        <>
            <div id="whyUs">
                <div className="row mt-5">
                    <div className="why-us-title py-4">
                        <h3 className="text-subtitle fw-semibold">Why Us?</h3>
                        <p>Mengapa harus pilih Binar Car Rental?</p>
                    </div>
                    {whyUsList.map((item) => (
                        <div key={item.title} className="col-lg-3 col-12 my-2 my-lg-0">
                            <div className="why-us-card">
                                <img src={item.icon} alt="icon" />
                                <h5 className="mt-3">{item.title}</h5>
                                <p>{item.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default WhyUsCard;