import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Timeline from "./verticaltimeline/VerticleTimeLineExp";
import { Fade } from "react-reveal";
import ExperienceLottie from "./ExperienceLottie";

function Experience() {

    return (
        <div>
            <ExperienceLottie/>
        <section>
            <Container fluid className="project-section">
                <Particle />
                <Container>
                <h1 className="experience-heading">
                    My  <strong className="purple"  >Experience </strong>
                </h1>
                    <Fade bottom duration={2000} distance="20px">
                <p style={{ color: "white" }}>
                    Here are a few Experience  I've worked on recently.
                </p>
                    </Fade>
                    <Timeline> </Timeline>



                </Container>

            </Container>

        </section>
        </div>
    );
}

export default Experience;
