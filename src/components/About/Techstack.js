import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit, DiGo,
} from "react-icons/di";
import {
    SiPytorch,
    SiFirebase,
    SiNextdotjs, SiSpringboot, SiRedis, SiApachekafka, SiPostgresql, SiTensorflow, SiFlask, SiGooglecloud, SiAmazonaws,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
            <DiGo />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiSpringboot />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <DiReact />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>

        <Col xs={4} md={2} className="tech-icons">
            <SiPostgresql />
        </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiRedis />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiApachekafka />
        </Col>


      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiFlask />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiGooglecloud />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
            <SiAmazonaws />
        </Col>
    </Row>
  );
}

export default Techstack;
