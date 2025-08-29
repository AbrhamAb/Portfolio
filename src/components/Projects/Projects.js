import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import event from "../../Assets/Projects/event.png";
import crossing from "../../Assets/Projects/crossing.png";
import ping from "../../Assets/Projects/ping.png";
import pomo from "../../Assets/Projects/pomo.png";
import snake from "../../Assets/Projects/snake.png";
import us from "../../Assets/Projects/us.png";
import loading from "../../Assets/Projects/loading.gif";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Eventify"
              description="Eventify is a complete event management platform featuring a dual-interface system where users can register accounts, browse events, and sign up for activities,
               while administrators maintain full control through a dashboard with comprehensive CRUD operations, user management, and event analytics. Built with Java and JavaFX, 
               the application offers a secure, intuitive experience for event discovery and registration on the user side, coupled with robust administrative tools for managing events, users, and system operations."
              ghLink="https://github.com/AbrhamAb/Eventify"
            />
          </Col>

           <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crossing}
              isBlog={false}
              title="Turtle crossing game"
              description="A simple 2D game built with Python and Turtle graphics where the player controls a turtle to cross a busy road while avoiding moving blocks. The game features increasing difficulty levels, score tracking, and a restart option upon collision."
              ghLink="https://github.com/AbrhamAb/turtle-crossing-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ping}
              isBlog={false}
              title="Ping Pong"
              description="A classic 2D Ping Pong game developed using Python and Turtle graphics. The game allows two players to control paddles on either side of the screen, aiming to score points by getting the ball past their opponent's paddle. It features simple controls, score tracking, and a fun, competitive gameplay experience."
              ghLink="https://github.com/AbrhamAb/pong-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pomo}
              isBlog={false}
              title="Pomodoro Timer"
              description="A productivity application built with Python and Tkinter that implements the Pomodoro Technique. The app features a user-friendly interface allowing users to set work and break intervals, start/pause the timer,It helps users manage their time effectively by breaking work into focused intervals."
              ghLink="https://github.com/AbrhamAb/pomodoro-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="A classic Snake game developed using Python and Turtle graphics. The game features simple controls where the player maneuvers a growing snake to collect food while avoiding collisions with walls and itself. It includes score tracking and increasing difficulty levels, providing an engaging and nostalgic gaming experience."
              ghLink="https://github.com/AbrhamAb/simple-snake-game"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={us}
              isBlog={false}
              title="us States guessing game"
              description="A fun and educational game built with Python,Turtle graphics and pandas where players guess the names of U.S. states. The game displays a blank map of the United States, and players input state names to see them appear on the map. It tracks correct guesses and encourages learning through interactive gameplay."
              ghLink="https://github.com/AbrhamAb/us-states-game"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loading}
              isBlog={false}
              title="Loading..."
              description="More projects are coming soon. Stay tuned! And let's connect on GitHub in the meantime."
              ghLink="https://github.com/AbrhamAb"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
