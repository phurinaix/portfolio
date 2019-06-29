import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUniversity, FaSchool, FaStar } from 'react-icons/fa';

const Timeline = (props) => {
  const { education } = props;
    return (
      <VerticalTimeline layout="1-column">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={education.university.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaUniversity/>}
        >
          <h4 className="vertical-timeline-element-title">{education.university.title}</h4>
          <p className="vertical-timeline-element-subtitle">{education.university.subTitle}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={education.highSchool.date}
          iconStyle={{ background: 'rgb(221, 26, 98)', color: '#fff' }}
          icon={<FaSchool/>}
        >
          <h4 className="vertical-timeline-element-title">{education.highSchool.title}</h4>
          <p className="vertical-timeline-element-subtitle">{education.highSchool.subTitle}</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={education.elementarySchool.date}
          iconStyle={{ background: 'rgb(221, 26, 98)', color: '#fff' }}
          icon={<FaSchool/>}
        >
          <h4 className="vertical-timeline-element-title">{education.elementarySchool.title}</h4>
          <p className="vertical-timeline-element-subtitle">{education.elementarySchool.subTitle}</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<FaStar/>}
        />
      </VerticalTimeline>
    );
};

export default Timeline;