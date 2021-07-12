import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="py-3" style={{ backgroundColor: "#101010",color:"#FFFFFF" }}>
      <Container>
        <Row>
          <Col lg={6} xs={12}>
            <h2 className="mb-5 text-center text-sm-start">audiophile</h2>

            <p className="mb-5">Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.</p>

            <p>Copyright 2021. All Rights Reserved</p>
          </Col>
          <Col lg={6} xs={12}>
            <ul className="footer-nav d-flex flex-column flex-md-row justify-content-sm-evenly justify-content-center text-center" style={{listStyleType:"none"}}>
                <li className="footer-link my-2">Home</li>
                <li className="footer-link my-2">Headphones</li>
                <li className="footer-link my-2">Speakers</li>
                <li className="footer-link my-2">Earphones</li>
            </ul>

            <br className="d-none d-sm-block"/>
            <br className="d-none d-sm-block"/>
            <br className="d-none d-sm-block"/>
            <br/>
            <div className="d-flex ali flex-row justify-content-center justify-content-md-end text-center  fs-4">
                <i className="footer-link fab fa-facebook-square ms-4"></i>
                <i className="footer-link fab fa-twitter ms-4"></i>
                <i className="footer-link fab fa-instagram ms-4"></i>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
