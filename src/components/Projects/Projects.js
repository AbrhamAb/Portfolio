import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
<<<<<<< HEAD
import event from "../../Assets/Projects/event.png";
import crossing from "../../Assets/Projects/crossing.png";
import ping from "../../Assets/Projects/ping.png";
import pomo from "../../Assets/Projects/pomo.png";
import snake from "../../Assets/Projects/snake.png";
import us from "../../Assets/Projects/us.png";
=======
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
>>>>>>> 015769312e51083fc0c627fd66e07b25c89b5217

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
<<<<<<< HEAD
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
=======
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
>>>>>>> 015769312e51083fc0c627fd66e07b25c89b5217
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
<<<<<<< HEAD
              imgPath={ping}
              isBlog={false}
              title="Ping Pong"
              description="A classic 2D Ping Pong game developed using Python and Turtle graphics. The game allows two players to control paddles on either side of the screen, aiming to score points by getting the ball past their opponent's paddle. It features simple controls, score tracking, and a fun, competitive gameplay experience."
              ghLink="https://github.com/AbrhamAb/pong-game"
=======
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
>>>>>>> 015769312e51083fc0c627fd66e07b25c89b5217
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
<<<<<<< HEAD
              imgPath={pomo}
              isBlog={false}
              title="Pomodoro Timer"
              description="A productivity application built with Python and Tkinter that implements the Pomodoro Technique. The app features a user-friendly interface allowing users to set work and break intervals, start/pause the timer,It helps users manage their time effectively by breaking work into focused intervals."
              ghLink="https://github.com/AbrhamAb/pomodoro-app"
=======
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
>>>>>>> 015769312e51083fc0c627fd66e07b25c89b5217
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
<<<<<<< HEAD
              imgPath={snake}
              isBlog={false}
              title="Snake Game"
              description="A classic Snake game developed using Python and Turtle graphics. The game features simple controls where the player maneuvers a growing snake to collect food while avoiding collisions with walls and itself. It includes score tracking and increasing difficulty levels, providing an engaging and nostalgic gaming experience."
              ghLink="https://github.com/AbrhamAb/simple-snake-game"
=======
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
>>>>>>> 015769312e51083fc0c627fd66e07b25c89b5217
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
<<<<<<< HEAD
              imgPath={us}
              isBlog={false}
              title="us States guessing game"
              description="A fun and educational game built with Python,Turtle graphics and pandas where players guess the names of U.S. states. The game displays a blank map of the United States, and players input state names to see them appear on the map. It tracks correct guesses and encourages learning through interactive gameplay."
              ghLink="https://github.com/AbrhamAb/us-states-game"
=======
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
>>>>>>> 015769312e51083fc0c627fd66e07b25c89b5217
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
