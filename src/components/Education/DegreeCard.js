import React, { Component } from "react";
import "./DegreeCard.css";


class DegreeCard extends Component {
    render() {
        const degree = this.props.degree;
        return (
            <div>

        <div
            className="experience-card"
            style={{ border: `1px solid ${degree["color"]}` }}
        >
            <div className="experience-card-logo-div">
                <img
                    className="experience-card-logo"
                    src={ degree["logo_path"] }
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
                            {degree["title"]}
                        </h3>
                        <p
                            className="experience-card-company"
                            style={{ color:'#0879bf' }}
                        >
                            <a
                                href={degree["logo_path"]}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: '#0879bf'}}
                            >
                                {degree["company"]}
                            </a>
                        </p>
                    </div>
                    <div className="experience-card-heading-right">
                        <p
                            className="experience-card-duration"
                            style={{ color: '#0879bf' }}
                        >
                            {degree["duration"]}
                        </p>
                        <p
                            className="experience-card-location"
                            style={{ color: '#0879bf' }}
                        >
                            {degree["location"]}
                        </p>
                    </div>
                </div>
                <p
                    className="experience-card-description"
                    style={{ color: '#0879bf' }}
                >
                    {degree["description"]}
                </p>
            </div>
        </div>
            </div>
        );
    }
}

export default DegreeCard;
