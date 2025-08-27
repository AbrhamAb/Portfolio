import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I'm <span className="purple">Abrham Abebaw </span>
            from <span className="purple"> Bahir Dar, Ethiopia.</span>
            <br />
            I'm a Software Engineering student at Bahir Dar University and also part of the ALX Africa Backend Engineering program, 
            where I collaborate with an amazing community of African developers.
            <br />
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Editing photos and videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching football
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing chess
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every challenge is a chance to build something smarter!"{" "}
          </p>
          <footer className="blockquote-footer">Abrham A.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
