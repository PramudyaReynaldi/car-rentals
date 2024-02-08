import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
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
                        <p>Connect with us</p>
                    </div>
                    <div className="connect-image">
                        
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;