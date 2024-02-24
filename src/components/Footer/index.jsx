import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import axios from "axios";

const Footer = () => {
    const [icons, setIcons] = useState([]);
    const [iconLinks, setIconLinks] = useState([]);

    useEffect(() => {
        const getIcons = async (id) => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/v1/icons/${id}`);
                setIcons((prevIcons) => ({
                    ...prevIcons,
                    [id]: response.data.iconUrl,
                }));

                setIconLinks((prevLinks) => [
                    ...prevLinks,
                    { link: "https://www.facebook.com/oes.tuel?locale=id_ID" },
                    { link: "https://www.instagram.com/praaldisalim/" },
                    { link: "https://twitter.com/pramudya_reyn" },
                    { link: "mailto:prmdy02@gmail.com?Subject=subject message" },
                    { link: "#" },
                ]);
            } catch (error) {
                console.error(error);
            }
        };

        const iconsIds = [
            "kinmbtt2rimeygxun7rb", 
            "kkzufl2lhdj8fsbwndmt", 
            "oktghdz4p7xtbtceplbg", 
            "qmxw43ek1zadfauzujaf", 
            "nebanga9he1xo8txiuhe"
        ];
        iconsIds.forEach((id) => getIcons(id));
    }, []);

    const footerLink = [
        { name: "Our Services", href: "ourServices" },
        { name: "Why Us", href: "whyUs" },
        { name: "Testimonial", href: "testimonial" },
        { name: "FAQ", href: "faq" },
    ]

    return (
        <footer>
            <div className="row" style={{ gap: "50px" }}>
                <div className="col-lg-3 col-12">
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className="col-lg-2 col-12">
                    <div className="d-flex flex-column" style={{ gap: "14px" }}>
                        {footerLink.map((link) => (
                            <ScrollLink
                                to={link.href}
                                smooth={true}
                                key={link.name}
                                aria-current="page"
                                style={{ cursor: "pointer", color: "var(--primary-color)" }}
                                className="fw-bold text-decoration-none"
                            >
                                {link.name}
                            </ScrollLink>
                        ))}
                    </div>
                </div>
                <div className="col-lg-3 col-12">
                    <div className="connect-us">
                        <div className="connect-us-text">
                            <p>Connect with us</p>
                        </div>
                        <div className="connect-us-icons">
                            {Object.keys(icons).map((id, index) => (
                                <a key={index} href={iconLinks[index].link} target="_blank">
                                    <img src={icons[id]} alt={iconLinks[index].name} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;