import * as React from "react";
import {graphql, PageProps, StaticQuery} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCategorySelectorComponent from "../components/projects/ProjectCategorySelectorComponent";

export const query = graphql`
    query projectsQuery {
        allProjectsJson(sort: {order: DESC, fields: endYear}) {
            edges {
                node {
                    name
                    categories
                    experienceId
                    url
                    videoUrl
                    description
                    techReasoning
                    techStack
                    tags
                    startYear
                    endYear
                    estimatedContributionPercentage
                    teamSize
                    lengthOfProject
                    imageOrientation
                    image {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid

                            }
                        }
                    }
                }
            }
        }
    }
`

function ProjectsPage(props: PageProps) {
    return (
        <Layout>
            <SEO title="Projects" description={"Brandon Saunders Projects"} lang={"en"} pathname={props.location.pathname}/>
            <StaticQuery
                key={'static-query'}
                query={query}
                render={(data) => (
                    <>
                        <ProjectCategorySelectorComponent data={data}/>
                    </>
                )
                }
            />
        </Layout>
    )
}


export default ProjectsPage;
