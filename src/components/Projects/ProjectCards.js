import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Footer>{props.date}</Card.Footer>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.ghLink ? (<Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>) : <></>}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        {/* Skills Display */}
        <div style={{ marginTop: "15px"}}>
          <div className="d-flex flex-wrap">
            {props.skills.map((skill, index) => (
              <span
                key={index}
                style={{
                  backgroundColor: "#6f42c1",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "15px",
                  margin: "5px",
                  fontSize: "0.85rem",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
