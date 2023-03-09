import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import './Timeline.css'
import 'react-vertical-timeline-component/style.min.css';
import {experience} from "../../../data";
import { BsPlusLg } from "react-icons/bs";

const Timeline = ({  }) => {
    let length = experience.length;
    const [counter, setCounter] = useState(2);
    const [elements, setElements] = useState(
        [
            experience.slice(0,2).map((item) => {
                return (
                    <VerticalTimelineElement
                        textClassName="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgba(119, 53, 136, 0.459)', color: 'white' , boxShadow: '0 4px 5px 3px rgba(119, 53, 136, 0.459)' }}
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
            experience.slice(counter, counter + 2).map((item) => {
                return (
                    <VerticalTimelineElement
                        textClassName="vertical-timeline-element--work"
                        date={item.years}
                        contentStyle={{ background: 'rgba(119, 53, 136, 0.459)', color: 'white' , boxShadow: '0 4px 5px 3px rgba(119, 53, 136, 0.459)' }}
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
                    textClassName="vertical-timeline-element--work"
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