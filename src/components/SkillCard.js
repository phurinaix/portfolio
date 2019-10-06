import React from 'react';
// import ProgressiveImage from 'react-progressive-image';
import ProgressiveImage from './ProgressiveImage';

const SkillCard = (props) => {
    return (
        <React.Fragment>
            {/* <div className="row justify-content-center my-2"> */}
            <div className="skill-card col-3 col-sm-3 col-md-2 border border-info rounded p-1 py-3 m-1 d-inline-block text-center overflow-hidden">
                <ProgressiveImage image={props.logo} alt="skills" classStyle="p-0" draggable="false"/>
                <p>{props.name}</p>
            </div>
        </React.Fragment>
    );
}

export default SkillCard;