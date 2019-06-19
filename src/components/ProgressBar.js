import React from 'react';
// import ProgressiveImage from 'react-progressive-image';
import ProgressiveImage from './ProgressiveImage';

const ProgressBar = (props) => {
    return (
        <React.Fragment>
            <div className="row justify-content-center my-2">
                <div className="col-md-1 col-2" style={{ top: '-10px'}}>
                    <ProgressiveImage image={props.logo} alt="skills" />
                </div>
                <div className="col-2 skill-name">
                    <p>{props.name}</p>
                </div>
                <div className="col-8">
                    {/* <Bar now={props.number}/> */}
                    <div className="stat stat-bar">
                        <span className="stat-bar-rating" role="stat-bar" style={{width: `${props.number}%`}}>80%</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default ProgressBar;