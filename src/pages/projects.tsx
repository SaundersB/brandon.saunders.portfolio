import * as React from "react";
import {PageProps} from "gatsby"
import {graphql, StaticQuery} from "gatsby"
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
                    tags
                    startYear
                    endYear
                    estimatedContributionPercentage
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

function ProjectsPage(props: PageProps){
    return (
        <Layout>
            <SEO title="Projects" />
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
