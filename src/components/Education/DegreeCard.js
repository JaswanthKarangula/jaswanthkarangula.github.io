import React, { Component } from "react";
import "./DegreeCard.css";

import { Fade, Flip } from "react-reveal";

class DegreeCard extends Component {
    render() {
        const degree = this.props.degree;
        return (
            <div>

            {/*<div className="degree-card">*/}
            {/*    {degree.logo_path && (*/}
            {/*        <Flip left duration={2000}>*/}
            {/*            <div className="card-img">*/}
            {/*                <img*/}
            {/*                    style={{*/}
            {/*                        maxWidth: "100%",*/}
            {/*                        maxHeight: "100%",*/}
            {/*                        transform: "scale(0.9)",*/}
            {/*                    }}*/}
            {/*                    src={require(`./${degree.logo_path}`)}*/}
            {/*                    alt={degree.alt_name}*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </Flip>*/}
            {/*    )}*/}
            {/*    <Fade right duration={2000} distance="40px">*/}
            {/*        <div*/}
            {/*            className="card-body"*/}
            {/*            style={{ width: degree.logo_path ? "90%" : "100%" }}*/}
            {/*        >*/}
            {/*            <div*/}
            {/*                className="body-header"*/}

            {/*            >*/}
            {/*                <div className="body-header-title">*/}
            {/*                    <h2 className="card-title" >*/}
            {/*                        {degree.title}*/}
            {/*                    </h2>*/}
            {/*                    <h3 className="card-subtitle" >*/}
            {/*                        {degree.subtitle}*/}
            {/*                    </h3>*/}
            {/*                </div>*/}
            {/*                <div className="body-header-duration">*/}
            {/*                    <h3 className="duration" >*/}
            {/*                        {degree.duration}*/}
            {/*                    </h3>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="body-content">*/}
            {/*                {degree.descriptions.map((sentence) => {*/}
            {/*                    return (*/}
            {/*                        <p className="content-list" >*/}
            {/*                            {sentence}*/}
            {/*                        </p>*/}
            {/*                    );*/}
            {/*                })}*/}
            {/*                {degree.website_link && (*/}
            {/*                    <a*/}
            {/*                        href={degree.website_link}*/}
            {/*                        target="_blank"*/}
            {/*                        rel="noopener noreferrer"*/}
            {/*                    >*/}
            {/*                        <div*/}
            {/*                            className="visit-btn"*/}

            {/*                        >*/}
            {/*                            <p className="btn" >*/}
            {/*                                Visit Website*/}
            {/*                            </p>*/}
            {/*                        </div>*/}
            {/*                    </a>*/}
            {/*                )}*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Fade>*/}
            {/*</div>*/}



        <div
            className="experience-card"
            style={{ border: `1px solid ${degree["color"]}` }}
        >
            <div className="experience-card-logo-div">
                <img
                    className="experience-card-logo"
                    src={require(`./${degree["logo_path"]}`)}
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
