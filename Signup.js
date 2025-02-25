import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import lib from '../config/lib';
import Swal from 'sweetalert2';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        try {
            const response = await axios.post(lib.apiUrl + '/' + lib.apis.signup, {
                "name": name,
                "email": email,
                "pass": password,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });
            if (response.data.status === "success") {
                Swal.fire({
                    title: "Congratulations!",
                    text: response.data.msg,
                    icon: "success"
                });
            }
        } catch (err) {
            console.log(err);
            Swal.fire("Somthing Went Wrong", "", "info");
        }
    }

    return (
        <div>
            <div class="container">

                <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                <div class="d-flex justify-content-center py-4">
                                    <a href="index.html" class="logo d-flex align-items-center w-auto">
                                    </a>
                                </div>

                                <div class="card mb-3">

                                    <div class="card-body">

                                        <div class="pt-4 pb-2">
                                            <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                                            <p class="text-center small">Enter your personal details to create account</p>
                                        </div>

                                        <form class="row g-3 needs-validation" novalidate>
                                            <div class="col-12">
                                                <label for="yourName" class="form-label">Your Name</label>
                                                <input type="text" name="name" class="form-control" id="yourName" required
                                                    onChange={(e) => setName(e.target.value)} />
                                                <div class="invalid-feedback">Please, enter your name!</div>
                                            </div>

                                            <div class="col-12">
                                                <label for="yourEmail" class="form-label">Your Email</label>
                                                <input type="email" name="email" class="form-control" id="yourEmail" required
                                                    onChange={(e) => setEmail(e.target.value)} />
                                                <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                                            </div>

                                            <div class="col-12">
                                                <label for="yourPassword" class="form-label">Password</label>
                                                <input type="password" name="password" class="form-control" id="yourPassword" required
                                                    onChange={(e) => setPassword(e.target.value)} />
                                                <div class="invalid-feedback">Please enter your password!</div>
                                            </div>

                                            {/* <div class="col-12">
                                                <div class="form-check">
                                                    <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required/>
                                                        <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                                        <div class="invalid-feedback">You must agree before submitting.</div>
                                                </div>
                                            </div> */}
                                            <div class="col-12">
                                                <button class="btn btn-primary w-100" type="submit" onClick={handleSignup}>Create Account</button>
                                            </div>
                                            <div class="col-12">
                                                <p class="small mb-0">Already have an account? <a href="pages-login.html">Log in</a></p>
                                            </div>
                                        </form>

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
export default Signup;