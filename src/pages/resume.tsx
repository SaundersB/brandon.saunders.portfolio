import * as React from "react";
import {graphql, PageProps, StaticQuery} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

function parseEmploymentData(data: any): any {
    let companies: [] = [];
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
            url
            description
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
                    const companies = parseEmploymentData(data);
                    console.log(companies);
                    return (
                        <div className={'d-flex row gradient container'}>
                            <div className={'content-wrapper p-auto m-auto white-background p-4'}>
                                <div className={'col p-0'}>
                                    <div className={'row p-0'}>
                                        <div className={'col p-0'}>
                                            <div className={'header'}>
                                                Brandon Saunders
                                            </div>
                                            <div className={'header-two'}>
                                                Full Stack Software Engineer
                                            </div>
                                            <div>
                                                <a href={'mailto:BrandonNSaunders@gmail.com'}>BrandonNSaunders@gmail.com</a>
                                            </div>
                                            <div>
                                                <a href={'#'} target={'_blank'}>626-991-9323</a>
                                            </div>
                                        </div>
                                        <div className={'col p-0'}>
                                            <div>
                                                <a href={'https://www.linkedin.com/in/saundersbrandon/'} target={'_blank'}>linkedin.com/in/saundersbrandon</a>
                                            </div>
                                            <div>
                                                <a href={'https://github.com/SaundersB'} target={'_blank'}>github.com/in/SaundersB</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'row p-0'}>
                                        <div className={'header'}>Career Summary</div>
                                        <div>Full stack software engineer with 5 years of experience building professional web and mobile applications, back- end cloud infrastructure, DevOps pipelines, and unique software experiences. Skilled with developing software in HIPAA and PCI DSS regulated industries to ensure highly secure software systems.</div>
                                    </div>
                                    <div className={'row p-0'}>
                                        <div className={'header'}>Experience</div>
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
