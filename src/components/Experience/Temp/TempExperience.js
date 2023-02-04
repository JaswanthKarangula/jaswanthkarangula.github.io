import React, { Component } from "react";
import { Fade } from "react-reveal";
import exp from "../experience-updated.json"
import DisplayLottie from "../../Lottie/DisplayLottie";


class TempExperience extends Component {
    render() {

        return (
            <div className="education-main">

                <div className="basic-education">
                    <Fade bottom duration={2000} distance="40px">
                        <div className="heading-div">


                            <div className="heading-img-div">

                                <DisplayLottie animationData={exp} />
                            </div>


                            <div className="heading-text-div">
                                <h1 className="heading-text" >
                                    Experience
                                </h1>


                            </div>


                        </div>
                    </Fade>

                </div>
            </div>
        );
    }
}

export default TempExperience;
