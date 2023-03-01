import React, { Component } from "react";
import Educations from "../Educations";
import "../Education.css";
import { Fade } from "react-reveal";
import edu from "../education.json";
import DisplayLottie from "../../Lottie/DisplayLottie";

class TempEducation extends Component {
    render() {

        return (
            <div className="education-main">

                <div className="basic-education">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="heading-div">
                            <div className="heading-img-div lottie-card-view ">

                                <DisplayLottie animationData={edu} />
                            </div>

                            <div className="heading-text-div">
                                <Fade top duration={2000} distance="20px">
                                <h1 className="heading-text" style={{ color: "white" }} >
                                    Education
                                </h1>
                                </Fade>
                                <Fade bottom duration={2000} distance="20px">
                                <h3 className="heading-sub-text" style={{ color: "white" }} >
                                    Basic Qualification and Certifcations
                                </h3>
                                </Fade>

                            </div>


                        </div>
                    </Fade>

                </div>
            </div>
        );
    }
}

export default TempEducation;
