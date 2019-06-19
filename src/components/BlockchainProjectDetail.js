import React from 'react';
import { Collapse } from 'react-bootstrap';
import ProgressiveImage from './ProgressiveImage';
import principleImg from '../assets/img/blockchain/principle.jpg';
import principleCurrentImg from '../assets/img/blockchain/principle_current.jpg';
import systemWorkflowImg from '../assets/img/blockchain/system_workflow.jpg'
import applicationImg from '../assets/img/blockchain/application.jpg';

const BlockchainProjectDetail = (props) => {
    const { detail } = props.data;
    return (
        <Collapse in={props.open}>
            <div id="blockchain-collapse">
                <div className="col-md-11 mx-auto py-4 blockchain-project-detail">
                    <h5>{detail.aboutProjectTopic}</h5>
                    <p>{detail.aboutProject}</p>
                    <h5>Objectives</h5>
                    <p>The objective of this study is to improve the service quality and security of the system i.e., 
                        the registrar’s office that handles the transcript and diploma in the Thammasat university. 
                        It will also avoid transcript and diploma fraud.Moreover, 
                        it delivers the student credentials to employers in a fast and efficient manner.
                    </p>
                    <h5>Significance of the research</h5>
                    <p>For any university providing copies of diplomas and transcripts is a major service. 
                        Providing these document in a fast manner and securely are a vital requirement for any school. 
                        Moreover, preventing transcript fraud and diploma fraud are also an important requirement. 
                        Transcript fraud is the alteration of a transcript issued by a legitimate school or university 
                        or the forgery of completely fake transcripts. Transcript fraud is a growing problem for both educational 
                        institutions and employers. Providing a secure solution is a worthy objective for the universities.
                    </p>
                    <h5>The current system</h5>
                    <p>The current system is slow, inefficient and based on manual control of various steps.</p>
                    <ProgressiveImage image={principleCurrentImg} alt="current system" classStyle="w-100"/>
                    <p className="img-description"><small>Picture of the current system</small></p>

                    <h5>Proposed system overview</h5>
                    <p>This System is a program that helps to certify student transcripts 
                        that are efficient, fast and more secure. It reduce the time and procedure of checking 
                        the academic transcript of the university by an employer or a third party.
                    </p>
                    <ProgressiveImage image={principleImg} alt="proposed system" classStyle="w-100"/>
                    <p className="img-description"><small>Picture of proposed system overview</small></p>

                    <h5>System workflow</h5>
                    <ProgressiveImage image={systemWorkflowImg} alt="system workflow" classStyle="w-100"/>
                    <p className="img-description"><small>Picture of system workflow</small></p>
                    <ol>
                        <li>Add issuer step</li>
                        <li>Request credentials step</li>
                        <li>Create credentials step</li>
                        <li>Issue credentials step</li>
                        <li>Verification step</li>
                    </ol>
                    <h5>Application</h5>
                    <p>It will be difficult without an interface to interact with user. 
                        So the developer created an interface to interact with user and use third-party application.
                    </p>
                    <ProgressiveImage image={applicationImg} alt="application" classStyle="w-100"/>
                    <p className="img-description"><small>All application that used in this system</small></p>

                    <h5>Resources</h5>
                    <p>- Website for request credential source code: <small><a href="https://github.com/phurinaix/blockchain-project" target="_blank">https://github.com/phurinaix/blockchain-project</a></small></p>
                    <p>- Website to verification credential source code: <small><a href="https://github.com/phurinaix/verification-website" target="_blank">https://github.com/phurinaix/verification-website</a></small></p>
                    <p>- Tool for issues blockchain credentials to blockchain: <small><a href="https://github.com/blockchain-certificates/cert-issuer" target="_blank">https://github.com/blockchain-certificates/cert-issuer</a></small></p>
                    <p>- Blockcerts wallet application for Android: <small><a href="https://play.google.com/store/apps/details?id=com.learningmachine.android.app&hl=en" target="_blank">https://play.google.com/store/apps/details?id=com.learningmachine.android.app</a></small></p>
                    <p>- Blockcerts wallet application for iOS: <small><a href="https://apps.apple.com/us/app/blockcerts-wallet/id1146921514" target="_blank">https://apps.apple.com/us/app/blockcerts-wallet/id1146921514</a></small></p>
                </div>
            </div>
        </Collapse>
    );
}

export default BlockchainProjectDetail;