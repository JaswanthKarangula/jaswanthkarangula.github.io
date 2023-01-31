import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiLinux,
    SiVisualstudiocode,
    SiPostman,
    SiHeroku,
    SiVercel, SiGoland, SiApachejmeter, SiGradle, SiDocker, SiKubernetes, SiJupyter,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiGoland />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachejmeter />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGradle />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiKubernetes />
        </Col>




    </Row>
  );
}

export default Toolstack;
