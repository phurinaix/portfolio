import React from 'react';
import { Collapse } from 'react-bootstrap';
import ProgressiveImage from './ProgressiveImage';
import principleImg from '../assets/img/blockchain/principle.jpg';
import principleCurrentImg from '../assets/img/blockchain/principle_current.jpg';
import systemWorkflowImg from '../assets/img/blockchain/system_workflow.jpg'
import applicationImg from '../assets/img/blockchain/application.jpg';

const BlockchainProjectDetail = (props) => {
    const { detail } = props.data;
    const systemWorkflowList = Object.values(detail.systemWorkflow);
    return (
        <Collapse in={props.open}>
            <div id="blockchain-collapse">
                <div className="col-md-11 mx-auto py-4 blockchain-project-detail">
                    <h5>{detail.aboutProjectTopic}</h5>
                    <p>{detail.aboutProject}</p>
                    <h5>{detail.objectivesTopic}</h5>
                    <p>{detail.objectives}</p>
                    <h5>{detail.significanceTopic}</h5>
                    <p>{detail.significance}</p>
                    <h5>{detail.currentSystemTopic}</h5>
                    <p>{detail.currentSystem}</p>
                    <ProgressiveImage image={principleCurrentImg} alt="current system" classStyle="w-100"/>
                    <p className="img-description"><small>Picture of the current system</small></p>

                    <h5>{detail.proposedSystemTopic}</h5>
                    <p>{detail.proposedSystem}</p>
                    <ProgressiveImage image={principleImg} alt="proposed system" classStyle="w-100"/>
                    <p className="img-description"><small>Picture of proposed system overview</small></p>

                    <h5>{detail.systemWorkflowTopic}</h5>
                    <ProgressiveImage image={systemWorkflowImg} alt="system workflow" classStyle="w-100"/>
                    <p className="img-description"><small>Picture of system workflow</small></p>
                    <ol>
                    {systemWorkflowList.map((system, index) => (
                        <li key={index}>{system}</li>
                    ))}
                    </ol>
                    {/* <ol>
                        <li>Add issuer step</li>
                        <li>Request credentials step</li>
                        <li>Create credentials step</li>
                        <li>Issue credentials step</li>
                        <li>Verification step</li>
                    </ol> */}
                    <h5>{detail.applicationTopic}</h5>
                    <p>{detail.application}</p>
                    <ProgressiveImage image={applicationImg} alt="application" classStyle="w-100"/>
                    <p className="img-description"><small>All application that used in this system</small></p>

                    <h5>{detail.resourcesTopic}</h5>
                    <p>- Website for request credential source code: <small><a href="https://github.com/phurinaix/blockchain-project" target="_blank" rel="noopener noreferrer">https://github.com/phurinaix/blockchain-project</a></small></p>
                    <p>- Website to verification credential source code: <small><a href="https://github.com/phurinaix/verification-website" target="_blank" rel="noopener noreferrer">https://github.com/phurinaix/verification-website</a></small></p>
                    <p>- Tool for issues blockchain credentials to blockchain: <small><a href="https://github.com/blockchain-certificates/cert-issuer" target="_blank" rel="noopener noreferrer">https://github.com/blockchain-certificates/cert-issuer</a></small></p>
                    <p>- Blockcerts wallet application for Android: <small><a href="https://play.google.com/store/apps/details?id=com.learningmachine.android.app&hl=en" target="_blank" rel="noopener noreferrer">https://play.google.com/store/apps/details?id=com.learningmachine.android.app</a></small></p>
                    <p>- Blockcerts wallet application for iOS: <small><a href="https://apps.apple.com/us/app/blockcerts-wallet/id1146921514" target="_blank" rel="noopener noreferrer">https://apps.apple.com/us/app/blockcerts-wallet/id1146921514</a></small></p>
                </div>
            </div>
        </Collapse>
    );
}

export default BlockchainProjectDetail;