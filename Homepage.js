import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import ReactPaginate from 'react-paginate';
import Button from 'react-bootstrap/Button';
import lib from './config/lib';
import Swal from 'sweetalert2';
import './stylehome/css/main.css';
import Heroimg from './imgggg.png';
// import Heroimg from './stylehome/img/hero-img.svg';
import Aboutimg from './stylehome/img/about.jpg';
import Aboutimg2 from './stylehome/img/about-2.jpg';
import Client1 from './stylehome/img/clients/client-1.png';
import Client2 from './stylehome/img/clients/client-2.png';
import Client3 from './stylehome/img/clients/client-3.png';
import Client4 from './stylehome/img/clients/client-4.png';
import Client5 from './stylehome/img/clients/client-5.png';
import Client6 from './stylehome/img/clients/client-6.png';
import Client7 from './stylehome/img/clients/client-7.png';
import Client8 from './stylehome/img/clients/client-8.png';
import Testimonial1 from './stylehome/img/testimonials/testimonials-1.jpg';
import Testimonial2 from './stylehome/img/testimonials/testimonials-2.jpg';
import Testimonial3 from './stylehome/img/testimonials/testimonials-3.jpg';
import Testimonial4 from './stylehome/img/testimonials/testimonials-4.jpg';
import Testimonial5 from './stylehome/img/testimonials/testimonials-5.jpg';

