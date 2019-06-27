import React, { Component } from 'react';
import WorkCard from '../components/WorkCard';
// import ProjectCard from '../../components/ProjectCard';
import withLoading from './withLoading';
import { connect } from 'react-redux';
import SoftwareImage from '../assets/img/software.jpg';
import DesignImage from '../assets/img/design.jpg';
import BlockchainImage from '../assets/img/blockchain.jpg';
import ProjectBoard from '../components/ProjectBoard';
import softwareImage1 from '../assets/img/software/1.jpg';
import softwareImage2 from '../assets/img/software/2.jpg';
import softwareImage3 from '../assets/img/software/3.jpg';
import softwareImage4 from '../assets/img/software/4.jpg';
import softwareImage6 from '../assets/img/software/6.jpg';
import softwareImage7 from '../assets/img/software/7.jpg';
import softwareImage8 from '../assets/img/software/8.jpg';
import softwareImage9 from '../assets/img/software/9.jpg';
import softwareImage10 from '../assets/img/software/10.jpg';
import softwareImage11 from '../assets/img/software/11.jpg';
import softwareImage12 from '../assets/img/software/12.jpg';
import softwareImage13 from '../assets/img/software/13.jpg';
import softwareImage14 from '../assets/img/software/14.jpg';
import softwareImage15 from '../assets/img/software/15.jpg';
import softwareImage16 from '../assets/img/software/16.jpg';
import softwareImage17 from '../assets/img/software/17.jpg';
import softwareImage18 from '../assets/img/software/18.jpg';
import softwareImage19 from '../assets/img/software/19.jpg';
import softwareImage20 from '../assets/img/software/20.jpg';
import softwareImage21 from '../assets/img/software/21.jpg';
import softwareImage22 from '../assets/img/software/22.jpg';
import softwareImage23 from '../assets/img/software/23.jpg';
import softwareImage24 from '../assets/img/software/24.jpg';
import softwareImage25 from '../assets/img/software/25.jpg';
import softwareImage26 from '../assets/img/software/26.jpg';
import softwareImage27 from '../assets/img/software/27.jpg';
import softwareImage28 from '../assets/img/software/28.jpg';
import softwareImage29 from '../assets/img/software/29.jpg';
import softwareImage30 from '../assets/img/software/30.jpg';
import softwareImage31 from '../assets/img/software/31.jpg';
import softwareImage32 from '../assets/img/software/32.jpg';
import softwareImage33 from '../assets/img/software/33.jpg';
import softwareImage34 from '../assets/img/software/34.jpg';
import softwareImage35 from '../assets/img/software/35.jpg';
import softwareImage36 from '../assets/img/software/36.jpg';
import softwareImage37 from '../assets/img/software/37.jpg';
import softwareImage38 from '../assets/img/software/38.jpg';
import softwareImage39 from '../assets/img/software/39.jpg';
import softwareImage40 from '../assets/img/software/40.jpg';
import softwareImage41 from '../assets/img/software/41.jpg';
import softwareImage42 from '../assets/img/software/42.jpg';
import softwareImage43 from '../assets/img/software/43.jpg';
import softwareImage44 from '../assets/img/software/44.jpg';
import softwareImage45 from '../assets/img/software/45.jpg';
import designImage1 from '../assets/img/design/tuPoster1.jpg';
import designImage2 from '../assets/img/design/tuPoster2.jpg';
import designImage3 from '../assets/img/design/geniusPen.jpg';
import designImage4 from '../assets/img/design/debate.jpg';
import designImageFull1 from '../assets/img/design/tuPoster1_full.jpg';
import designImageFull2 from '../assets/img/design/tuPoster2_full.jpg';
import designImageFull3 from '../assets/img/design/geniusPen_full.jpg';
import designImageFull4 from '../assets/img/design/debate_full.jpg';
import blockchainImage1 from '../assets/img/blockchain/blockchain.jpg';

const locale = require('react-redux-i18n').I18n;

class Work extends Component {
    state = {
        projectType: "",
        softwarePreviewImage: [
            softwareImage22,
            softwareImage11,
            softwareImage42,
            softwareImage1,
            softwareImage24,
            softwareImage21,
            softwareImage23,
            softwareImage15,
            softwareImage20
        ],
        designPreviewImage: [
            designImage1,
            designImage2,
            designImage3,
            designImage4
        ],
        blockchainPreviewImage: [
            blockchainImage1
        ],
        softwareImages: [
            { 
                id: "1",
                images: [softwareImage22, softwareImage25, softwareImage26, softwareImage27, softwareImage28, softwareImage29]
            },
            {
                id: "2",
                images: [softwareImage11, softwareImage12, softwareImage13, softwareImage14]
            },
            {
                id: "3",
                images: [softwareImage42, softwareImage43, softwareImage44, softwareImage45]
            },
            {
                id: "4",
                images: [softwareImage1, softwareImage2, softwareImage3, softwareImage4]
            },
            {
                id: "5",
                images: [softwareImage24, softwareImage6, softwareImage7, softwareImage8, softwareImage9, softwareImage10]
            },
            {
                id: "6",
                images: [softwareImage21, softwareImage30, softwareImage31, softwareImage32]
            },
            {
                id: "7",
                images: [softwareImage23, softwareImage33, softwareImage34, softwareImage35, softwareImage36]
            },
            {
                id: "8",
                images: [softwareImage15, softwareImage16, softwareImage17, softwareImage18, softwareImage19]
            },
            {
                id: "9",
                images: [softwareImage20, softwareImage37, softwareImage38, softwareImage39, softwareImage40, softwareImage41]
            }
        ],
        designImages: [
            {
                image: designImageFull1
            },
            {
                image: designImageFull2
            },
            {
                image: designImageFull3
            },
            {
                image: designImageFull4
            }
        ]
    }
    projectHandle = (projectType) => {
        this.setState({ projectType });
    }
    deleteProjectType = () => {
        this.setState({ projectType: '' });
    }
    render() {
        return (
                <div className="work-section text-center">
                    <div className="row justify-content-center">
                        {this.state.projectType === "" ?
                            <React.Fragment>
                                <WorkCard title={locale.t('portfolio.topic.project1.topic')} text={locale.t('portfolio.topic.project1.description')} detail={locale.t('portfolio.viewDetail')} image={SoftwareImage} click={this.projectHandle}/>
                                <WorkCard title={locale.t('portfolio.topic.project2.topic')} text={locale.t('portfolio.topic.project2.description')} detail={locale.t('portfolio.viewDetail')} image={DesignImage} click={this.projectHandle}/>
                                <WorkCard title={locale.t('portfolio.topic.project3.topic')} text={locale.t('portfolio.topic.project3.description')} detail={locale.t('portfolio.viewDetail')} image={BlockchainImage} click={this.projectHandle}/>
                            </React.Fragment>
                        :
                            <ProjectBoard 
                                projectType={this.state.projectType}
                                projectTopic={locale.t('portfolio.topic')}
                                moreDetail={locale.t('portfolio.moreDetail')}
                                softwarePreviewImage={this.state.softwarePreviewImage}
                                designPreviewImage={this.state.designPreviewImage}
                                blockchainPreviewImage={this.state.blockchainPreviewImage}
                                softwareImages={this.state.softwareImages}
                                designImages={this.state.designImages}
                                projects={locale.t('portfolio.projectList')}
                                projectsDetailTopic={locale.t('portfolio.detailTopic')}
                                back={this.deleteProjectType}
                            />
                        }
                    </div>
                </div>
        );
    }
}

export default connect()(withLoading(Work));