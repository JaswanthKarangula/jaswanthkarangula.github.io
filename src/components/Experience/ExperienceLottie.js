import React, { Component } from "react";
import { Fade } from "react-reveal";
import exp from "./experience-updated.json"
import DisplayLottie from "../Lottie/DisplayLottie";


class ExperienceLottie extends Component {
    render() {

        return (

             <div className="education-main">

                <div className="basic-education">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="heading-div">

                            <div className="heading-img-div lottie-card-view">
                                <DisplayLottie  animationData={exp} />
                            </div>

                            <div className="heading-text-div">
                                <Fade bottom duration={2000} distance="20px">
                                <h1 className="heading-text"  style={{ color: "white" }}>
                                    Experience
                                </h1>
                                </Fade>
                            </div>

                        </div>
                    </Fade>

                </div>
            </div>

        );
    }
}

export default ExperienceLottie;
