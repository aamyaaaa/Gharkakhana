import React from "react";
// import Navbar from "./common/Navbar";
import "./common/animate.css";
import "./common/style.css";
import Logo from './images/logo.png';
import Appstore from "./images/appstore.png";
import Playstore from "./images/playstore.png";
import Iphone from "./images/iphone-screen.png";
import Applightwave from "./images/applight-wave.svg";
import Screen from "./images/iphone-screen-with-shadow.png";
import U1 from "./images/user1.jpg";
import U2 from "./images/user2.jpg";
import U3 from "./images/user3.jpg";
import { Link } from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            {/* navbar */}
            <nav className="navbar navbar-expand-lg">
                <div className="container"> <a className="navbar-brand navbar-logo" href="#"> <img src={Logo} alt="logo" className="logo-1"/> </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="fas fa-bars"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"> <a className="nav-link" href="" data-scroll-nav="0">Home</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="1">About</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="2">Features</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="3">Team</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="4">Testimonials</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="5">Book a meeting</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#" data-scroll-nav="6">Contact</a> </li>
                            <li className="nav-item"> <Link className="nav-link" to="/login" data-scroll-nav="6">Login</Link> </li>

                        </ul>
                    </div>
                </div>
            </nav>
          
            <section className="banner" data-scroll-index='0'>
                <div className="banner-overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-sm-12">
                                <div className="banner-text">
                                    <h2 className="white">Best App Website Template</h2>
                                    <h6 className="white">This awesome template designed by <a href="http://w3Template.com" target="_blank" rel="dofollow" className="weblink">W3 Template</a>.</h6>
                                    <p className="banner-text white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur hendrerit neque massa, sit amet tristique ante porta ut. In sodales et justo vel vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                                    <ul>
                                        <li><a href="#"><img src={Appstore} className="wow fadeInUp" data-wow-delay="0.4s" /></a></li>
                                        <li><a href="#"><img src={Playstore} className="wow fadeInUp" data-wow-delay="0.7s" /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-12"> <img src={Iphone} className="img-fluid wow fadeInUp" /> </div>
                        </div>
                    </div>
                </div>
                <span className="svg-wave"> <img className="svg-hero" src={Applightwave}/> </span> </section>

  

            <section className="about section-padding prelative" data-scroll-index='1'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sectioner-header text-center">
                                <h3>About</h3>
                                <span className="line"></span>
                                <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                            </div>
                            <div className="section-content text-center">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="icon-box wow fadeInUp" data-wow-delay="0.2s"> <i className="fa fa-life-ring" aria-hidden="true"></i>
                                            <h5>Support</h5>
                                            <p>Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="icon-box wow fadeInUp" data-wow-delay="0.4s"> <i className="fa fa-mobile" aria-hidden="true"></i>
                                            <h5>Cross Platform</h5>
                                            <p>Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="icon-box wow fadeInUp" data-wow-delay="0.6s"> <i className="fa fa-bolt" aria-hidden="true"></i>
                                            <h5>Fast</h5>
                                            <p>Phasellus lobortis justo a magna facilisis, in commodo tellus rutrum. Sed vitae condimentum nulla.</p>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" className="about-btn">Learn More</a> </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="video-section prelative text-center white">
                <div className="section-padding video-overlay">
                    <div className="container">
                        <h3>Watch Now</h3>
                        <i className="fa fa-play" id="video-icon" aria-hidden="true"></i>
                        <div className="video-popup">
                            <div className="video-src">
                                <div className="iframe-src">
                                    <iframe src="https://www.youtube.com/embed/Ku52zNnft8k?rel=0&amp;showinfo=0" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="feature section-padding" data-scroll-index='2'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sectioner-header text-center">
                                <h3>Features</h3>
                                <span className="line"></span>
                                <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                            </div>
                            <div className="section-content text-center">
                                <div className="row">
                                    <div className="col-md-4 col-sm-12">
                                        <div className="media single-feature wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="media-body text-right media-right-margin">
                                                <h5>Fast Processing</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore</p>
                                            </div>
                                            <div className="media-right icon-border"> <span className="fa fa-bolt" aria-hidden="true"></span> </div>
                                        </div>
                                        <div className="media single-feature wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="media-body text-right media-right-margin">
                                                <h5>Low Power Consuming</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore</p>
                                            </div>
                                            <div className="media-right icon-border"> <span className="fa fa-battery-full" aria-hidden="true"></span> </div>
                                        </div>
                                        <div className="media single-feature wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="media-body text-right media-right-margin">
                                                <h5>Wifi Compatibility</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore</p>
                                            </div>
                                            <div className="media-right icon-border"> <span className="fa fa-wifi" aria-hidden="true"></span> </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-none d-md-block d-lg-block">
                                        <div className="feature-mobile"> <img src={Screen} className="img-fluid wow fadeInUp" /> </div>
                                    </div>
                                    <div className="col-md-4 col-sm-12">
                                        <div className="media single-feature wow fadeInUp" data-wow-delay="0.2s">
                                            <div className="media-left icon-border media-right-margin"> <span className="fa fa-check-double" aria-hidden="true"></span> </div>
                                            <div className="media-body text-left">
                                                <h5>Regular Updates</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore</p>
                                            </div>
                                        </div>
                                        <div className="media single-feature wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="media-left icon-border media-right-margin"> <span className="fa fa-dollar-sign" aria-hidden="true"></span> </div>
                                            <div className="media-body text-left">
                                                <h5>Save Money</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore</p>
                                            </div>
                                        </div>
                                        <div className="media single-feature wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="media-left icon-border media-right-margin"> <span className="fa fa-hdd" aria-hidden="true"></span> </div>
                                            <div className="media-body text-left">
                                                <h5>Unlimited Storage</h5>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididugnt ut labore</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
            <section className="team section-padding" data-scroll-index='3'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sectioner-header text-center">
                                <h3>Our Team</h3>
                                <span className="line"></span>
                                <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                            </div>
                            <div className="section-content text-center">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="team-detail wow bounce" data-wow-delay="0.2s"> <img src={U1} className="img-fluid" />
                                            <h4>Nitu Singh</h4>
                                            <p>Marketing Specialist</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="team-detail wow bounce" data-wow-delay="0.4s"> <img src={U2} className="img-fluid" />
                                            <h4>Yogesh Singh</h4>
                                            <p>CEO & Founder</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="team-detail wow bounce" data-wow-delay="0.6s"> <img src={U3} className="img-fluid" />
                                            <h4>Nisha Sharma</h4>
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

       
            <section className="testimonial section-padding" data-scroll-index='4'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sectioner-header text-center white">
                                <h3>Testimonials</h3>
                                <span className="line"></span>
                                <p className="white">Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                            </div>

                            <div className="section-content">
                                <div className="row">
                                    <div className="offset-md-2 col-md-8 col-sm-12">
                                        <div className="slider">
                                            <div className="slider-item">
                                                <div className="test-img"><img src={U1} alt="Placeholder" width="157" height="157"/></div>
                                                <div className="test-text"><span className="title"><span>John Michal</span> Digital Designer</span> Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat.</div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="test-img"><img src={U3} alt="Placeholder" width="157" height="157"/></div>
                                                <div className="test-text"><span className="title"><span>Steve Smith</span> App User</span> Euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat. Ut wisi enim ad minim veniam, quis nostrud v</div>
                                            </div>
                                            <div className="slider-item">
                                                <div className="test-img"><img src={U3} alt="Placeholder" width="157" height="157"/></div>
                                                <div className="test-text"><span className="title"><span>Gordon Shaw</span> Blogger</span> Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam eratvo lutpat. Ut wisi enim ad minim veniam, quis nostrud v</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

       
            <section className="faq section-padding prelative" data-scroll-index='5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sectioner-header text-center">
                                <h3>Frequently Asked Questions</h3>
                                <span className="line"></span>
                                <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                            </div>
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.2s">
                                        <h4>Nam tellus felis, dignissim quis dui ?</h4>
                                        <p>Suspendisse fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo.</p>
                                    </div>
                                    <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.2s">
                                        <h4>Mauris scelerisque, dui non faucibus vulputate ?</h4>
                                        <p>Sed tempus in neque ac rhoncus. Phasellus vehicula, erat tempor malesuada egestas, mauris tellus malesuada erat, at vestibulum nulla ex et lectus. Nullam elit est, ultricies et tellus ac, euismod placerat orci.</p>
                                    </div>
                                    <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.4s">
                                        <h4>Nullam elit est, ultricies et tellus ac ?</h4>
                                        <p>Ut vestibulum euismod aliquet. Quisque nec malesuada nibh. Vivamus euismod nunc eu leo faucibus, vel elementum justo posuere. In sed varius nisi. Curabitur id porta ipsum, et vestibulum dui.</p>
                                    </div>
                                    <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.4s">
                                        <h4>Suspendisse fermentum placerat enim, at pellentesque augue elit est ?</h4>
                                        <p>Vivamus euismod nunc eu leo faucibus, vel elementum justo posuere. In sed varius nisi.</p>
                                    </div>
                                    <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.6s">
                                        <h4>Ut vestibulum euismod aliquet. Quisque nec malesuada nibh ?</h4>
                                        <p>Suspendisse fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo dapibus congue.</p>
                                    </div>
                                    <div className="col-md-6 faq-content wow fadeInUp" data-wow-delay="0.6s">
                                        <h4>Donec commodo dapibus congue ?</h4>
                                        <p>Nullam elit est, ultricies et tellus ac, euismod placerat orci fermentum placerat enim, at pellentesque augue. Nullam elit est, ultricies et tellus ac, euismod placerat orci. Donec commodo dapibus congue.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact section-padding" data-scroll-index='6'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sectioner-header text-center">
                                <h3>Contact us</h3>
                                <span className="line"></span>
                                <p>Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                            </div>
                            <div className="section-content">
                                <div className="row">
                                    <div className="col-sm-12 col-md-12 col-lg-8">
                                        <form id="contact_form" action="">
                                            <div className="row">
                                                <div className="col">
                                                    <input type="text" id="your_name" className="form-input w-100" name="full-name" placeholder="Full Name" required/>
                                                </div>
                                                <div className="col">
                                                    <input type="email" id="email" className="form-input w-100" name="email" placeholder="Email" required/>
                                                </div>
                                            </div>
                                            <input type="text" id="subject" className="form-input w-100" name="subject" placeholder="Subject" />
                                                <textarea className="form-input w-100" id="message" placeholder="Message" name="message"></textarea>
                                                <button className="btn-grad w-100 text-uppercase" type="submit" name="button">submit</button>
                                        </form>
                                    </div>
                                    <div className="col-sm-12 col-md-12 col-lg-4">
                                        <div className="contact-info white">
                                            <div className="contact-item media"> <i className="fa fa-map-marker-alt media-left media-right-margin"></i>
                                                <div className="media-body">
                                                    <p className="text-uppercase">Address</p>
                                                    <p className="text-uppercase">New Delhi, India</p>
                                                </div>
                                            </div>
                                            <div className="contact-item media"> <i className="fa fa-mobile media-left media-right-margin"></i>
                                                <div className="media-body">
                                                    <p className="text-uppercase">Phone</p>
                                                    <p className="text-uppercase"><a className="text-white" href="tel:+15173977100">009900990099</a> </p>
                                                </div>
                                            </div>
                                            <div className="contact-item media"> <i className="fa fa-envelope media-left media-right-margin"></i>
                                                <div className="media-body">
                                                    <p className="text-uppercase">E-mail</p>
                                                    <p className="text-uppercase"><a className="text-white" href="mailto:abcdefg@gmail.com">yogeshsingh.now@gmail.com</a> </p>
                                                </div>
                                            </div>
                                            <div className="contact-item media"> <i className="fa fa-clock media-left media-right-margin"></i>
                                                <div className="media-body">
                                                    <p className="text-uppercase">Working Hours</p>
                                                    <p className="text-uppercase">Mon-Fri 9.00 AM to 5.00PM.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="download section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sectioner-header text-center white">
                                <h3>Download Our App</h3>
                                <span className="line"></span>
                                <p className="white">Sed quis nisi nisi. Proin consectetur porttitor dui sit amet viverra. Fusce sit amet lorem faucibus, vestibulum ante in, pharetra ante.</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="section-content text-center">
                                <ul>
                                    <li><a href="#"><img src={Appstore} className="wow fadeInUp" data-wow-delay="0.4s" /></a></li>
                                    <li><a href="#"><img src={Playstore} className="wow fadeInUp" data-wow-delay="0.7s" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="footer-copy">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <p>2018 &copy; Applight. Website Designed by <a href="http://w3Template.com" target="_blank" rel="dofollow">W3 Template</a></p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Homepage;