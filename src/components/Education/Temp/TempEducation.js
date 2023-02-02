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


                            <div className="heading-img-div">

                                <DisplayLottie animationData={edu} />
                            </div>


                            <div className="heading-text-div">
                                <h1 className="heading-text" >
                                    Education
                                </h1>
                                <h3 className="heading-sub-text" >
                                    Basic Qualification and Certifcations
                                </h3>

                            </div>


                        </div>
                    </Fade>

                </div>
            </div>
        );
    }
}

export default TempEducation;
