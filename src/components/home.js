import React,{useEffect}from "react";
import Navbar_top from "./navbar";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./footer";

export default function Home() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <>
      <Navbar_top />
      <section className="sec_1">
        <Container>
          <Row>
            <Col xl={6} lg={6} md={10} sm={10}>
              <div class="welcome-content  mt-5">
                <h2
                  data-aos="fade-up"
                  data-aos-duration="750"
                  data-aos-delay="500"
                  class="aos-init aos-animate"
                >
                  Build an excellent NFTs website with Funto.
                </h2>
                <p
                  class="mb-4 aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="750"
                  data-aos-delay="800"
                >
                  It's crafted with the latest trend of design &amp; coded with
                  all modern approaches.
                </p>
                <div
                  class="hero-btn-group aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="750"
                  data-aos-delay="1200"
                >
                  <a class="btn btn-primary rounded-pill mt-3 me-3">
                    Explore Now<i class="ms-2 bi bi-arrow-right"></i>
                  </a>
                  <a class="btn btn-minimal hover-primary mt-3">
                    <i class="me-2 bi bi-pie-chart-fill"></i>Go Dashboard
                  </a>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={10} sm={10}>
              <div
                class="welcome-thumb aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="750"
                data-aos-delay="500"
              >
                <img
                  src={require("./assets/images/sliderimage.png")}
                  alt="welcome_img "
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
          <div className="p-4"></div>
          <hr className="mt-5" />

          <div className="p-4"></div>
          <Row className="justify-content-center mt-5" data-aos="flip-left" data-aos-duration="750" data-aos-delay="300">
            <div class="section-heading text-center">
              <h2>Demo Pages</h2>
              <p>
                There are 35+ beautiful inner pages, two beautiful home pages{" "}
                <br /> for your awesome NFTs websites.
              </p>
            </div>
          </Row>
          <Row className="justify-content-center text-center" data-aos="zoom-in" data-aos-duration="750" data-aos-delay="300">
            <Col xl={6} className="text-center">
              <ul class="nav nav-pills mx-5" role="tablist">
                <li class="nav-item">
                  <a class="nav-link active" data-bs-toggle="pill" href="#all">
                    All
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="pill" href="#home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="pill" href="#dashboard">
                    Dashboard
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="pill" href="#inner">
                    Inner Page
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="pill" href="#blog">
                    Blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" data-bs-toggle="pill" href="#others">
                    Others
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <div class="container mt-3">
            <div class="tab-content">
                {/* All...................... */}
              <div id="all" class="container tab-pane active py-4 mt-5" data-aos="zoom-in-right" data-aos-duration="750" data-aos-delay="300">
                <Row className="justify-content-center mt-3">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/explore1.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Home One</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/home2.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Home Two</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/explore1.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Explore One</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/explore1.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Explore two</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/featured.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Feautured Items</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/auctions.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Live Auctions</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/collections.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Collections</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/top-seller.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Top Sellers</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/top-seller.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Top Buyers</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/item-details.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Item Details</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/admin.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Dashboard</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/admin-bids.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Live Bids</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/admin-collection.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">My collections</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/admin-wallet.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">My Wallet</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/admin-notifications.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Notifications</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/admin-settings.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Setting</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/activity.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Activity</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/ranking.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Ranking</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/create.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Create New</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/wallet.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Connect Wallet</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/author.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Author</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/login.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Login</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/register.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Register</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/forget.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Forget Password</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/blog.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Blog</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/blog-details.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Blog Details</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/about.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">About us</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/contact.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Contact</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/cs.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">comming soon</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/newsletter.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">news letter</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/privacy.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Privacy</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/terms.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Terms</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/404.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">404</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/help1.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Help Center</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/help2.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Help Question</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/help3.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Question Details</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Homme....................... */}
              <div id="home" class="container tab-pane "    >
                <Row className="justify-content-center mt-5 py-5" data-aos="flip-left"
    data-aos-duration="750" data-aos-delay="300" >
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/explore1.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Home One</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/home2.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Home Two</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>

              {/* Dashboard..................... */}
              <div id="dashboard" class="container tab-pane fade">
                <Row className="justify-content-center mt-5 py-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/admin.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Dashboard</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/admin-bids.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Live Bids</h5>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/admin-collection.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">My collections</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/admin-collection.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">My collections</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/admin-notifications.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Notifications</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/admin-settings.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Setting</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="p-3"></div>
              </div>

              {/* inner page...............................    */}
              <div id="inner" class="container tab-pane fade">
                <Row className="justify-content-center mt-5 py-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/explore1.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Explore One</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/explore1.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Explore two</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/featured.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Feautured Items</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center  ">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/auctions.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Live Auctions</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/collections.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Collections</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/top-seller.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Top Sellers</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5 ">
                <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/top-seller.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Top Buyers</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/item-details.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Item Details</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/activity.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Activity</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-5 ">
                <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/ranking.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Ranking</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/create.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Create New</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/wallet.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Connect Wallet</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4} className="py-4">
                    <div class="card border text-center ">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/author.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Author</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div id="blog" class="container tab-pane fade">
              <Row className="justify-content-center mt-5 py-5">
              <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/blog.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Blog</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/blog-details.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Blog Details</h5>
                      </div>
                    </div>
                  </Col>

                </Row>
              </div>

              {/* others........................................ */}
              <div id="others" class="container tab-pane fade">
              <Row className="justify-content-center mt-5 pt-5">
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/login.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Login</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/register.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Register</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/forget.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Forget Password</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/about.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">About us</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/contact.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Contact</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/cs.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">comming soon</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/newsletter.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">news letter</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/privacy.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Privacy</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/terms.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Terms</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row className="justify-content-center mt-3">
                <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/404.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">404</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/help1.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Help Center</h5>
                      </div>
                    </div>
                  </Col>
                  <Col xl={4}>
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/help2.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Help Question</h5>
                      </div>
                    </div>
                  </Col>

                  <Col xl={4} className="mt-3">
                    <div class="card border text-center">
                      <div class="card-body">
                        <a class="d-block" href="home-1.html" target="_blank">
                          <img
                            className="rounded img-fluid"
                            src={require("./assets/images/help3.png")}
                            alt=""
                          />
                        </a>
                        <h5 class="mb-0 mt-3">Question Details</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </section>
      {/* section.......buy */}
      <section>
        <Container className="py-5">
        <div class="cta-text bg-gradient p-4 p-sm-5 bg-primary aos-init aos-animate rounded" data-aos="zoom-in" data-aos-duration="750" data-aos-delay="300">
            <Row>
                <Col xl={9} sm={11}>
                <h1 class="mb-3 mb-md-0 aos-init aos-animate" data-aos="fade-up" data-aos-duration="750" data-aos-delay="600">Beautifully designed, SEO-friendly, and easy to use. Create your NFTs website today!</h1>
                </Col>
                <Col xl={3}>
                <div class="text-md-end mt-5"><a class="btn btn-warning rounded-pill aos-init aos-animate" data-aos="zoom-in" data-aos-duration="750" data-aos-delay="900">Buy Now</a></div>

                </Col>
            </Row>

