


import Navbar from "./Nav";


const Contact = () => {
    return (
        <>
            
                <div className="contact-page">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="text-center">Contact</h1>
                                <p className="text-center">Here to contact me .....!!!</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact-info">
                                    <h2>Address</h2>
                                    <p>Nagercoil</p>
                                </div>
                                <div className="contact-info">
                                    <h2>Call Us</h2>
                                    <p>+91 902-560-9172</p>
                                </div>
                                <div className="contact-info">
                                    <h2>Email Us</h2>
                                    <p>manishece1996@gmail.com</p>
                                </div>
                                <div className="map-container">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d22709.15112432953!2d77.43798885699997!3d8.126254717813573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1719211571797!5m2!1sen!2sin"
                                        width="100%"
                                        height="250"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        title="Google Map"
                                    ></iframe>
                                </div>
                            </div>
                           
                                <div className="col-md-6">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="name">Your Name</label>
                                            <input type="text" className="form-control" id="name" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Your Email</label>
                                            <input type="email" className="form-control" id="email" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="subject">Subject</label>
                                            <input type="text" className="form-control" id="subject" required />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea className="form-control" id="message" rows="5" required></textarea>
                                        </div>
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
               

            </>
            )
}
            export default Contact