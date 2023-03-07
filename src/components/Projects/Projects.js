import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import iot from "../../Assets/Projects/iot.gif";
import qmoney from "../../Assets/Projects/qmoney.gif"
import fruits from "../../Assets/Projects/fruits-vegetables.png"
import qeats from "../../Assets/Projects/qeats.gif"
import portfolio from "../../Assets/Projects/portfolio.png"



function Projects() {

const proj = [
  {
    imgPath: iot,
    isBlog: false,
    title: "Smart Gym Management System",
    description : "",
    ghLink : "https://github.com/soumyajit4419/Chatify",
    demoLink : "https://chatify-49.web.app/",
  },
  {
    imgPath: iot,
    isBlog: false,
    title: "Smart Meter Management System",
    description : "Built an IoT based Smart Meter Management System using React.js Node.js MongoDB MySql and AWS IoT Simulator and Deployed it in AWS",
    ghLink : "https://github.com/JaswanthKarangula/IoT-Smart-Meter-Management-System-UI",
    demoLink : "",
  },
  {
    imgPath: fruits,
    isBlog: false,
    title: "Fruits-Vegetables Classification",
    description : "Used the plant Fruits-Vegetables dataset from Kaggle and trained a image classifier model using Tensorflow framework." +
        "The model was successfully able to detect the class of fruits/vegetables and deployed it using Tensorflow Serving and Flask . I was able to achieve an accuracy of 98% by using Resnet pretrained model.",
    ghLink : "https://github.com/JaswanthKarangula/Fruits-and-Vegetable-Classification",
    demoLink : "",
  },
  {
    imgPath: qeats,
    isBlog: false,
    title: "QEats",
    description : "Built a Backend system for a food ordering app ",
    ghLink : "https://github.com/jaswanthkarangula/qeats",
    demoLink : "",
  },
  {
    imgPath: qmoney,
    isBlog: false,
    title: "QMoney",
    description : "Implemented core logic of portfolio manager application, helps managers make recommendations to clients.",
    ghLink : "https://github.com/jaswanthkarangula/qmoney",
    demoLink : "",
  },
  {
    imgPath: portfolio,
    isBlog: false,
    title: "Portfolio",
    description : "Personal portfolio build with react.js, Material-UI. And deployed it using Github Pages",
    ghLink : "https://github.com/JaswanthKarangula/jaswanthkarangula.github.io",
    demoLink : "https://jaswanthkarangula.github.io/",
  },
]




  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {
            proj.map(
                (project)=>{
                  return <Col md={4} className="project-card">
                    <ProjectCard
                        imgPath={project.imgPath}
                        isBlog={false}
                        title={project.title}
                        description={project.description}
                        ghLink={project.ghLink}
                        demoLink={project.demoLink}
                    />
                  </Col>
                }
            )
          }
          {/*<Col md={4} className="project-card">*/}
          {/*  <ProjectCard*/}
          {/*    imgPath={chatify}*/}
          {/*    isBlog={false}*/}
          {/*    title="Chatify"*/}
          {/*    description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."*/}
          {/*    ghLink="https://github.com/soumyajit4419/Chatify"*/}
          {/*    demoLink="https://chatify-49.web.app/"*/}
          {/*  />*/}
          {/*</Col>*/}



        </Row>
      </Container>
    </Container>
  );


}

export default Projects;
