import React from "react";
import Card from "react-bootstrap/Card";

function getDescription(description){
    let descr=[]
    for(let i=0;i<description.length;++i){
        descr.push(<Card.Body> {description[i]} </Card.Body>)
    }
    return descr
}
function ExperienceCard(props) {
    return (
        <Card className="experience-card-view"  style={{ width: '40rem',flexDirection: 'row' }}>
            <Card.Img variant="bottom" src={props.imgPath} style={{width:'30%',height:'50%', display:'block',marginTop:'auto',marginBottom:'auto',borderRadius:'30'}}  alt="card-img" />
            <Card.Body>

                <Card.Title>{props.title}</Card.Title>

                <Card.Subtitle>{props.company}</Card.Subtitle>


                {
                   getDescription(props.description)

                }

            </Card.Body>

        </Card>
    );
}
export default ExperienceCard;
