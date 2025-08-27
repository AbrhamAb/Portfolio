import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
<<<<<<< HEAD
        username="AbrhamAb"
        blockSize={15}
        blockMargin={5}
        color="#97c0feff"
=======
        username="soumyajit4419"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
>>>>>>> 015769312e51083fc0c627fd66e07b25c89b5217
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
