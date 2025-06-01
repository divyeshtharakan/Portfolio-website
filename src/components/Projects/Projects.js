import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* ✅ Opened <Row> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Training and Placement Management Desktop Application"
              description="An offline desktop application designed to streamline the placement process for students and faculty. The system provides a personalized dashboard with various functionalities, ensuring a seamless experience for managing student profiles and job opportunities."
              skills={["Java", "MySQL", "EclipseIDE"]}
              ghLink={"https://github.com/divyeshtharakan/Training-and-Placement-Cell"}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Power-BI-HR-Workforce-Analysis"
              description="This project focuses on analyzing HR workforce data to uncover valuable insights into employee demographics, job roles, satisfaction levels, compensation, and attrition. By examining key metrics such as age, department, salary, work-life balance, training participation, and environment satisfaction, the analysis aims to identify factors influencing employee retention and performance."
              skills={["PowerBI", "DAX", "Python", "SQL", "Excel", "Sharepoint"]}
              ghLink={"https://github.com/divyeshtharakan/Power-BI-HR-Workforce-Analysis"}
            />
          </Col>
        </Row> 

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              title="Crowd Counting using CNN"
              description="Increase in population all over the world has opened a pathway to large gatherings for many causes. It might be grand openings of hotels and institutions, award ceremony, local football matches, riots and much more. Analysing the crowd formation before is quite a difficult task and therefore would not come under control. Due to this, many accidents have occurred in the past taking away innocent lives. The technique, which is Crowd Counting, is an approach to analyse and detect the crowd, that is, to estimate the number of people gathered in a certain area. In this paper, a CNN model is presented to estimate the count of a particular crowd. We have implemented the VGG-16 model for a deep layered image classification and henceforth a better understanding of each image. Shanghai Crowd Counting Dataset has been used which contains more than 400 images for training and testing"
              skills={["Java", "MySQL", "EclipseIDE"]}
              ghLink={"https://github.com/divyeshtharakan/Crowd-Counting-using-CNN"}
            />
          </Col>
          
        </Row>

        {/* ✅ Closed <Row> properly */}

        {/* Commented-out JSX correctly */}
        {/*
        <Col md={4} className="project-card">
          <ProjectCard
            title="Tableau- Amazon Shipping Analytics"
            description="Developed an interactive dashboard to track outstanding orders, shipping destinations, and monthly trends, providing real-time insights to optimize logistics and improve decision-making. Using data from Excel files, the dashboard allows the Shipping Manager to filter by month and year, offering visibility into outstanding orders and shipping priorities, enhancing operational efficiency."
            skills={["Tableau", "Microsoft Excel", "SharePoint"]}
            ghLink={"https://github.com/ShivrajRameshPatil/Tableau-Amazon-Shipping-Analytics"}
          />
        </Col>
        */}

      </Container>
    </Container>
  );
}

export default Projects;
