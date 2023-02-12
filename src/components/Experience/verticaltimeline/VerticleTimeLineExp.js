import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './Timeline.css'
import 'react-vertical-timeline-component/style.min.css';

import { BsPlusLg } from "react-icons/bs";
const data = [
    {

        "company": "Junglee Games",
        "title": "Software Engineer Backend",
        "years": "Dec 201 - May 2022",
        "location": "India",
        "description": "Backend",
        "logo": "junglee-logo.jpeg",
        "url": "jungleegames.com"

    },
    {
        "company": "Crio.Do",
        "title": "Backend TA",
        "years": "Dec 2021 - May 2022",
        "location": "Banglore",
        "description": "Backend Development",
        "logo": "criodo-logo.png",
        "url": "crio.do"
    },
    {
        "company": "Zoho Corp",
        "title": "Software Engineer Intern",
        "years": "Dec 2021 - May 2022",
        "location": "Banglore",
        "description": "Backend Development",
        "logo": "zoho-logo.png",
        "url": "zoho.com"
    },
]
const Timeline = ({  }) => {
    let length = data.length;
    const [counter, setCounter] = useState(2);
    const [elements, setElements] = useState(
        [
            data.slice(0,2).map((item) => {
                return (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={item.years}
                        icon={<img className="company-logo" style={{ borderRadius: "50%" }} src={"images/" + item.logo} alt="Company Logo" />}
                        iconOnClick={() => window.open(item.url)}
                    >
                        <h3 className="vertical-timeline-element-company">{item.company}</h3>
                        <h4 className="vertical-timeline-element-title">{item.title}</h4>
                        <h4 className="vertical-timeline-element-location">{item.location}</h4>
                        <p className="vertical-timeline-element-description">
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                )
            })
        ]
    );

    const lazyLoadItems = () => {
        let newElements = [
            data.slice(counter, counter + 2).map((item) => {
                return (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={item.years}
                        icon={<img className="company-logo" style={{ borderRadius: "50%" }} src={"images/" + item.logo} alt="Company Logo" />}
                        iconOnClick={() => window.open(item.url)}
                    >
                        <h3 className="vertical-timeline-element-company">{item.company}</h3>
                        <h4 className="vertical-timeline-element-title">{item.title}</h4>
                        <h4 className="vertical-timeline-element-location">{item.location}</h4>
                        <p className="vertical-timeline-element-description">
                            {item.description}
                        </p>
                    </VerticalTimelineElement>
                )
            })
        ];

        setElements(oldEle => [...oldEle, newElements]);
    }

    return (
        <VerticalTimeline
            lineColor='#11aaaf'
        >
            {elements}
            {length <= counter ?
                null :
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{ background: '#11ABB0', color: '#fff' }}
                    icon={<BsPlusLg />}
                    iconOnClick={() => {
                        lazyLoadItems();
                        setCounter(counter+2);
                    }}
                >
                </VerticalTimelineElement>
            }
        </VerticalTimeline>
    )
}

export default Timeline;