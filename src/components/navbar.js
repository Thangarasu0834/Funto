import React, { useState, useEffect } from "react";
import "../App.css";

import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar_top() {
  const [NavbarSize, setNavbarSize] = useState("6rem");
  const [NavbarColor, setNavbarColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 20
      ? setNavbarColor("#1f0757")
      : setNavbarColor("transparent");
    window.scrollY > 10 ? setNavbarSize("6rem") : setNavbarSize("6rem");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="lg"
        style={{
          backgroundColor: NavbarColor,
          height: NavbarSize,
          transition: "all 1s",
        }}
        className="boot"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img src={require("./assets/images/logo.png")} alt="img" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <div className="dropdown">
                <button className="dropbtn">
                  <span className="change-icon">
                    Home
                    <i class="fa  fa-angle-down mx-1"></i>
                    <i class="fa  fa-angle-up mx-1"></i>
                  </span>
                </button>
                <div className="dropdown-content">
                  <ul>
                    <li>
                      {" "}
                      <Link to={"/"}>Home Variation 1</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={"/"}>Home Variation 2</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="dropdown">
                <button className="dropbtn">
                  <span className="change-icon">
                    Explore
                    <i class="fa  fa-angle-down mx-1"></i>
                    <i class="fa  fa-angle-up mx-1"></i>
                  </span>
                </button>
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <Link to={"/"}>Explore 1</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Explore 2</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Featured Drops</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Live Auctions</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Collections</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Top Seller</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Top Buyer</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Item Details</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="dropdown">
                <button class="dropbtn">
                  <span className="change-icon">
                    Admin
                    <i class="fa  fa-angle-down mx-1"></i>
                    <i class="fa  fa-angle-up mx-1"></i>
                  </span>
                </button>
                <div className="dropdown-content">
                  <ul>
                    <li>
                      <Link to={"/"}>Dashboard</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Live Bids</Link>
                    </li>
                    <li>
                      <Link to={"/"}>My Collection</Link>
                    </li>
                    <li>
                      <Link to={"/"}>My Wallet</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Notifications</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Settings</Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="dropdown">
                <button class="dropbtn">
                  <span className="change-icon">
                    Pages
                    <i class="fa  fa-angle-down mx-1  "></i>
                    <i class="fa  fa-angle-up mx-1"></i>
                  </span>
                </button>
                <div className="dropdown-content">
                  <ul class="ft-dd-menu">
                    <li>
                      <Link to={"/"}>Activity</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Ranking</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Create New Items</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Connect Wallet</Link>
                    </li>
                    <li>
                      <Link to={"/"}>Author Profile</Link>
                    </li>
                    <li>
                      <div class="dropdown_left">
                        <button class="dropbtn1">
                          <span className="change-icon">
                            Authentification
                            <i class="fa  fa-angle-right "></i>
                            <i class="fa  fa-angle-left "></i>
                          </span>
                        </button>
                        <div className="dropdown_left-content">
                          <ul>
                            <li>
                              <Link to={"/"}>Register</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Login</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Forget Password</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="dropdown_left">
                        <button class="dropbtn1">
                          <span className="change-icon">
                            Blog
                            <i class="fa  fa-angle-right "></i>
                            <i class="fa  fa-angle-left "></i>
                          </span>
                        </button>
                        <div className="dropdown_left-content">
                          <ul>
                            <li>
                              <Link to={"/"}>Blog</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Blog Details</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="dropdown_left">
                        <button class="dropbtn1">
                          <span className="change-icon">
                            Others
                            <i class="fa  fa-angle-right "></i>
                            <i class="fa  fa-angle-left "></i>
                          </span>
                        </button>
                        <div className="dropdown_left-content">
                          <ul>
                            <li>
                              <Link to={"/"}>About Us</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Contact</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Coming Soon</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Newsletter</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Privacy Policy</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Terms</Link>
                            </li>
                            <li>
                              <Link to={"/"}>404</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="dropdown_left">
                        <button class="dropbtn1">
                          <span className="change-icon">
                            Help Center
                            <i class="fa  fa-angle-right "></i>
                            <i class="fa  fa-angle-left "></i>
                          </span>
                        </button>
                        <div className="dropdown_left-content">
                          <ul>
                            <li>
                              <Link to={"/"}>Help Home</Link>
                            </li>
                            <li>
                              <Link to={"/"}>All Questions</Link>
                            </li>
                            <li>
                              <Link to={"/"}>Question Details</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="dropdown_left">
                        <button class="dropbtn1">
                        
                          <span className="change-icon">
                        <Link to={"/"}>  Help Center</Link>
                           
                          </span>
                        </button>

                      </div>





            </Nav>
            <div class="search position-relative d-flex align-items-center">
                <input  type="text" placeholder="Search"/><i class="fa  fa-search"></i>
              </div>
              
              <div class="dropdown mx-2">
             
                        <button  className="dropbtn btn btn-sm dots">
                        <i class="fa-solid fa-ellipsis"></i>
                        </button>
                        <div className="dropdown-content">
                  <ul>
                    <li>
                      {" "}
                      <Link to={"/"}><i class="fa-solid fa-gauge-min"></i> Dashboard</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={"/"}>Collections</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={"/"}><i class="fa-solid fa-gauge-min"></i> Notifications</Link>
                    </li>
                    <li>
                      {" "}
                      <Link to={"/"}>Settings</Link>
                    </li>
                  </ul>
                </div>
              
                        </div>
                        <button className=" create_btn   bg-warning">Create</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
