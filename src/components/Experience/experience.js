import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import junglee from "./junglee-logo.jpeg"
import ExperienceCard from "../Education/Experiencecard";
let description = ["MyExperience1", "MyExperience2", "MyExperience3"]
function Experience() {
    return (
        <section>
            <Container fluid className="home-section" id="home">
                <Particle />
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Row md={4} className="experience-card">
                        <ExperienceCard
                            imgPath={junglee}
                            isBlog={false}
                            company="Junglee Games"
                            title="Software Engineer "
                            description={description}
                        />
                    </Row>
                </Row>
            </Container>

        </section>
    );
}

export default Experience;
