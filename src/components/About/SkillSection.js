import React, { Component } from "react";
import "./Skills.css";
import SoftwareSkill from "./SoftwareSkill";
import { Fade } from "react-reveal";
import DataScienceImg from "./DataScienceImg";
import FullStackImg from "./FullStackImg";
import CloudInfraImg from "./CloudInfraImg";
import DesignImg from "./DesignImg";
import BackendImg from "./BackendImg";

const skills = {
    data: [
        {
            title: "Backend Development / Distributed Systems",
            fileName: "DesignImg",
            skills: [
                "⚡ Working on highly scalable Backend and Distributed Systems",
                "⚡ Designing and Implementing Backend for various side Projects from scratch",
                "⚡ Flexible working with multiple tech stacks ",
            ],
            softwareSkills: [
                {
                    skillName: "Go Lang",
                    fontAwesomeClassname: "vscode-icons:file-type-go-gopher",
                    style: {
                        color: "#87CEEB",
                    },
                },
                {
                    skillName: "Spring Boot",
                    fontAwesomeClassname: "simple-icons:springboot",
                    style: {
                        color: "#00FF00",
                    },
                },
                {
                    skillName: "MongoDB",
                    fontAwesomeClassname: "logos:mongodb-icon",

                },
                {
                    skillName: "PostgreSQL",
                    fontAwesomeClassname: "logos:postgresql",
                },
                {
                    skillName: "Redis",
                    fontAwesomeClassname: "skill-icons:redis-light",
                },
                {
                    skillName: "Kafka",
                    fontAwesomeClassname: "logos:kafka-icon",
                },
                {
                    skillName: "Docker",
                    fontAwesomeClassname: "vscode-icons:file-type-docker2",
                },

                {
                    skillName: "Kubernetes",
                    fontAwesomeClassname: "skill-icons:kubernetes",
                },

                {
                    skillName: "Node.js",
                    fontAwesomeClassname: "logos:nodejs",
                },


            ],
        },
        {
            title: "Data Science & AI",
            fileName: "DataScienceImg",
            skills: [
                "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
                "⚡ Experience of working with Computer Vision and NLP projects",
                "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
            ],
            softwareSkills: [
                {
                    skillName: "Tensorflow",
                    fontAwesomeClassname: "logos-tensorflow",
                    style: {
                        backgroundColor: "transparent",
                    },
                },
                {
                    skillName: "Keras",
                    fontAwesomeClassname: "simple-icons:keras",
                    style: {
                        backgroundColor: "white",
                        color: "#D00000",
                    },
                },
                {
                    skillName: "Flask",
                    fontAwesomeClassname: "simple-icons:flask",
                    style: {
                        backgroundColor: "transparent",
                    },
                },
                {
                    skillName: "Python",
                    fontAwesomeClassname: "ion-logo-python",
                    style: {
                        backgroundColor: "transparent",
                        color: "#3776AB",
                    },
                },
            ],
        },
        {
            title: "Full Stack Development",
            fileName: "FullStackImg",
            skills: [
                "⚡ Building responsive website front end using React-Redux",
                "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
                "⚡ Creating application backend in Node, Express & Flask",
            ],
            softwareSkills: [
                {
                    skillName: "HTML5",
                    fontAwesomeClassname: "simple-icons:html5",
                    style: {
                        color: "#E34F26",
                    },
                },
                {
                    skillName: "CSS3",
                    fontAwesomeClassname: "fa-css3",
                    style: {
                        color: "#1572B6",
                    },
                },
                {
                    skillName: "Sass",
                    fontAwesomeClassname: "simple-icons:sass",
                    style: {
                        color: "#CC6699",
                    },
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "simple-icons:javascript",
                    style: {
                        backgroundColor: "#000000",
                        color: "#F7DF1E",
                    },
                },
                {
                    skillName: "ReactJS",
                    fontAwesomeClassname: "simple-icons:react",
                    style: {
                        color: "#61DAFB",
                    },
                },
                {
                    skillName: "NodeJS",
                    fontAwesomeClassname: "simple-icons:node-dot-js",
                    style: {
                        color: "#339933",
                    },
                },
                {
                    skillName: "NPM",
                    fontAwesomeClassname: "simple-icons:npm",
                    style: {
                        color: "#CB3837",
                    },
                },
                {
                    skillName: "Yarn",
                    fontAwesomeClassname: "simple-icons:yarn",
                    style: {
                        color: "#2C8EBB",
                    },
                },
                {
                    skillName: "Gatsby",
                    fontAwesomeClassname: "simple-icons:gatsby",
                    style: {
                        color: "#663399",
                    },
                },
                {
                    skillName: "Flutter",
                    fontAwesomeClassname: "simple-icons:flutter",
                    style: {
                        color: "#02569B",
                    },
                },
            ],
        },
        {
            title: "Cloud Infra-Architecture",
            fileName: "CloudInfraImg",
            skills: [
                "⚡ Experience working on multiple cloud platforms",
                "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
                "⚡ Deploying deep learning models on cloud to use on mobile devices",
                "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
            ],
            softwareSkills: [
                {
                    skillName: "GCP",
                    fontAwesomeClassname: "simple-icons:googlecloud",
                    style: {
                        color: "#4285F4",
                    },
                },
                {
                    skillName: "AWS",
                    fontAwesomeClassname: "simple-icons:amazonaws",
                    style: {
                        color: "#FF9900",
                    },
                },
                {
                    skillName: "Azure",
                    fontAwesomeClassname: "simple-icons:microsoftazure",
                    style: {
                        color: "#0089D6",
                    },
                },
                {
                    skillName: "Firebase",
                    fontAwesomeClassname: "simple-icons:firebase",
                    style: {
                        color: "#FFCA28",
                    },
                },
                {
                    skillName: "PostgreSQL",
                    fontAwesomeClassname: "simple-icons:postgresql",
                    style: {
                        color: "#336791",
                    },
                },
                {
                    skillName: "MongoDB",
                    fontAwesomeClassname: "simple-icons:mongodb",
                    style: {
                        color: "#47A248",
                    },
                },
                {
                    skillName: "Docker",
                    fontAwesomeClassname: "simple-icons:docker",
                    style: {
                        color: "#1488C6",
                    },
                },
                {
                    skillName: "Kubernetes",
                    fontAwesomeClassname: "simple-icons:kubernetes",
                    style: {
                        color: "#326CE5",
                    },
                },
            ],
        },
    ],
};

