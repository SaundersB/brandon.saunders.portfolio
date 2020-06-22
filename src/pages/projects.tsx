import * as React from "react";
import {PageProps, Link} from "gatsby"
import {graphql, StaticQuery} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCategorySelectorComponent from "../components/projects/ProjectCategorySelectorComponent";
import Header from "../components/header";

export const query = graphql`
    query projectsQuery {
        allProjectsJson {
            edges {
                node {
                    name
                    categories
                    experienceId
                    url
                    videoUrl
                    description
                    tags
                    years
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
            <Header/>
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
