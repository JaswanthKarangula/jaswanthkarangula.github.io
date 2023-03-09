import React, { Component } from "react";
import "./Education.css";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Educations from "./Educations";
import DisplayLottie from "../Lottie/DisplayLottie";
import edu from "./education.json"
import EducationLottie from "./EducationLottie";
class Education extends Component {

    render() {
        return (
            <div>

            <EducationLottie/>

            <div className={"project-section"} >
                <Particle />
                <Container>
                    <Educations/>
                </Container>
            </div>

            </div>


        );
    }
}

export default Education;
