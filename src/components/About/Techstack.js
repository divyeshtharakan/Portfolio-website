import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  SiPython, SiCplusplus, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, 
  SiHtml5, SiCss3, SiJavascript, SiAmazonaws, SiMicrosoftazure, SiGooglecloud, 
  SiSplunk, SiKibana, SiMongodb, SiMysql, SiPowerbi, SiTableau, SiLooker, 
  SiJira, SiGithub, SiGit, SiConfluence, SiTerraform, SiMicrosoft
} from "react-icons/si"; // Replaced SiMicrosoftdefender with SiMicrosoft

import { DiMongodb } from "react-icons/di"; 

import { FaJava } from "react-icons/fa";  // ✅ Correct import

function TechTools() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming */}
      <Col xs={4} md={2} className="tech-icons"> <SiPython /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <FaJava /> </Col>  {/* ✅ Fixed */}
      
      {/* Machine Learning */}
      <Col xs={4} md={2} className="tech-icons"> <SiNumpy /> </Col>

      {/* Web Technologies */}
      <Col xs={4} md={2} className="tech-icons"> <SiHtml5 /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <SiCss3 /> </Col>
      

      {/* Cloud Technologies */}
      <Col xs={4} md={2} className="tech-icons"> <SiAmazonaws /> </Col>
      

      {/* Threat Detection & Monitoring */}
      <Col xs={4} md={2} className="tech-icons"> <SiSplunk /> </Col>
      
      

      {/* Data Frameworks */}
      <Col xs={4} md={2} className="tech-icons"> <SiMysql /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <SiMongodb /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <SiPowerbi /> </Col>
      

      {/* Version Control & Collaboration */}
      <Col xs={4} md={2} className="tech-icons"> <SiGit /> </Col>
      <Col xs={4} md={2} className="tech-icons"> <SiGithub /> </Col>
      
      <Col xs={4} md={2} className="tech-icons"> <SiConfluence /> </Col>

      {/* Infrastructure as Code */}
     
    </Row>
  );
}

export default TechTools;
