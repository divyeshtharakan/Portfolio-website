import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.jpg";
import Toolstack from "./Toolstack";
import Education from "./Education";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <div
              style={{
                borderRadius: "15px", // Rounded corners
                overflow: "hidden",   // Ensures the image stays within the card
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional shadow for better appearance
                display: "flex", // Center the image
                justifyContent: "center", // Horizontally center the image
                alignItems: "center", // Vertically center the image
              }}
            >
              <img
                src={laptopImg}
                alt="about"
                className="img-fluid"
                style={{
                  width: "70%", // Reduce the width to half
                  height: "50%", // Reduce the height to half
                  objectFit: "contain", // Ensure the image maintains its aspect ratio
                  borderRadius: "15px", // Apply rounded corners to the image itself
                }}
              />
            </div>
          </Col>


        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
        <h1 className="project-heading">
       <strong className="purple">Education </strong>
        </h1>
        <Education />
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
