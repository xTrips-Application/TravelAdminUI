
import React from 'react';

function Home() {
  return (
    <React.Fragment>
    <header class="bg-dark">
    <div class="container-fluid my_custom_container">
        <div class="row p-2 d-none d-md-flex">
            <div class="col-1 text-white d-flex align-items-center">
                <button class="btn text-white dropdown-toggle px-0" type="button" data-bs-toggle="dropdown"
                    data-bs-auto-close="true" aria-expanded="false">
                    ENGLISH
                </button>
            </div>
            <div class="col-1 text-white my-auto">
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                    <label class="form-check-label" for="flexSwitchCheckDefault">DARK</label>
                </div>
            </div>
            <div class="col-10 text-white text-end">
                <div class="d-grid gap-2 d-md-block">
                    <button type="button" class="btn text-white">MY WALLET</button>
                    <button type="button" class="btn text-white">CONTACT SALES</button>
                    <button type="button" class="btn text-white">SUPPORT</button>
                    <button type="button" class="btn text-white">BANK DETAILS</button>
                    <button type="button" class="btn text-white position-relative"><svg
                            xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                            class="bi bi-bell border p-2 rounded-5" viewBox="0 0 16 16">
                            <path
                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                        </svg> <span class="translate-middle badge rounded-pill bg-danger">
                            <small class="fw-medium">12</span>
                        <span class="visually-hidden">unread messages</span>
                        </span></button>
                </div>
            </div>
        </div>
    </div>
    <nav class="bg-body-tertiary py-4 px-5 navbar navbar-expand-lg">
        <div class="container-fluid my_custom_container">
            <a class="navbar-brand" href="#">
                <img src="assets/svg/logo.svg" class="logo" alt="company logo">
            </a>
            <div class="collapse navbar-collapse justify-content-end">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">SETTINGS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">OPS</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">USER MANAGEMENT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FIN</a>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-logout">
                            <div class="pic">
                                <img src="./assets/jpg/user.jpeg" alt="user" class="img-fluid" />
                            </div>
                            <div class="my_label">
                                <i class="bi bi-box-arrow-right fs-5"></i>
                                <span class="ms-1">Sign Out</span>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    </header>
    <main>
    <section id="tabs_layout">
        <div class="container-fluid my_custom_container">
            <div class="row justify-content-center">
                <div class="col-lg-12">
                    <ul class="nav nav-tabs justify-content-center border-0" role="tablist" id="myTab">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link fw-bold rounded-0 active" id="home-tab" data-bs-toggle="tab"
                                data-bs-target="#home-tab-pane" type="button" role="tab"
                                aria-controls="home-tab-pane" aria-selected="true">
                                <i class="bi bi-airplane-fill"></i>
                                <span class="ms-1">FLIGHTS</span>
                                <div class="arrow-down"></div>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link fw-bold rounded-0" id="hotel-tab" data-bs-toggle="tab"
                                data-bs-target="#hotel-tab-pane" type="button" role="tab"
                                aria-controls="hotel-tab-pane" aria-selected="false">
                                <i class="bi bi-building"></i>
                                <span class="ms-1">HOTELS</span>
                                <div class="arrow-down"></div>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link fw-bold rounded-0" id="activities-tab" data-bs-toggle="tab"
                                data-bs-target="#activities-tab-pane" type="button" role="tab"
                                aria-controls="activities-tab-pane" aria-selected="false">
                                <i class="bi bi-bicycle"></i>
                                <span class="ms-1">ACTIVITIES</span>
                                <div class="arrow-down"></div>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link fw-bold rounded-0" id="holidays-tab" data-bs-toggle="tab"
                                data-bs-target="#holidays-tab-pane" type="button" role="tab"
                                aria-controls="holidays-tab-pane" aria-selected="false">
                                <i class="bi bi-umbrella-fill"></i>
                                <span class="ms-1">HOLIDAYS</span>
                                <div class="arrow-down"></div>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link fw-bold rounded-0" id="cruise-tab" data-bs-toggle="tab"
                                data-bs-target="#cruise-tab-pane" type="button" role="tab"
                                aria-controls="cruise-tab-pane" aria-selected="false">
                                <i class="bi bi-train-freight-front-fill"></i>
                                <span class="ms-1">CRUISE</span>
                                <div class="arrow-down"></div>
                            </button>
                        </li>
                    </ul>
                    <div class="card border-warning">
                        <div class="card-body">
                            <div class="tab-content" id="myTabContent">
                                <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel"
                                    aria-labelledby="home-tab" tabindex="0">
                                    <div class="card border-0">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-12" id="main_selection">
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio"
                                                            name="flighttyperadio" id="onewayradio1">
                                                        <label class="form-check-label fw-bold" for="onewayradio1">
                                                            <h5 class="mb-0">ONE WAY</h5>
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio"
                                                            name="flighttyperadio" id="returnradio2" checked>
                                                        <label class="form-check-label fw-bold" for="returnradio2">
                                                            <h5 class="mb-0">RETURN</h5>
                                                        </label>
                                                    </div>
                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio"
                                                            name="flighttyperadio" id="multistop2">
                                                        <label class="form-check-label fw-bold" for="multistop2">
                                                            <h5 class="mb-0">MULTI STOP</h5>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12 my-4">
                                                    <p class="mb-0">
                                                        <a href="javascript:void()" class="text-dark">
                                                            <i class="bi bi-caret-down-fill"></i>
                                                            <span class="me-1">Additional Search Options</span>
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <ul class="addition_searches">
                                                        <li>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"
                                                                    id="option1" value="option1" checked>
                                                                <label class="form-check-label"
                                                                    for="option1">Preferred
                                                                    Airline</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"
                                                                    id="option2" value="option2">
                                                                <label class="form-check-label" for="option2">Select
                                                                    Fare
                                                                    Type</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"
                                                                    id="option3" value="option3">
                                                                <label class="form-check-label" for="option3">Markup
                                                                    (in
                                                                    %)
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"
                                                                    id="option4" value="option4">
                                                                <label class="form-check-label"
                                                                    for="option4">Suppliers</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"
                                                                    id="option5" value="option5">
                                                                <label class="form-check-label" for="option5">Direct
                                                                    Flights</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"
                                                                    id="option6" value="option6">
                                                                <label class="form-check-label"
                                                                    for="option6">Refundable
                                                                    fares
                                                                    only.</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"
                                                                    id="option7" value="option7">
                                                                <label class="form-check-label"
                                                                    for="option7">Alliance
                                                                    Airlines</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"
                                                                    id="option8" value="option8">
                                                                <label class="form-check-label"
                                                                    for="option8">Flexible
                                                                    Dates
                                                                    +/-3</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"
                                                                    id="option9" value="option9">
                                                                <label class="form-check-label" for="option9">Select
                                                                    Flights
                                                                    Separately
                                                                    <sup data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Tooltip info goes here on hover"><i
                                                                            class="bi bi-info-circle-fill"></i></sup>
                                                                </label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"
                                                                    id="option10" value="option10">
                                                                <label class="form-check-label"
                                                                    for="option10">Currency -
                                                                    Dropdown.</label>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div class="form-check">
                                                                <input class="form-check-input" type="checkbox"
                                                                    id="option11" value="option11">
                                                                <label class="form-check-label" for="option11">Split
                                                                    Ticketing
                                                                    <sup data-bs-toggle="tooltip"
                                                                        data-bs-placement="top"
                                                                        title="Tooltip info goes here on hover"><i
                                                                            class="bi bi-info-circle-fill"></i></sup>
                                                                </label>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="hotel-tab-pane" role="tabpanel"
                                    aria-labelledby="hotel-tab" tabindex="1">
                                    <h1 class="py-5">Hotels page coming soon</h1>
                                </div>
                                <div class="tab-pane fade" id="activities-tab-pane" role="tabpanel"
                                    aria-labelledby="activities-tab" tabindex="2">
                                    <h1 class="py-5">Activate coming soon</h1>
                                </div>
                                <div class="tab-pane fade" id="holidays-tab-pane" role="tabpanel"
                                    aria-labelledby="holidays-tab" tabindex="3">
                                    <h1 class="py-5">Holidays coming soon</h1>
                                </div>
                                <div class="tab-pane fade" id="cruise-tab-pane" role="tabpanel"
                                    aria-labelledby="cruise-tab" tabindex="4">
                                    <h1 class="py-5">Cruise coming soon</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="recentsearch">
        <div class="container-fluid my_custom_container">
            <div class="row justify-content-center">
                <div class="col-sm-12 my-2">
                    <h6 class="text-dark mt-3 fw-bold">RECENT SEARCHES</h5>
                        <div class="card border-warning">
                            <div class="card-body">
                                <ul>
                                    <li>
                                        <h4>
                                            <i class="bi bi-airplane-fill"></i>
                                            <span class="ms-1">DAR - ZNZ</span>
                                        </h4>
                                        <p>6 Oct - 19 Oct (1 Adult)</p>
                                    </li>
                                    <li>
                                        <h4>
                                            <i class="bi bi-airplane-fill"></i>
                                            <span class="ms-1">DAR - ZNZ</span>
                                        </h4>
                                        <p>6 Oct - 19 Oct (1 Adult)</p>
                                    </li>
                                    <li>
                                        <h4>
                                            <i class="bi bi-airplane-fill"></i>
                                            <span class="ms-1">DAR - ZNZ</span>
                                        </h4>
                                        <p>6 Oct - 19 Oct (1 Adult)</p>
                                    </li>
                                    <li>
                                        <h4>
                                            <i class="bi bi-airplane-fill"></i>
                                            <span class="ms-1">DAR - ZNZ</span>
                                        </h4>
                                        <p>6 Oct - 19 Oct (1 Adult)</p>
                                    </li>
                                    <li>
                                        <h4>
                                            <i class="bi bi-airplane-fill"></i>
                                            <span class="ms-1">DAR - ZNZ</span>
                                        </h4>
                                        <p>6 Oct - 19 Oct (1 Adult)</p>
                                    </li>
                                    <li>
                                        <h4>
                                            <i class="bi bi-airplane-fill"></i>
                                            <span class="ms-1">DAR - ZNZ</span>
                                        </h4>
                                        <p>6 Oct - 19 Oct (1 Adult)</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
    <section id="promositions">
        <div class="container-fluid my_custom_container">
            <div class="row justify-content-center my-2">
                <div class="col-lg-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <img src="assets/png/promo-img.png" alt="img" class="img-fluid">
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card h-100">
                        <div class="card-body">
                            <div class="main_img mb-3">
                                <img src="assets/png/flights-promo-img.png" alt="" class="img-fluid">
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <div class="my_image_container">
                                        <img src="assets/png/dubai.png" class="img-fluid" alt="">
                                        <h3 class="image-over-text">Discover Dubai</h3>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="my_image_container">
                                        <img src="assets/png/cairo.png" class="img-fluid" alt="">
                                        <h3 class="image-over-text">City Break Cairo</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="tables">
        <div class="container-fluid my_custom_container">
            <div class="row justify-content-center mt-3">
                <div class="col-lg-6 ">
                    <div class="card h-100">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-md-5 d-flex align-items-center mb-2 mb-sm-0">
                                    <h5 class="fw-bold mb-0">MY LATEST BOOKINGS</h5>
                                </div>
                                <div class="col-md-7 d-flex">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Bookings Reference"
                                            aria-label="Input group example" aria-describedby="basic-addon1">
                                        <span class="input-group-text" id="basic-addon1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path
                                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                                </path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center"
                                        style="width: 100px">
                                        <a href="javascript:void()"
                                            class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">View All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body py-0 table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Booking Ref</th>
                                        <th scope="col">Lead Pax</th>
                                        <th scope="col">Travel Date</th>
                                        <th scope="col">Booking Stage</th>
                                        <th scope="col">Module</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-primary"><a href="#">TWX169661197899</a></th>
                                        <td>John Deo</td>
                                        <td>19 Oct 2023</td>
                                        <td>
                                            <div class="alert alert-success m-0 text-center" role="alert">
                                                Completed
                                            </div>
                                        </td>
                                        <td>Flights</td>
                                    </tr>
                                    <tr>
                                        <td class="text-primary"><a href="#">TWX169661193445</a></th>
                                        <td>John Deo</td>
                                        <td>19 Oct 2023</td>
                                        <td>
                                            <div class="alert alert-primary m-0 text-center" role="alert">
                                                Pending </div>
                                        </td>
                                        <td>Flights</td>
                                    </tr>
                                    <tr>
                                        <td class="text-primary"><a href="#">TWX169661197899</a></th>
                                        <td>Mary Deo</td>
                                        <td>19 Oct 2023</td>
                                        <td>
                                            <div class="alert alert-danger m-0 text-center" role="alert">
                                                Cancelled
                                            </div>
                                        </td>
                                        <td>Flights</td>
                                    </tr>
                                    <tr>
                                        <td class="text-primary"><a href="#">TWX169661197899</a></th>
                                        <td>John Deo</td>
                                        <td>19 Oct 2023</td>
                                        <td>
                                            <div class="alert alert-success m-0 text-center" role="alert">
                                                Completed
                                            </div>
                                        </td>
                                        <td>Flights</td>
                                    </tr>
                                    <tr>
                                        <td class="text-primary"><a href="#">TWX169661197899</a></th>
                                        <td>John Deo</td>
                                        <td>19 Oct 2023</td>
                                        <td>
                                            <div class="alert alert-success m-0 text-center" role="alert">
                                                Completed
                                            </div>
                                        </td>
                                        <td>Flights</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="card h-100">
                        <div class="card-header">
                            <div class="row">
                                <div class="col-md-5 d-flex align-items-center mb-2 mb-sm-0">
                                    <h5 class="fw-bold mb-0">ON HOLD BOOKINGS</h5>
                                </div>
                                <div class="col-md-7 d-flex">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Bookings Reference"
                                            aria-label="Input group example" aria-describedby="basic-addon1">
                                        <span class="input-group-text" id="basic-addon1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                                fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                                <path
                                                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z">
                                                </path>
                                            </svg>
                                        </span>
                                    </div>
                                    <div class="d-flex justify-content-center align-items-center"
                                        style="width: 100px">
                                        <a href="javascript:void()"
                                            class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">View All</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body py-0 table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Booking Ref</th>
                                        <th scope="col">Lead Pax</th>
                                        <th scope="col">Travel Date</th>
                                        <th scope="col">Booking Stage</th>
                                        <th scope="col">Module</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="text-primary"><a href="#">TWX169661197899</a></th>
                                        <td>John Deo</td>
                                        <td>19 Oct 2023</td>
                                        <td>
                                            <div class="alert alert-success m-0 text-center" role="alert">
                                                Completed
                                            </div>
                                        </td>
                                        <td>Flights</td>
                                    </tr>
                                    <tr>
                                        <td class="text-primary"><a href="#">TWX169661193445</a></th>
                                        <td>John Deo</td>
                                        <td>19 Oct 2023</td>
                                        <td>
                                            <div class="alert alert-primary m-0 text-center" role="alert">
                                                Pending </div>
                                        </td>
                                        <td>Flights</td>
                                    </tr>
                                    <tr>
                                        <td class="text-primary"><a href="#">TWX169661197899</a></th>
                                        <td>Mary Deo</td>
                                        <td>19 Oct 2023</td>
                                        <td>
                                            <div class="alert alert-danger m-0 text-center" role="alert">
                                                Cancelled
                                            </div>
                                        </td>
                                        <td>Flights</td>
                                    </tr>
                                    <tr>
                                        <td class="text-primary"><a href="#">TWX169661197899</a></th>
                                        <td>John Deo</td>
                                        <td>19 Oct 2023</td>
                                        <td>
                                            <div class="alert alert-success m-0 text-center" role="alert">
                                                Completed
                                            </div>
                                        </td>
                                        <td>Flights</td>
                                    </tr>
                                    <tr>
                                        <td class="text-primary"><a href="#">TWX169661197899</a></th>
                                        <td>John Deo</td>
                                        <td>19 Oct 2023</td>
                                        <td>
                                            <div class="alert alert-success m-0 text-center" role="alert">
                                                Completed
                                            </div>
                                        </td>
                                        <td>Flights</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
    <section id="footer">
    <div class="container-fluid mt-4">
        <div class="row">
            <div class="col-sm-12">
                <div class="align-items-center bg-dark p-3 px-5 row text-white">
                    <div class="col-md-5">
                        <p class="mb-0">
                            Copyright © 2023 All Rights Reserved | Add Powered by <a href="#">PCT.</a>
                        </p>
                    </div>
                    <div class="col-md-1">
                        <img alt="iso-logo" src="assets/svg/iso-logo.svg" width="100%" height="60">
                    </div>
                    <div class="col-md-1">
                        <img alt="IATA-logo" src="assets/svg/IATA-logo.svg" width="100%" height="60">
                    </div>
                    <div class="col-md-5 text-end">
                        <img alt="we-accept-cards" src="assets/svg/we-accept-cards.svg" class="img-fluid"
                            style="height: 40px;">
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
    </React.Fragment>
  );
}

export default Home;
