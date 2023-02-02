import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Skills from "./Skills";
import fullstackAnimation from "./fullstackanimation.json"
import DisplayLottie from "../Lottie/DisplayLottie";
import softwareDev from "../Home/software-development-animation.json";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
              <DisplayLottie animationData={fullstackAnimation} />
          </Col>
        </Row>

        <Skills/>

        {/*<h1 className="project-heading">*/}
        {/*  Professional <strong className="purple">Skillset </strong>*/}
        {/*</h1>*/}

        {/*<h1> Writing Skills </h1>*/}


        {/*<Techstack />*/}

        {/*<h1 className="project-heading">*/}
        {/*  <strong className="purple">Tools</strong> I use*/}
        {/*</h1>*/}
        {/*<Toolstack />*/}

        <Github />
      </Container>

    </Container>
  );
}

export default About;
