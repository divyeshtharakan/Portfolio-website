import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar1.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMediumSquare,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            {/* Experienced software developer with a focus in backend development, building server-side applications. Currently working at
SAP Labs transforming requirements into efficient solutions. Previously worked in Mckinsey & Company */}
            <p className="home-about-body">
              I'm Divyesh Tharakan, a cybersecurity enthusiast passionate about threat detection, risk mitigation, and building robust security solutions to protect digital assets.
              I thrive on solving complex cybersecurity challenges which enhances my approach to penetration testing, threat analysis, and security strategy development.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> OWASP Framework, Penetration Testing, Nmap, and SIEM. </b>
              </i>
              <br />

              <br />
              I focus on developing 
              <i>
                <b className="purple"> robust cybersecurity solutions </b> and building secure, scalable systems to safeguard data and mitigate threats.

              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{
                width: "250px", // Set the desired width
                height: "300px", // Set the desired height
                objectFit: "cover", // Ensures the image fits nicely
              }} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="www.linkedin.com/in/divyesh-tharakan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/divyesh-tharakan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
