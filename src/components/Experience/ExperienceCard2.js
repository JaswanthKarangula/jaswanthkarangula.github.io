import React, { Component } from "react";
import "./ExperienceCard.css";
import junglee from "./junglee-logo.jpeg"


class ExperienceCard2 extends Component {

    render() {
        const experience = this.props.experience
            // {
				// 	title: "Backend Engineer",
				// 	company: "Junglee Games",
				// 	company_url: "jungleegames.com",
				// 	logo_path: 'junglee-logo.jpeg',
				// 	duration: "Dec 2021 - May 2022",
				// 	location: "Banglore",
				// 	description: "Backend Development ",
				// 	color: "#0879bf"
				// }




        return (
            <div
                className="experience-card"
                style={{ border: `1px solid ${experience["color"]}` }}
            >
                <div className="experience-card-logo-div">
                    <img
                        className="experience-card-logo"
                        src={require(`./${experience["logo_path"]}`)}
                        alt=""
                    />
                </div>
                <div className="experience-card-body-div">
                    <div className="experience-card-header-div">
                        <div className="experience-card-heading-left">
                            <h3
                                className="experience-card-title"
                                style={{ color: '#0879bf' }}
                            >
                                {experience["title"]}
                            </h3>
                            <p
                                className="experience-card-company"
                                style={{ color:'#0879bf' }}
                            >
                                <a
                                    href={experience["logo_path"]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#0879bf'}}
                                >
                                    {experience["company"]}
                                </a>
                            </p>
                        </div>
                        <div className="experience-card-heading-right">
                            <p
                                className="experience-card-duration"
                                style={{ color: '#0879bf' }}
                            >
                                {experience["duration"]}
                            </p>
                            <p
                                className="experience-card-location"
                                style={{ color: '#0879bf' }}
                            >
                                {experience["location"]}
                            </p>
                        </div>
                    </div>
                    <p
                        className="experience-card-description"
                        style={{ color: '#0879bf' }}
                    >
                        {experience["description"]}
                    </p>
                </div>
            </div>

        );
    }
}

export default ExperienceCard2;