function GetSkillSvg(props) {
     if (props.fileName === "DataScienceImg")
         return <DataScienceImg  />;
    else if (props.fileName === "FullStackImg")
        return <FullStackImg  />;
    else if (props.fileName === "CloudInfraImg")
        return <CloudInfraImg/>;
    return <BackendImg  />;
    // return <div>Img</div>
}

class SkillSection extends Component {
    render() {

        return (
            <div>
                {skills.data.map((skill) => {
                    return (
                        <div className="skills-main-div">
                            <Fade left duration={2000}>
                                <div className="skills-image-div">
                                    {/* <img
                    alt="Ashutosh is Analysing Data"
                    src={require(`../../assests/images/${skill.imagePath}`)}
                  ></img> */}
                                    <GetSkillSvg fileName={skill.fileName}/>
                                </div>
                            </Fade>

                            <div className="skills-text-div">
                                <Fade right duration={1000}>
                                    <h1 className="skills-heading" >
                                        {skill.title}
                                    </h1>
                                </Fade>
                                <Fade right duration={1500}>
                                    <SoftwareSkill logos={skill.softwareSkills} />
                                </Fade>
                                <Fade right duration={2000}>
                                    <div>
                                        {skill.skills.map((skillSentence) => {
                                            return (
                                                <p
                                                    className="subTitle skills-text"
                                                >
                                                    {skillSentence}
                                                </p>
                                            );
                                        })}
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default SkillSection;
