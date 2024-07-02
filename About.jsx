
import Navbar from "./Nav";
import manish from "./img3.jpg"


const About = () => {
    return (
        <>
            
            

                <div class="container-about">

                    <div className=" abt col-md-10">
                        <h3>About</h3>
                        <p className="para">Created a website for Healthcare Clinic with HTML and CSS, featuring home and
                            registration pages. Developed an event management front page, including a
                            welcome and chief guest profile summary. Both projects are launched on Neocities
                            and GitHub .And I have Enthusiastic Entry-Level Professional Eager to Launch IT
                            Career with Transferable Skills from Non-IT Background
                        </p>
                    </div>
                    <div className="container mt-5px">
                        <div class="row">
                            <div class="col-sm-4">
                                <h3>Web Developer</h3>
                                <div className="image col-sm-6">
                                    <img src={manish} alt="" />
                                </div>

                            </div>
                            <div class="col-sm-8">
                                <h3>Myself</h3>

                                <ul className="list-unstyled my-5px">
                                    <li className="about-details "><strong>Birthday:</strong> 06 Oct 1996</li>
                                    <li className="about-details "><strong>Website:</strong> <a href="http://www.example.com">www.example.com</a></li>
                                    <li className="about-details"><strong>Phone:</strong> +91 902-560-9172</li>
                                    <li className="about-details"><strong>City:</strong> Nagercoil</li>
                                </ul>
                                <ul className="list-unstyled my-5px">
                                    <li className="about-details"><strong>Age:</strong> 27</li>
                                    <li className="about-details"><strong>Degree:</strong> Bachelor</li>
                                    <li className="about-details"><strong>Email:</strong> manishece1996@.com</li>
                                    <li className="about-details"><strong>Web Developer:</strong> Available</li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer-about">
                            <p>
                                With a strong foundation in HTML, CSS, JavaScript, and ReactJS, I possess the skills to build responsive and dynamic web applications.
                                My expertise in these technologies enables me to create
                                intuitive user interfaces and enhance user experiences effectively. I'm eager to contribute to innovative web development projects.
                            </p>
                        </div>


                    </div>



                </div>
            





        </>
    )
}
export default About