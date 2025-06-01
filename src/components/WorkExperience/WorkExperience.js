import React from "react";
import { Container, Row, Col} from "react-bootstrap";
import ExperienceCards from "./ExperienceCards";
import Particle from "../Particle";

function WorkExperience() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Work Experience</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here is an overview of my roles, highlighting my key contributions and responsibilities.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    {/* Intact Experience */}
                    <Col md={4} className="project-card">
                        <ExperienceCards
                            title="Software Engineer"
                            company="Persistent Systems"
                            duration="07/2022 - 06/2024"
                            description={"As a Software Engineer, I optimized AWS configurations to reduce API response time by 30% and enhance system uptime by 15%. I mitigated recurring database errors by 40% and improved Mean Time to Resolve (MTTR) by 25% through proactive log analysis. By refining system architecture, I increased deployment success rates by 20% and boosted system throughput by 35%. Additionally, I cut query latency by 50% and improved alert response time by 30%, significantly enhancing operational efficiency. My efforts reduced onboarding time by 40% and increased documentation usage by 60% within the team. I successfully delivered 95% of projects on time, meeting 98% of business requirements and achieving a 90% client satisfaction rate."}
                        />
                    </Col>

                    {/* Intact Experience */}
                    <Col md={4} className="project-card">
                        <ExperienceCards
                            title="Software Engineering Intern"
                            company="Persistent Systems"
                            duration="01/2022 - 06/2022"
                            description={"As a **Software Engineering Intern**, I monitored security events using SIEM tools like Microsoft Sentinel, improving threat detection efficiency by 40% while reducing false positives and enhancing real-time security monitoring. I assisted in incident triage and root cause analysis, reducing incident response time by 30% and ensuring faster containment and mitigation of security threats. Additionally, I ensured compliance with security policies and GRC frameworks, improving reporting efficiency by 35% and streamlining risk assessment and security posture enhancements."}
                        />
                    </Col>
                </Row>
                
                
            </Container>
        </Container>
    );
}

export default WorkExperience;