</div>
        </Container>
     
      </section>
      {/* Languages................... */}
      <section>
<Container>
    <Row>
        <Col xl={3}>
        <div class="card about-card shadow-sm aos-init aos-animate" data-aos="fade-up" data-aos-duration="750" data-aos-delay="200">
              <div class="card-body py-5">
                <div class="icon bg-info">
                    <img src={require("./assets/images/bootstrap.png")} className="img-fluid" alt=""/></div>
                <h5 class="mb-0 text-center">Bootstrap 5.1.3</h5>
              </div>
            </div>
        </Col>
        
        <Col xl={3}>
        <div class="card about-card shadow-sm aos-init aos-animate" data-aos="fade-up" data-aos-duration="750" data-aos-delay="200">
              <div class="card-body py-5">
                <div class="icon bg-primary">
                    <img src={require("./assets/images/tool.png")} className="img-fluid" alt=""/></div>
                <h5 class="mb-0 text-center">Modern Design</h5>
              </div>
            </div>
        </Col>
        <Col xl={3}>
        <div class="card about-card shadow-sm aos-init aos-animate" data-aos="fade-up" data-aos-duration="750" data-aos-delay="200">
              <div class="card-body py-5">
                <div class="icon bg-primary">
                    <img src={require("./assets/images/js.png")} className="img-fluid" alt=""/></div>
                <h5 class="mb-0 text-center">Vannila Javascript</h5>
              </div>
            </div>
        </Col>
        <Col xl={3}>
        <div class="card about-card shadow-sm aos-init aos-animate" data-aos="fade-up" data-aos-duration="750" data-aos-delay="200">
              <div class="card-body py-5">
                <div class="icon bg-light">
                    <img src={require("./assets/images/dashboard.png")} className="img-fluid" alt=""/></div>
                <h5 class="mb-0 text-center">Dashboard</h5>
              </div>
            </div>
        </Col>
        

    </Row>
    <Row className="py-5">
        <Col xl={3}>
        <div class="card about-card shadow-sm aos-init aos-animate" data-aos="fade-up" data-aos-duration="750" data-aos-delay="200">
              <div class="card-body py-5">
                <div class="icon bg-light">
                    <img src={require("./assets/images/sass.png")} className="img-fluid" alt=""/></div>
                <h5 class="mb-0 text-center">Scss</h5>
              </div>
            </div>
        </Col>
        
        <Col xl={3}>
        <div class="card about-card shadow-sm aos-init aos-animate" data-aos="fade-up" data-aos-duration="750" data-aos-delay="200">
              <div class="card-body py-5">
                <div class="icon bg-danger">
                    <img src={require("./assets/images/responsive-design.png")} className="img-fluid" alt=""/></div>
                <h5 class="mb-0 text-center">Responsive Design</h5>
              </div>
            </div>
        </Col>
        <Col xl={3}>
        <div class="card about-card shadow-sm aos-init aos-animate" data-aos="fade-up" data-aos-duration="750" data-aos-delay="200">
              <div class="card-body py-5">
                <div class="icon bg-info">
                    <img src={require("./assets/images/pug.png")} className="img-fluid" alt=""/></div>
                <h5 class="mb-0 text-center">PUG</h5>
              </div>
            </div>
        </Col>
        <Col xl={3}>
        <div class="card about-card shadow-sm aos-init aos-animate" data-aos="fade-up" data-aos-duration="750" data-aos-delay="200">
              <div class="card-body py-5">
                <div class="icon bg-warning">
                    <img src={require("./assets/images/bulb.png")} className="img-fluid" alt=""/></div>
                <h5 class="mb-0 text-center">Light Mode </h5>
              </div>
            </div>
        </Col>
        

    </Row>

</Container>
<div class="dark-light-wrapper aos-init aos-animate" data-aos="zoom-in" data-aos-duration="750" data-aos-delay="200">
      <div class="container">
        <div class="d-flex align-items-center justify-content-between">
          <h5 class="mb-0 text-white aos-init aos-animate" data-aos="fade-up" data-aos-duration="750" data-aos-delay="500">Light mode is available!</h5>
          {/* <!-- Switch --> */}
          <div class="dark-light-mode aos-init aos-animate" data-aos="fade-up" data-aos-duration="750" data-aos-delay="800">
            <input id="darkLightSwitch" type="checkbox"/>
            <label class="shadow" for="darkLightSwitch">Toggle</label>
          </div>
        </div>
      </div>
    </div>
      </section>
      <Footer/>
    </>
  );
}
