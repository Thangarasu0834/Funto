import React,{useRef,useEffect}from "react";
import { Container,Col,Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


export default function Footer (){

    return(
        <>
        <div className="footer-area ">
        <Container>
            <Row>
                <Col xl={6}>
                <div class="footer-widget-area mb-70 pe-lg-4 pe-xl-5 me-lg-4 me-xl-5 border-end mt-5">
                    <a class="d-block mb-4" href="index.html"><img class="light-logo" src={require("./assets/images/logo.png")} alt=""/>
                    <img class="dark-logo" src="img/core-img/logo-white.png" alt=""/></a>
              <p>It's crafted with the latest trend of design &amp; coded with all modern approaches.</p>
              <p class="mb-0">Call: +123 456 789 <br/> Email: help@example.com</p>
              {/* <!-- Social Icon --> */}
              <h5 class="mt-4 mb-3">Join the community</h5>
             
              <div class="footer-social-icon d-flex align-items-center flex-wrap">
      
                <a href="#"  data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Facbook" aria-label="Facbook"><img src={require('./assets/images/svg/icons8-facebook.png')} alt=""/></a>
                <a href="#" className="mx-3" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Twitter" aria-label="Twitter"><img src={require('./assets/images/svg/icons8-twitter.png')} alt=""/></a>
                <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Instagram" aria-label="Instagram"><img src={require('./assets/images/svg/icons8-instagram.png')} alt=""/></a>
                <a href="#" className="mx-3"data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Slack" aria-label="Slack"><img src={require('./assets/images/svg/icons8-slack.png')} alt=""/></a>
                <a href="#" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Youtube" aria-label="Youtube"><img src={require('./assets/images/svg/icons8-player.png')} alt=""/></a></div>
              {/* <!-- Newsletter Form --> */}
              <div class="newsletter-form mt-5 me-5">
                <form class="d-flex align-items-stretch" action="#">
                  <input class="form_control" type="email" placeholder="Enter email" />
                  <button class="btn btn-warning bg-warning px-3" type="submit">Subscribe</button>
                </form>
              </div>
              </div>

            </Col>
            <Col xl={6} className="py-5">
            <div class="row g-4">
              <div class="col-6 col-sm-4">
                <div class="footer-widget-area mb-70">
                  <h5 class="mb-4">Explore</h5>
                  <ul class="list-unstyled mb-0">
                    <li><a href="featured-items.html">Featured Drops</a></li>
                    <li><a href="live-bidding.html">Live Auctions</a></li>
                    <li><a href="collections.html">Collections</a></li>
                    <li><a href="top-seller.html">Top Seller</a></li>
                    <li><a href="top-buyer.html">Top Buyer</a></li>
                    <li><a href="item-details.html">Item Details</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-6 col-sm-4">
                <div class="footer-widget-area mb-70">
                  <h5 class="mb-4">Marketplace</h5>
                  <ul class="list-unstyled mb-0">
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Cards</a></li>
                    <li><a href="#">Collectibles</a></li>
                    <li><a href="#">Domain</a></li>
                    <li><a href="#">Photos</a></li>
                    <li><a href="#">Sports</a></li>
                    <li><a href="#">Videos</a></li>
                  </ul>
                </div>
              </div>
              <div class="col-6 col-sm-4">
                <div class="footer-widget-area mb-70">
                  <h5 class="mb-4">Company</h5>
                  <ul class="list-unstyled mb-0">
                    <li><a href="#">Forum</a></li>
                    <li><a href="#">Licences</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Conditions</a></li>
                    <li><a href="#">Privacy</a></li>
                  </ul>
                </div>
              </div>
            </div>
            </Col>
            </Row>
            </Container>
            <Container>
            <div class="container py-5">
        <div class="copywrite-wrapper d-lg-flex align-items-lg-center justify-content-lg-between">
         
          <div class="copywrite-text text-center text-lg-start mb-3 mb-lg-0">
            <p class="mb-0">2022 © All rights reserved by <a href="https://themeforest.net/user/designing-world/portfolio" target="_blank" rel="noreferrer">Designing World</a></p>
          </div>
     
          <div class="footer-nav">
            <ul class="mb-0 d-flex flex-wrap justify-content-center list-unstyled">
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="terms.html">Terms &amp; Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
            </Container>
        </div>

        </>
    )
}