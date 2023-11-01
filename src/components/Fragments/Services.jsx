import ceklisIcon from "../../assets/icons/ceklis.png";
import imgServices from "../../assets/images/img_service.png";

const Services = () => {
   const Lists = [
      { text: "Sewa Mobil Dengan Supir di Bali 12 Jam" },
      { text: "Sewa Mobil Lepas Kunci di Bali 24 Jam" },
      { text: "Sewa Mobil Jangka Panjang Bulanan" },
      { text: "Gratis Antar - Jemput Mobil di Bandara" },
      { text: "Layanan Airport Transfer / Drop In Out" },
   ];

   return (
      <>
         <div id="ourServices">
            <div className="row">
               <div className="col-lg-6 col-12">
                  <img
                     src={imgServices}
                     alt="Our service..."
                     className="img-fluid"
                  />
               </div>
               <div className="col-lg-6 col-12">
                  <div className="text-services ms-4 mt-5">
                     <h3 className="text-subtitle fw-semibold">
                        Best Car Rental for any kind of trip in Tangerang!
                     </h3>
                     <p className="text-paragraph">
                        Sewa mobil di Tangerang bersama Binar Car Rental jaminan
                        harga lebih murah dibandingkan yang lain, kondisi mobil
                        baru, serta kualitas pelayanan terbaik untuk perjalanan
                        wisata, bisnis, wedding, meeting, dll.
                     </p>
                  </div>
                  <ul className="list-services">
                     {Lists.map((list) => (
                        <li key={list.text} className="text-paragraph">
                           <img
                              src={ceklisIcon}
                              alt="Ceklis...."
                              className="me-3"
                           />
                           {list.text}
                        </li>
                     ))}{" "}
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
};

export default Services;
