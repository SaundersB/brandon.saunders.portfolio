import * as React from "react";
import {graphql, PageProps, StaticQuery} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../lib/entities/Experience";

function parseEmploymentData(data: any): any {
    let companies: any = [];
    data.allExperienceJson.edges.forEach((company: any) => companies.push(company.node))
    return companies;
}

export const query = graphql`
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
                query={query}
                render={(data) => {
                    const experiences = parseEmploymentData(data);
                    console.log(experiences);
                    return (
                        <div className={'row gradient container justify-content-center align-content-center'}>
                            <div className={'content-wrapper m-2 p-2 white-background'}>
                                <div className={'col'}>
                                    <div className={'row'}>
                                        <div className={'col-md-6'}>
                                            <div className={'row'}>
                                                <div className={'header'}>
                                                    Brandon Saunders
                                                </div>
                                            </div>
                                            <div className={'row'}>
                                                <div className={'header-two'}>
                                                    Full Stack Software Engineer
                                                </div>
                                            </div>
                                            <div className={'row'}>
                                                <a href={'mailto:BrandonNSaunders@gmail.com'}>BrandonNSaunders@gmail.com</a>
                                            </div>
                                            <div className={'row'}>
                                                <a href={'#'} target={'_blank'}>626-991-9323</a>
                                            </div>
                                        </div>
                                        <div className={'col-md-6'}>
                                            <div className={'row'}>
                                                <a href={'https://www.linkedin.com/in/saundersbrandon/'}
                                                   target={'_blank'}>linkedin.com/in/saundersbrandon</a>
                                            </div>
                                            <div className={'row'}>
                                                <a href={'https://github.com/SaundersB'}
                                                   target={'_blank'}>github.com/in/SaundersB</a>
                                            </div>
                                            <div className={'row'}>
                                                <a href={'https://brandonsaundersportfolio.com'}
                                                   target={'_blank'}>BrandonSaundersPortfolio.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col pt-2'}>
                                            <div className={'header'}>Career Summary</div>
                                            <div>Full stack software engineer with 5 years of experience building
                                                professional web and mobile applications, back- end cloud infrastructure,
                                                DevOps pipelines, and unique software experiences. Skilled with developing
                                                software in HIPAA and PCI DSS regulated industries to ensure highly secure
                                                software systems.
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'row'}>
                                        <div className={'col pt-2'}>
                                            <div className={'header'}>Experience</div>
                                        </div>
                                    </div>
                                    <div className={'row pt-2'}>
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
                                                            <div className={'row justify-content-start pt-2'}>
                                                                {experienceObj.description}
                                                            </div>
                                                            {experienceObj.achievements && <div className={'row pt-2'}>
                                                                <div className={'header-two'}>Achievements</div>
                                                                <div>{experienceObj.achievements}</div>
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
