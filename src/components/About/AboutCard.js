import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
<<<<<<< HEAD
            Hi, I'm <span className="purple">Abrham Abebaw </span>
            from <span className="purple"> Bahir Dar, Ethiopia.</span>
            <br />
            I'm a Software Engineering student at Bahir Dar University and also part of the ALX Africa Backend Engineering program, 
            where I collaborate with an amazing community of African developers.
            <br />
            
=======
            Hi Everyone, I am <span className="purple">Soumyajit Behera </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as a software developer at Juspay.
            <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra.
>>>>>>> 015769312e51083fc0c627fd66e07b25c89b5217
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
<<<<<<< HEAD
              <ImPointRight /> Editing photos and videos
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching football
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing chess
=======
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
>>>>>>> 015769312e51083fc0c627fd66e07b25c89b5217
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
<<<<<<< HEAD
            "Every challenge is a chance to build something smarter!"{" "}
          </p>
          <footer className="blockquote-footer">Abrham A.</footer>
=======
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
>>>>>>> 015769312e51083fc0c627fd66e07b25c89b5217
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
