import React, { Component } from "react";
import "./Education.css";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Educations from "./Educations";
import DisplayLottie from "../Lottie/DisplayLottie";
import edu from "./education.json"
class Education extends Component {

    render() {
        return (

            <div className={"project-section"} >
                <Particle />

                {/*<Row style={{ justifyContent: "center", padding: "10px" }}>*/}

                {/*    <Col*/}
                {/*        md={5}*/}
                {/*        style={{*/}
                {/*            justifyContent: "center",*/}
                {/*            paddingTop: "30px",*/}
                {/*            paddingBottom: "50px",*/}
                {/*        }}*/}
                {/*    >*/}


                {/*        <DisplayLottie animationData={edu} />*/}

                {/*    </Col>*/}

                {/*    <Col*/}
                {/*        md={2}*/}
                {/*        style={{*/}
                {/*            justifyContent: "center",*/}
                {/*            paddingTop: "30px",*/}
                {/*            paddingBottom: "50px",*/}
                {/*        }}*/}
                {/*    >*/}


                {/*        Education*/}

                {/*    </Col>*/}

                {/*</Row>*/}

                <Container>




                    <Educations/>

                </Container>
            </div>


        );
    }
}

export default Education;