const Homepage = () => {

    const [name, setName] = useState('');
    const [emailaddress, setEmailaddress] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');


    ///////////try////////////
    useEffect(() => {
        handleDataFeth();
    }, []);

    const handleDataFeth = async () => {
        try {
            const response = await axios.get(lib.apiUrl + '/' + lib.apis.getamb, {});
            setData(response.data.data);
            // console.log(response.data.data);
        } catch (err) {
            console.log(err);
        }
    }

    const [currentPage, setCurrentPage] = useState([]);
    const itemsPerPage = 6;
    const [data, setData] = useState([]);

    const pageCount = data ? Math.ceil(data.length / itemsPerPage) : 0;

    // Function to handle page change
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    // Function to get the current page's data
    const getCurrentPageData = () => {
        // const startIndex = currentPage * itemsPerPage;
        // const endIndex = startIndex + itemsPerPage;
        // return data.slice(startIndex, endIndex);

        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return data ? data.slice(startIndex, endIndex) : [];
    };

    const currentPageData = getCurrentPageData([]);
    ///////////try////////////


    const handleconnect = async () => {
        try {
            const response = await axios.post(lib.apiUrl + '/' + lib.apis.contactus, {
                "name": name,
                "emailaddress": emailaddress,
                "subject": subject,
                "message": message
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.data.status === "success") {
                Swal.fire('Message sent successfully', '', 'success')
            }
        } catch (err) {
            console.log(err);
            Swal.fire(' Cancelled', '', 'error');
        }
    }



    return (
        <div>
            <section id="topbar" className="topbar d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:gharkakhana@gmail.com">gharkakhana@gmail.com</a></i>
                        <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
                    </div>
                    <div className="social-links d-none d-md-flex align-items-center">
                        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </section >

            <header id="header" className="header d-flex align-items-center">

                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="index.html" className="logo d-flex align-items-center">
                        <h1>Impact<span>.</span></h1>
                    </a>
                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="#hero">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><Link to="/cards">Cards</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><a href="blog.html">Blog</a></li>
                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
            </header>

            <section id="hero" className="hero">
                <div className="container position-relative">
                    <div className="row gy-5" data-aos="fade-in">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center text-center text-lg-start">
                            <h2>Welcome to <span>Ghar ka Khana</span></h2>
                            <p>Indianised homecooked food for everyday, every occasion</p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <a href="#about" className="btn-get-started">Get Started</a>
                                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center"><i className="bi bi-play-circle"></i><span>Watch Video</span></a>
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <img src={Heroimg} className="img-fluid" alt="" data-aos="zoom-out" data-aos-delay="100" />
                        </div>
                    </div>
                </div>

                <div className="icon-boxes position-relative">
                    <div className="container position-relative">
                        <div className="row gy-4 mt-5">

                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-easel"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Lorem Ipsum</a></h4>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="200">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-gem"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Sed ut perspiciatis</a></h4>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-geo-alt"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Magni Dolores</a></h4>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
                                <div className="icon-box">
                                    <div className="icon"><i className="bi bi-command"></i></div>
                                    <h4 className="title"><a href="" className="stretched-link">Nemo Enim</a></h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </section >

            <main id="main">

                <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>About Us</h2>
                            <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                        </div>

                        <div className="row gy-4">
                            <div className="col-lg-6">
                                <h3>Voluptatem dignissimos provident quasi corporis</h3>
                                <img src={Aboutimg} className="img-fluid rounded-4 mb-4" alt="" />
                                <p>Ut fugiat ut sunt quia veniam. Voluptate perferendis perspiciatis quod nisi et. Placeat debitis quia recusandae odit et consequatur voluptatem. Dignissimos pariatur consectetur fugiat voluptas ea.</p>
                                <p>Temporibus nihil enim deserunt sed ea. Provident sit expedita aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut repellendus nobis tempore doloribus debitis explicabo similique sit. Accusantium sed ut omnis beatae neque deleniti repellendus.</p>
                            </div>
                            <div className="col-lg-6">
                                <div className="content ps-0 ps-lg-5">
                                    <p className="fst-italic">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                        magna aliqua.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                        <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                        <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                                    </ul>
                                    <p>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                                    </p>

                                    <div className="position-relative mt-4">
                                        <img src={Aboutimg2} className="img-fluid rounded-4" alt="" />
                                        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="clients" className="clients">
                    <div className="container" data-aos="zoom-out">

                        <div className="clients-slider swiper">
                            <div className="swiper-wrapper align-items-center">
                                <div className="swiper-slide"><img src={Client1} className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src={Client2} className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src={Client3} className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src={Client4} className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src={Client5} className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src={Client6} className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src={Client7} className="img-fluid" alt="" /></div>
                                <div className="swiper-slide"><img src={Client8} className="img-fluid" alt="" /></div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="call-to-action" className="call-to-action">
                    <div className="container text-center" data-aos="zoom-out">
                        <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox play-btn"></a>
                        <h3>Call To Action</h3>
                        <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <a className="cta-btn" href="#">Call To Action</a>
                    </div>
                </section>

                <section id="services" className="services sections-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Our Services</h2>
                            <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                        </div>

                        <div className="row gy-4" data-aos="fade-up" data-aos-delay="100">

                            <div className="col-lg-4 col-md-6">
                                <div className="service-item  position-relative">
                                    <div className="icon">
                                        <i className="bi bi-activity"></i>
                                    </div>
                                    <h3>Nesciunt Mete</h3>
                                    <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                                    <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-broadcast"></i>
                                    </div>
                                    <h3>Eosle Commodi</h3>
                                    <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                                    <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-easel"></i>
                                    </div>
                                    <h3>Ledo Markt</h3>
                                    <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                                    <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-bounding-box-circles"></i>
                                    </div>
                                    <h3>Asperiores Commodit</h3>
                                    <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                                    <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-calendar4-week"></i>
                                    </div>
                                    <h3>Velit Doloremque</h3>
                                    <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                                    <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-item position-relative">
                                    <div className="icon">
                                        <i className="bi bi-chat-square-text"></i>
                                    </div>
                                    <h3>Dolori Architecto</h3>
                                    <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                                    <a href="#" className="readmore stretched-link">Read more <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="testimonials" className="testimonials">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Testimonials</h2>
                            <p>Voluptatem quibusdam ut ullam perferendis repellat non ut consequuntur est eveniet deleniti fignissimos eos quam</p>
                        </div>

                        <div className="slides-3 swiper" data-aos="fade-up" data-aos-delay="100">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <div className="d-flex align-items-center">
                                                <img src={Testimonial1} className="testimonial-img flex-shrink-0" alt="" />
                                                <div>
                                                    <h3>Saul Goodman</h3>
                                                    <h4>Ceo &amp; Founder</h4>
                                                    <div className="stars">
                                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <div className="d-flex align-items-center">
                                                <img src={Testimonial2} className="testimonial-img flex-shrink-0" alt="" />
                                                <div>
                                                    <h3>Sara Wilsson</h3>
                                                    <h4>Designer</h4>
                                                    <div className="stars">
                                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>
                                                Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <div className="d-flex align-items-center">
                                                <img src={Testimonial3} className="testimonial-img flex-shrink-0" alt="" />
                                                <div>
                                                    <h3>Jena Karlis</h3>
                                                    <h4>Store Owner</h4>
                                                    <div className="stars">
                                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>
                                                Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <div className="d-flex align-items-center">
                                                <img src={Testimonial4} className="testimonial-img flex-shrink-0" alt="" />
                                                <div>
                                                    <h3>Matt Brandon</h3>
                                                    <h4>Freelancer</h4>
                                                    <div className="stars">
                                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>
                                                Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore.
                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonial-wrap">
                                        <div className="testimonial-item">
                                            <div className="d-flex align-items-center">
                                                <img src={Testimonial5} className="testimonial-img flex-shrink-0" alt="" />
                                                <div>
                                                    <h3>John Larson</h3>
                                                    <h4>Entrepreneur</h4>
                                                    <div className="stars">
                                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p>
                                                <i className="bi bi-quote quote-icon-left"></i>
                                                Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore.
                                                <i className="bi bi-quote quote-icon-right"></i>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                    </div>
                </section>

                <section id="portfolio" className="portfolio sections-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Cards</h2>
                            <p>Find the perfect fit for you and book a meeting</p>
                        </div>

                        <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">
                            <div className="row gy-4 portfolio-container">
                                {currentPageData && currentPageData.map((item) => (
                                    <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                                        <div className="portfolio-wrap">
                                            <div className="portfolio-info">
                                                <h4><a title="More Details">{item.breed}</a></h4>
                                                <p>{item.age}</p>
                                                <p>{item.hobby}</p>
                                                <p>{item.quote}</p>
                                                <br />
                                                <Button variant="secondary">Book a meeting</Button>{' '}
                                            </div>
                                        </div>
                                    </div>

                                ))}
                                {/* <Button variant="secondary">show more</Button> */}

                            </div>

                        </div>
                        <center>
                            <br/>
                            <Button variant="link"><Link to="/cards">Show More</Link></Button>

                            {/* <Button variant="primary" size="lg"><Link to="/cards">Cards</Link></Button> */}
                        </center>

                    </div>

                </section>

                {/* <section id="portfolio" className="portfolio sections-bg">
                    <div className="container" data-aos="fade-up"> */}

                {/* <div className="section-header">
                            <h2>Portfolio</h2>
                            <p>Quam sed id excepturi ccusantium dolorem ut quis dolores nisi llum nostrum enim velit qui ut et autem uia reprehenderit sunt deleniti</p>
                        </div>

                        <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">

                            <div>
                                <ul className="portfolio-flters">
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-app">App</li>
                                    <li data-filter=".filter-product">Product</li>
                                    <li data-filter=".filter-branding">Branding</li>
                                    <li data-filter=".filter-books">Books</li>
                                </ul>
                            </div>

                            <div className="row gy-4 portfolio-container">

                                <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <a href="assets/img/portfolio/app-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/app-1.jpg" className="img-fluid" alt="" /></a>
                                        <div className="portfolio-info">
                                            <h4><a href="portfolio-details.html" title="More Details">App 1</a></h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                                    <div className="portfolio-wrap">
                                        <a href="assets/img/portfolio/product-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/product-1.jpg" className="img-fluid" alt="" /></a>
                                        <div className="portfolio-info">
                                            <h4><a href="portfolio-details.html" title="More Details">Product 1</a></h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                                    <div className="portfolio-wrap">
                                        <a href="assets/img/portfolio/branding-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/branding-1.jpg" className="img-fluid" alt="" /></a>
                                        <div className="portfolio-info">
                                            <h4><a href="portfolio-details.html" title="More Details">Branding 1</a></h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                                    <div className="portfolio-wrap">
                                        <a href="assets/img/portfolio/books-1.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/books-1.jpg" className="img-fluid" alt="" /></a>
                                        <div className="portfolio-info">
                                            <h4><a href="portfolio-details.html" title="More Details">Books 1</a></h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 portfolio-item filter-app">
                                    <div className="portfolio-wrap">
                                        <a href="assets/img/portfolio/app-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/app-2.jpg" className="img-fluid" alt="" /></a>
                                        <div className="portfolio-info">
                                            <h4><a href="portfolio-details.html" title="More Details">App 2</a></h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 portfolio-item filter-product">
                                    <div className="portfolio-wrap">
                                        <a href="assets/img/portfolio/product-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/product-2.jpg" className="img-fluid" alt="" /></a>
                                        <div className="portfolio-info">
                                            <h4><a href="portfolio-details.html" title="More Details">Product 2</a></h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 portfolio-item filter-branding">
                                    <div className="portfolio-wrap">
                                        <a href="assets/img/portfolio/branding-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/branding-2.jpg" className="img-fluid" alt="" /></a>
                                        <div className="portfolio-info">
                                            <h4><a href="portfolio-details.html" title="More Details">Branding 2</a></h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xl-4 col-md-6 portfolio-item filter-books">
                                    <div className="portfolio-wrap">
                                        <a href="assets/img/portfolio/books-2.jpg" data-gallery="portfolio-gallery-app" className="glightbox"><img src="assets/img/portfolio/books-2.jpg" className="img-fluid" alt="" /></a>
                                        <div className="portfolio-info">
                                            <h4><a href="portfolio-details.html" title="More Details">Books 2</a></h4>
                                            <p>Lorem ipsum, dolor sit amet consectetur</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div> */}

                {/* </div>
                </section> */}

                <section id="pricing" className="pricing sections-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Pricing</h2>
                            <p>Aperiam dolorum et et wuia molestias qui eveniet numquam nihil porro incidunt dolores placeat sunt id nobis omnis tiledo stran delop</p>
                        </div>

                        <div className="row g-4 py-lg-5" data-aos="zoom-out" data-aos-delay="100">

                            <div className="col-lg-4">
                                <div className="pricing-item">
                                    <h3>Free Plan</h3>
                                    <div className="icon">
                                        <i className="bi bi-box"></i>
                                    </div>
                                    <h4><sup>$</sup>0<span> / month</span></h4>
                                    <ul>
                                        <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                                        <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                                        <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                                        <li className="na"><i className="bi bi-x"></i> <span>Pharetra massa massa ultricies</span></li>
                                        <li className="na"><i className="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span></li>
                                    </ul>
                                    <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="pricing-item featured">
                                    <h3>Business Plan</h3>
                                    <div className="icon">
                                        <i className="bi bi-airplane"></i>
                                    </div>

                                    <h4><sup>$</sup>29<span> / month</span></h4>
                                    <ul>
                                        <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                                        <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                                        <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                                        <li><i className="bi bi-check"></i> Pharetra massa massa ultricies</li>
                                        <li><i className="bi bi-check"></i> Massa ultricies mi quis hendrerit</li>
                                    </ul>
                                    <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="pricing-item">
                                    <h3>Developer Plan</h3>
                                    <div className="icon">
                                        <i className="bi bi-send"></i>
                                    </div>
                                    <h4><sup>$</sup>49<span> / month</span></h4>
                                    <ul>
                                        <li><i className="bi bi-check"></i> Quam adipiscing vitae proin</li>
                                        <li><i className="bi bi-check"></i> Nec feugiat nisl pretium</li>
                                        <li><i className="bi bi-check"></i> Nulla at volutpat diam uteera</li>
                                        <li><i className="bi bi-check"></i> Pharetra massa massa ultricies</li>
                                        <li><i className="bi bi-check"></i> Massa ultricies mi quis hendrerit</li>
                                    </ul>
                                    <div className="text-center"><a href="#" className="buy-btn">Buy Now</a></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section id="faq" className="faq">
                    <div className="container" data-aos="fade-up">

                        <div className="row gy-4">

                            <div className="col-lg-4">
                                <div className="content px-xl-5">
                                    <h3>Frequently Asked <strong>Questions</strong></h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                    </p>
                                </div>
                            </div>

                            <div className="col-lg-8">

                                <div className="accordion accordion-flush" id="faqlist" data-aos="fade-up" data-aos-delay="100">

                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                                                <span className="num">1.</span>
                                                Non consectetur a erat nam at lectus urna duis?
                                            </button>
                                        </h3>
                                        <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div className="accordion-body">
                                                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                                                <span className="num">2.</span>
                                                Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?
                                            </button>
                                        </h3>
                                        <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div className="accordion-body">
                                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                                                <span className="num">3.</span>
                                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?
                                            </button>
                                        </h3>
                                        <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div className="accordion-body">
                                                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                                                <span className="num">4.</span>
                                                Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                                            </button>
                                        </h3>
                                        <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div className="accordion-body">
                                                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item">
                                        <h3 className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                                                <span className="num">5.</span>
                                                Tempus quam pellentesque nec nam aliquam sem et tortor consequat?
                                            </button>
                                        </h3>
                                        <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                                            <div className="accordion-body">
                                                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>
                </section>

                <section id="recent-posts" className="recent-posts sections-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Recent Blog Posts</h2>
                            <p>Consequatur libero assumenda est voluptatem est quidem illum et officia imilique qui vel architecto accusamus fugit aut qui distinctio</p>
                        </div>

                        <div className="row gy-4">

                            <div className="col-xl-4 col-md-6">
                                <article>

                                    <div className="post-img">
                                        <img src="assets/img/blog/blog-1.jpg" alt="" className="img-fluid" />
                                    </div>

                                    <p className="post-category">Politics</p>

                                    <h2 className="title">
                                        <a href="blog-details.html">Dolorum optio tempore voluptas dignissimos</a>
                                    </h2>

                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/blog/blog-author.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                                        <div className="post-meta">
                                            <p className="post-author">Maria Doe</p>
                                            <p className="post-date">
                                                <time datetime="2022-01-01">Jan 1, 2022</time>
                                            </p>
                                        </div>
                                    </div>

                                </article>
                            </div>

                            <div className="col-xl-4 col-md-6">
                                <article>

                                    <div className="post-img">
                                        <img src="assets/img/blog/blog-2.jpg" alt="" className="img-fluid" />
                                    </div>

                                    <p className="post-category">Sports</p>

                                    <h2 className="title">
                                        <a href="blog-details.html">Nisi magni odit consequatur autem nulla dolorem</a>
                                    </h2>

                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/blog/blog-author-2.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                                        <div className="post-meta">
                                            <p className="post-author">Allisa Mayer</p>
                                            <p className="post-date">
                                                <time datetime="2022-01-01">Jun 5, 2022</time>
                                            </p>
                                        </div>
                                    </div>

                                </article>
                            </div>

                            <div className="col-xl-4 col-md-6">
                                <article>

                                    <div className="post-img">
                                        <img src="assets/img/blog/blog-3.jpg" alt="" className="img-fluid" />
                                    </div>

                                    <p className="post-category">Entertainment</p>

                                    <h2 className="title">
                                        <a href="blog-details.html">Possimus soluta ut id suscipit ea ut in quo quia et soluta</a>
                                    </h2>

                                    <div className="d-flex align-items-center">
                                        <img src="assets/img/blog/blog-author-3.jpg" alt="" className="img-fluid post-author-img flex-shrink-0" />
                                        <div className="post-meta">
                                            <p className="post-author">Mark Dower</p>
                                            <p className="post-date">
                                                <time datetime="2022-01-01">Jun 22, 2022</time>
                                            </p>
                                        </div>
                                    </div>

                                </article>
                            </div>

                        </div>

                    </div>
                </section>

                <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Contact</h2>
                            <p>Send us a message and wait to hear back from us!</p>
                        </div>

                        <div className="row gx-lg-0 gy-4">

                            <div className="col-lg-4">

                                <div className="info-container d-flex flex-column align-items-center justify-content-center">
                                    <div className="info-item d-flex">
                                        <i className="bi bi-geo-alt flex-shrink-0"></i>
                                        <div>
                                            <h4>Location:</h4>
                                            <p>A108 Adam Street, New York, NY 535022</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex">
                                        <i className="bi bi-envelope flex-shrink-0"></i>
                                        <div>
                                            <h4>Email:</h4>
                                            <p>info@example.com</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex">
                                        <i className="bi bi-phone flex-shrink-0"></i>
                                        <div>
                                            <h4>Call:</h4>
                                            <p>+1 5589 55488 55</p>
                                        </div>
                                    </div>

                                    <div className="info-item d-flex">
                                        <i className="bi bi-clock flex-shrink-0"></i>
                                        <div>
                                            <h4>Open Hours:</h4>
                                            <p>Mon-Sat: 11AM - 23PM</p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-8">
                                <div role="form" className="php-email-form">
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required
                                                onChange={(e) => setName(e.target.value)} />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required
                                                onChange={(e) => setEmailaddress(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required
                                            onChange={(e) => setSubject(e.target.value)} />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="7" placeholder="Message" required onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit" onClick={handleconnect}>Send Message</button></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>


            <footer id="footer" class="footer">

                <div class="container">
                    <div class="row gy-4">
                        <div class="col-lg-5 col-md-12 footer-info">
                            <a href="index.html" class="logo d-flex align-items-center">
                                <span>Impact</span>
                            </a>
                            <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                            <div class="social-links d-flex mt-4">
                                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div class="col-lg-2 col-6 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Services</a></li>
                                <li><a href="#">Terms of service</a></li>
                                <li><a href="#">Privacy policy</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-2 col-6 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><a href="#">Web Design</a></li>
                                <li><a href="#">Web Development</a></li>
                                <li><a href="#">Product Management</a></li>
                                <li><a href="#">Marketing</a></li>
                                <li><a href="#">Graphic Design</a></li>
                            </ul>
                        </div>

                        <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                            <h4>Contact Us</h4>
                            <p>
                                A108 Adam Street <br />
                                New York, NY 535022<br />
                                United States <br /><br />
                                <strong>Phone:</strong> +1 5589 55488 55<br />
                                <strong>Email:</strong> info@example.com<br />
                            </p>

                        </div>

                    </div>
                </div>

                <div class="container mt-4">
                    <div class="copyright">
                        &copy; Copyright <strong><span>Impact</span></strong>. All Rights Reserved
                    </div>
                    <div class="credits">
                    </div>
                </div>

            </footer>

        </div>
    )
}
export default Homepage;