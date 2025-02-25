import React from "react";
// import "../assets/css/style.css"
import { Link } from "react-router-dom";
import axios from 'axios';
import lib from '../config/lib';
import Button from 'react-bootstrap/Button';

import Swal from 'sweetalert2';

const login = () => {
    // const [modalShow, setModalShow] = React.useState(false);
    // const [email, setEmail] = useState('');
    // const [otp,setOtp ] = useState('');
    // const [np, setNp] = useState('');
    // const [cp,setCp ] = useState('');

    return (
        <div className="login">
            <div class="container">

                <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                <div class="d-flex justify-content-center py-4">
                                    <a href="index.html" class="logo d-flex align-items-center w-auto">
                                        {/* <img src="assets/img/logo.png" alt="" /> */}
                                        {/* <span class="d-none d-lg-block">NiceAdmin</span> */}
                                    </a>
                                </div>

                                <div class="card mb-3">

                                    <div class="card-body">

                                        <div class="pt-4 pb-2">
                                            <h5 class="card-title text-center pb-0 fs-4">Verify your account</h5>
                                            <p class="text-center small">Enter your email address</p>
                                        </div>

                                        <div class="row g-3 needs-validation" novalidate>

                                            <div class="col-12">
                                                <label for="yourUsername" class="form-label">Email Address</label>
                                                <div class="input-group has-validation">
                                                    <input type="text" name="username" class="form-control" id="yourUsername" required />
                                                    <div class="invalid-feedback">Email address</div>
                                                    <Button variant="secondary">Send otp</Button>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <label for="yourPassword" class="form-label">Password</label>
                                                <input type="password" name="password" class="form-control" id="yourPassword" required />
                                                <div class="invalid-feedback">Please enter your password!</div>
                                            </div>

                                            <div class="col-12">
                                                <label for="yourPassword" class="form-label">Confirm Password</label>
                                                <input type="password" name="password" class="form-control" id="yourPassword" required />
                                                <div class="invalid-feedback">Please enter your password again</div>
                                            </div>
                                            
                                            <div class="col-12">
                                                <button class="btn btn-primary w-100" type="submit">Login</button>
                                            </div>
                                            <div class="col-12">
                                                <p class="small mb-0">Don't have account? <a className="nav-link" data-scroll-nav="6"><Link to="/signup">Sign up</Link></a></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </div>
        </div>
    )
}
export default login;