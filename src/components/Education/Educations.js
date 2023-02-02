import React, { Component } from "react";
import "./Education.css";
import { Container, Row, Col } from "react-bootstrap";
import DegreeCard from "./DegreeCard";
import { Fade } from "react-reveal";
import Particle from "../Particle";

const degrees = {
    degrees: [
        {
            title: "SASTRA University",
            subtitle: "B.Tech. in Computer Science",
            logo_path: "sastra-logo.png",
            alt_name: "SASTRA",
            duration: "2017 - 2021",
            descriptions: [
                "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
                "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
                "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
            ],
            website_link: "",
        },
        {
            title: "San Jose State University",
            subtitle: "M.S. in Computer Science",
            logo_path: "sjsu-logo.jpeg",
            alt_name: "San Jose State University",
            duration: "2022 - 2024",
            descriptions: [
                "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
                "⚡ Apart from this, I have also done research assistantship. As part of it, I have worked on creating new algorithms in Graph ML and Network Science.",
                "⚡ During my time at university, I was also associated with multimedia department. As part of it, I have worked on some documentry films and interviews.",
            ],
            website_link: "",
        },
    ],
};

class Educations extends Component {

    render() {
        return (

            <Container fluid className="about-section">
                <Particle />
                <Container>

                    <div className="main" id="educations">
                        <div className="educations-header-div">
                            <Fade bottom duration={2000} distance="20px">
                                <h1 className="educations-header" >
                                    Degrees Received
                                </h1>
                            </Fade>
                        </div>
                        <div className="educations-body-div">
                            {degrees.degrees.map((degree) => {
                                return <Row style={{ justifyContent: "center", padding: "10px" }}>
                                    <DegreeCard degree={degree}  />;
                                </Row>
                            })}
                        </div>
                    </div>
                </Container>
            </Container>


        );
    }
}

export default Educations;
