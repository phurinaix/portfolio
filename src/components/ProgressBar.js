import React from 'react';
import '../styles/style.css';
// import ProgressiveImage from 'react-progressive-image';
import ProgressiveImage from './ProgressiveImage';

const ProgressBar = (props) => {
    return (
        <React.Fragment>
            <div className="row justify-content-center my-2">
                <div className="col-md-1" style={{ top: '-10px'}}>
                    {/* <img src={props.logo} alt=""/> */}
                    <ProgressiveImage image={props.logo} alt="skills" />
                </div>
                <div className="col-md-2">
                    <p>{props.name}</p>
                </div>
                <div className="col-md-8">
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