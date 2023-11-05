
import React from 'react';

function Login() {
    return (

        <React.Fragment>
            <section id="login">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6 p-0">
                            <img src="assets/login-img.png" alt="login-image" class="img-fluid login-main-img" />
                        </div>
                        <div class="col-md-6 login-form">
                            <img src="assets/logo.svg" alt="logo" class="img-fluid" />
                            <div class="login-btns">
                                <button type="button" class="btn btn-lg btn-primary">Sign In</button>
                                <button type="button" class="btn btn-lg btn-secondary">New User? <br />Sign Up</button>
                            </div>
                            <div class="text-center welcome-text">
                                <h4 class="fs-2">Welcome back</h4>
                            </div>
                            <form>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label fw-medium fs-5">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-placeholder="Enter your email address or User ID"
                                        placeholder="Enter your email address or User ID" aria-describedby="emailHelp" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div class="mb-3">
                                    <div class="row">
                                        <div class="col-sm-6"><label for="exampleInputPassword1"
                                            class="form-label fw-medium fs-5">Password</label></div>
                                        <div class="col-sm-6 text-end">
                                            <h6 class="forgot-text fs-6">Forget password?</h6>
                                        </div>
                                    </div>
                                    <input type="password" class="form-control" id="exampleInputPassword1"
                                        aria-placeholder="Enter your password" placeholder="Enter your password" />
                                </div>
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                    <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox
                                        input</label>
                                </div>
                                <button type="submit" class="btn btn-lg btn-primary w-100 mt-3">Sign In</button>
                            </form>
                            <div class="row mt-4"> <label for="inputEmail1" class="form-label fw-medium fs-5">Subscribe to our
                                newsletter & stay updated</label>
                                <div class="input-group ">
                                    <input type="text" class="form-control" placeholder="Enter your Email ID for Newsletter"
                                        aria-label="label" />
                                    <span class="input-group-text bg-primary text-white"><img src="assets/send-arrow.svg"
                                        alt="send-logo" class="img-fluid" width="30" /></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section>
                <div class="row need-help-container p-4 px-5">
                    <div class="col-md-4">
                        <h3 class="fs-6 mb-4">Need any help?</h3>
                        <h6 class="fs-6"> Call 24/7 for any help </h6>
                        <h4 class="fs-3 text-primary mb-4"> <a>+1 123 456 7890</a></h4>
                        <h6 class="fs-6"> Mail to our support team </h6>
                        <h4 class="fs-3 text-primary mb-4"> <a>support@bcommers.com</a> </h4>
                        <h6 class="fs-6">Follow us on</h6>

                    </div>
                    <div class="col-md-8 footer-links">
                        <div class="row">
                            <div class="col-md-3">
                                <ul>
                                    <li class="list-item fw-bold">Company</li>
                                    <li class="list-item"><a href="#">About Us</a> </li>
                                    <li class="list-item"><a href="#">Careers</a> </li>
                                    <li class="list-item"><a href="#">Support</a></li>
                                    <li class="list-item"><a href="#">Collections</a></li>
                                    <li class="list-item"><a href="#">For Business</a></li>
                                    <li class="list-item"><a href="#">Gift Cards</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <ul>
                                    <li class="list-item fw-bold">Support</li>
                                    <li class="list-item"><a href="#">Account </a> </li>
                                    <li class="list-item"><a href="#">FAQ</a></li>
                                    <li class="list-item"><a href="#">Legal</a></li>
                                    <li class="list-item"><a href="#">Contract</a> </li>
                                    <li class="list-item"><a href="#">Affiliate Program</a></li>
                                    <li class="list-item"><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                            <div class="col-md-3">
                                <ul>
                                    <li class="list-item fw-bold">Other Services</li>
                                    <li class="list-item"><a href="#">Community Program</a> </li>
                                    <li class="list-item"><a href="#">Investor Relations</a></li>
                                    <li class="list-item"><a href="#">Rewards Program</a></li>
                                    <li class="list-item"><a href="#">Points PLUS</a> </li>
                                    <li class="list-item"><a href="#">Partners</a></li>
                                    <li class="list-item"><a href="#">List My Hotels</a></li>

                                </ul>
                            </div>
                            <div class="col-md-3">
                                <ul>
                                    <li class="list-item fw-bold">Top Cities</li>
                                    <li class="list-item"><a href="#">Chicago</a> </li>
                                    <li class="list-item"><a href="#">New York</a> </li>
                                    <li class="list-item"><a href="#">San Francisco</a></li>
                                    <li class="list-item"><a href="#">Califonia</a></li>
                                    <li class="list-item"><a href="#">Ohio</a></li>
                                    <li class="list-item"><a href="#">Alaska</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="align-items-center bg-dark p-3 px-5 row text-white">
                    <div class="col-md-5">
                        <p class="mb-0">
                            Copyright © 2023 All Rights Reserved | Add Powered by <a href="#">PCT.</a>
                        </p>
                    </div>
                    <div class="col-md-1">
                        <img alt="iso-logo" src="assets/iso-logo.svg" width="100%" height="60" />
                    </div>
                    <div class="col-md-1">
                        <img alt="IATA-logo" src="assets/IATA-logo.svg" width="100%" height="60" />
                    </div>
                    <div class="col-md-5 text-end">
                        <img alt="we-accept-cards" src="assets/we-accept-cards.svg" class="img-fluid" style={{height : "40px"}} />
                    </div>
                </div>
            </section></React.Fragment>
    )

}

export default Login;