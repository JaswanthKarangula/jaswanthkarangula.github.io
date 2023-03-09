import React, { Component } from "react";
import "./Educations.css";
import {  Row } from "react-bootstrap";
import DegreeCard from "./DegreeCard";
import { Fade } from "react-reveal";
import {degrees} from "../../data"






class Educations extends Component {

    render() {
        return (

                    <div className="main" id="educations">
                        <div className="educations-header-div">
                            <Fade bottom duration={2000} distance="20px">
                                <h1 className="educations-header" style={{ color: "white" }} >
                                    Degrees Received
                                </h1>
                            </Fade>
                        </div>
                        <div className="educations-body-div">
                            {degrees.map((degree) => {
                                return <Row style={{ justifyContent: "center", padding: "10px" }}>
                                    <DegreeCard degree={degree}  />;
                                </Row>
                            })}
                        </div>
                    </div>



        );
    }
}

export default Educations;
