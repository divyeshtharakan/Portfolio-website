import React from "react";
import Card from "react-bootstrap/Card";

function ExperienceCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.company}</Card.Subtitle>
                <Card.Text>
                 {props.duration}
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ExperienceCards;
