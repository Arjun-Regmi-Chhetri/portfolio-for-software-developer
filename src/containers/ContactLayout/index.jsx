import { ContactUs } from "../../hooks/emialtrap";
export default function ContactLayout(){
    return(
        <>
        <section className="contact container" id="contact">
                <div className="wrapper">
                    <div className="title" data-aos="zoom-in" data-aos-duration="1000">
                        <h3>Contact</h3>
                    </div>
                    <div className="form" data-aos="fade-up" data-aos-duration="1000">
                        <div className="box">
                            <div className="sub-box">
                                <div className="add">
                                    <span className="icon"><i className="fa-solid fa-location-dot"></i></span>
                                    <h3>Address</h3>
                                    <p>Budanilkantha 17 <br /> kathmandu 44600</p>
                                </div>
                                <div className="add">
                                    <span className="icon"><i className="fa-solid fa-phone"></i></span>
                                    <h3>Call Me</h3>
                                    <p>+977-981513610 <br /> +977-9867359203</p>
                                </div>
                                <div className="add">
                                    <span className="icon"><i className="fa-solid fa-envelope"></i></span>
                                    <h3>Email</h3>
                                    <p>arjunxetri100@gmail.com <br /> arjun.chhetri.0316@gmail.com</p>
                                </div>
                                <div className="add">
                                    <span className="icon"><i className="fa-regular fa-clock"></i></span>
                                    <h3>Avilable</h3>
                                    <p>Sunday-Saturday <br /> 24hr 7</p>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="formBox">
                               <ContactUs />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}