import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGithub,
  SiVisualstudiocode,
  SiWindows,
  SiUbuntu,
  SiJupyter,
  SiGit,
} from "react-icons/si";
import { FaShieldAlt, FaLock } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><SiGithub /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiVisualstudiocode /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJupyter /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiWindows /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiUbuntu /></Col>

      
    </Row>
  );
}
export default Toolstack;
