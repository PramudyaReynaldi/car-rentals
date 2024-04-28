import { Element } from "react-scroll";

const Faq = () => {
    return (
        <Element id="faq" className="faq-content">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="faq-text">
                        <h2 className="faq-title">Frequently Asked Question</h2>
                        <p className="faq-paragraph">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                        </p>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqOne">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                    Apa saja syarat yang dibutuhkan?
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="faqOne" data-bs-parent="#accordionExample">
                                <div className="accordion-body"> ... </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Berapa hari minimal sewa mobil lepas kunci?
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="faqTwo" data-bs-parent="#accordionExample">
                                <div className="accordion-body"> ... </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="faqThree" data-bs-parent="#accordionExample">
                                <div className="accordion-body"> ... </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    Apakah Ada biaya antar-jemput?
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="faqFour" data-bs-parent="#accordionExample">
                                <div className="accordion-body"> ... </div>
                            </div>
                        </div>
                        
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="faqFive">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                    Bagaimana jika terjadi kecelakaan
                                </button>
                            </h2>
                            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="faqFive" data-bs-parent="#accordionExample">
                                <div className="accordion-body"> ... </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    );
};

export default Faq;
