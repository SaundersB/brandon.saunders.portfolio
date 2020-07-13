import * as React from "react";
import {graphql, PageProps, StaticQuery} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../lib/entities/Experience";
import ProfilePhoto from "../components/common/ProfilePhoto";
import ResumeLinkComponent from "../components/common/ResumeLinkComponent";

import { faGithub, faLinkedin, faWpexplorer, faPhp, faTelegram, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope, faHome, faPhone} from "@fortawesome/free-solid-svg-icons";

function parseEmploymentData(data: any): any {
    let companies: any = [];
    data.allExperienceJson.edges.forEach((company: any) => companies.push(company.node))
    return companies;
}

export const experienceQuery = graphql`
    query experienceQuery {
        allExperienceJson(sort: {order: DESC, fields: endDate}) {
        edges {
          node {
            id
            companyDescription
            name
            title
            url
            description
            achievements
            endDate
            developmentTools
            skills
            startDate
            workType
          }
        }
      }
    }
`

function ResumePage(props: PageProps) {
    return (
        <Layout>
            <SEO title="Resume"/>
            <StaticQuery
                key={'static-query'}
                query={experienceQuery}
                render={(data) => {
                    const experiences = parseEmploymentData(data);
                    console.log(experiences);
                    return (<div className={'row white-background full-size justify-content-center align-content-center pb-4'}>
                            <div className={'inner-content-wrapper content-card white-background mt-lg-4'}>
                                <div className={'col'}>
                                    <div className={'row base-background'}>
                                        <div className={'col-md-3'}>
                                            <div className={'row justify-content-md-start justify-content-center'}>
                                                <ProfilePhoto/>
                                            </div>
                                        </div>
                                        <div className={'col-md-5 ml-md-auto pl-md-4 justify-content-between d-flex flex-column'}>
                                            <div className={'mt-2'}>
                                                <div
                                                    className={'row pb-2 justify-content-md-start justify-content-center'}>
                                                    <div className={'header white-text bold-text'}>
                                                        BRANDON SAUNDERS
                                                    </div>
                                                </div>
                                                <div
                                                    className={'row justify-content-md-start justify-content-center'}>
                                                    <div className={'header-two white-text'}>
                                                        Full Stack Software Engineer
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <ResumeLinkComponent link={'mailto:BrandonNSaunders@gmail.com'}
                                                                     icon={faEnvelope}
                                                                     title={'Email'}/>
                                                <ResumeLinkComponent link={'#'} title={'626-991-9323'}
                                                                     icon={faPhone}
                                                />
                                            </div>
                                        </div>
                                        <div className={'col-md-4 ml-md-auto pt-2 mt-2'}>                                            <ResumeLinkComponent link={'https://www.linkedin.com/in/saundersbrandon/'}
                                                                 icon={faLinkedin}
                                                                 wrapperStyles={'pl-md-2'}
                                                                 title={'LinkedIn'}/>
                                            <ResumeLinkComponent link={'https://github.com/SaundersB'}
                                                                 icon={faGithub}
                                                                 wrapperStyles={'pl-md-2'}
                                                                 title={'Github'}/>
                                            <ResumeLinkComponent link={'https://brandonsaundersportfolio.com'}
                                                                 icon={faHome}
                                                                 wrapperStyles={'pl-md-2'}
                                                                 title={'Personal Site'}/>
                                            <ResumeLinkComponent
                                                                    link={'https://stackoverflow.com/users/2466819/saundersb'}
                                                                    icon={faStackOverflow}
                                                                    wrapperStyles={'pl-md-2 mb-3'}
                                                                    title={'Stack Overflow'}/>
                                        </div>
                                    </div>
                                    <div className={'row p-2'}>
                                        <div className={'col'}>
                                            <div className={'header'}>Career Summary</div>
                                            <div className={'default-text'}>Full stack software engineer with 5 years of experience building
                                                professional web and mobile applications, back-end cloud
                                                infrastructure,
                                                DevOps pipelines, and unique software experiences. Skilled with
                                                developing
                                                software in HIPAA and PCI DSS regulated industries to ensure highly
                                                secure
                                                software systems.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'row p-2'}>
                                        <div className={'col'}>
                                            <div className={'header'}>Experience</div>
                                        </div>
                                    </div>
                                    <div className={'row p-2'}>
                                        <div className={'resume__line'}/>
                                        <div className={'col'}>
                                            {experiences.map((experience: any) => {
                                                const experienceObj = new Experience(experience);
                                                return (
                                                    <div className='col pl-0'>
                                                        <div className={'col pb-4 flex-wrap'} key={experienceObj.name}>
                                                            <div className={'row justify-content-between'}>
                                                                <div className={'row'}>
                                                                    <span className="circle pr-1"/>
                                                                    <div
                                                                        className={'header-two bold-text'}>{experienceObj.title}</div>
                                                                </div>
                                                                <div
                                                                    className={'header-three'}>{experienceObj.name}</div>
                                                            </div>
                                                            <div className={'row justify-content-start pt-2'}>
                                                                <div>{experienceObj.startDate}</div>
                                                                -
                                                                <div>{experienceObj.endDate}</div>
                                                            </div>
                                                            <div className={'row justify-content-start pt-2 default-text'}>
                                                                {experienceObj.description}
                                                            </div>
                                                            {experienceObj.achievements && <div className={'row pt-2'}>
                                                                <div className={'header-two'}>Achievements</div>
                                                                <div className={'default-text'}>{experienceObj.achievements}</div>
                                                            </div>}
                                                            <div className={'row pt-2'}>
                                                                <div className={'header-two'}>Technologies Used</div>
                                                            </div>
                                                            <div className={'row justify-content-center pt-2'}>
                                                                {experienceObj.skills.map((skill) => {
                                                                    return <div
                                                                        className={'p-1 m-1 base-background rounded-corners bold-text double-sub-text white-text'}>{skill}</div>;
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className={'row p-2'}>
                                        <div className={'col pb-4 flex-wrap'}>
                                            <div className={'header'}>Education</div>
                                            <div className={'row justify-content-between p-auto m-auto'}>
                                                <div className={'header-two bold-text'}>Bachelor of Science, Computer Science - 2016</div>
                                                <div className={'header-three'}>
                                                    California State University of San Bernardino
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }
                }
            />
        </Layout>
    )
}


export default ResumePage;
