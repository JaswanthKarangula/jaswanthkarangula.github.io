import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard2 from "./ExperienceCard2";
import Timeline from "./verticaltimeline/VerticleTimeLineExp";
import { Fade } from "react-reveal";

function Experience() {

    const experience =
       [ {
            title: "Backend Engineer",
            company: "Junglee Games",
            company_url: "jungleegames.com",
            logo_path: 'junglee-logo.jpeg',
            duration: "Dec 2021 - May 2022",
            location: "Banglore",
            description: "Backend Development ",
            color: "#0879bf"
        },
           {
               title: "Backend TA",
               company: "Crio.Do",
               company_url: "crio.do",
               logo_path: 'criodo-logo.png',
               duration: "Dec 2021 - May 2022",
               location: "Banglore",
               description: "Backend Development ",
               color: "#0879bf"
           },
           {
               title: "Software Engineer Intern",
               company: "Zoho Corp",
               company_url: "zoho.com",
               logo_path: 'zoho-logo.png',
               duration: "Dec 2021 - May 2022",
               location: "Banglore",
               description: "Backend Development ",
               color: "#0879bf"
           },
        ]



    function getExperiences(exp){
        let descr=[]
        for(let i=0;i<exp.length;++i){
            descr.push(<ExperienceCard2
                experience = {exp[i]} /> )
        }
        return descr
    }


    return (
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
                    {/*{*/}
                    {/*    getExperiences(experience)*/}
                    {/*}*/}
                    <Timeline> </Timeline>



                </Container>

            </Container>

        </section>
    );
}

export default Experience;
