import React, { Component } from "react";
import "./Educations.css";
import { Container, Row, Col } from "react-bootstrap";
import DegreeCard from "./DegreeCard";
import { Fade } from "react-reveal";
import Particle from "../Particle";



const degrees =
    [ {
        title: "Backend Engineer",
        company: "B.Tech. in Computer Science",
        company_url: "sastra.com",
        logo_path: "sastra-logo.png",
        duration: "Dec 2021 - May 2022",
        location: "Banglore",
        description: "Backend Development ",
        color: "#0879bf"
    },
        {
            title: "San Jose State University",
            company: "M.S. in Computer Science",
            company_url: "sjsu.edu",
            logo_path: "sjsu-logo.jpeg",
            duration: "Dec 2021 - May 2022",
            location: "San Jose, CA",
            description: "Backend Development ",
            color: "#0879bf"
        },

    ]



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
