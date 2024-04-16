import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import lib from './config/lib';

const Cards = () => {

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
    const itemsPerPage = 10;
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
    return (
        <section id="portfolio" className="portfolio sections-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Cards</h2>
                    <p>Find the perfect fit for you and book a meeting</p>
                </div>

                <div className="portfolio-isotope" data-portfolio-filter="*" data-portfolio-layout="masonry" data-portfolio-sort="original-order" data-aos="fade-up" data-aos-delay="100">

                    <div>
                        <ul className="portfolio-flters">
                            <li data-filter="*" className="filter-active">
                                <Form.Select aria-label="Default select">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </li>
                            <li data-filter=".filter-app">
                                <Form.Select aria-label="Default select">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </li>
                            <li data-filter=".filter-product">
                                <Form.Select aria-label="Default select">
                                    <option>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </li>
                            <li data-filter=".filter-branding">
                                <Button variant="outline-primary buttonfilter">Filter</Button>
                            </li>
                        </ul>
                    </div>

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


                    </div>

                </div>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    breakLabel={"..."}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={10}
                    onPageChange={handlePageChange}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </div>

        </section>
    )
}
export default Cards;