import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey folks, I am <span className="purple">Divyesh Tharakan </span>
            from <span className="purple"> Pune,India.</span>
            <br />
            I have previously worked as a Software Engineer at Persistent Systems, Pune where I contributed to the development of configurations of a few AWS services and closely monitored the logs at the production level. Also assisted the senior team in automating day-to-day tasks in Python.
            Also interned with them where I gained knowlegable insights about SIEM, OWASP and other security tools.
            <br />
            I am currently pursuing my Masters in Information Security (MTech) from VIT, Vellore, where I am learning about cybersecurity, including various tools and techniques used in the field, and also in courses such as Penetration Testing and Vulnerability Assessment to enhance my security analysis skills.
            <br />
            <br />
            Beyond my professional work, I enjoy engaging in various activities that bring me joy and fulfillment:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing and Painting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Whitespace is like air: it is necessary for the design to breathe."{" "}
          </p>
          <footer className="blockquote-footer">Wojciech Zieliński</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
