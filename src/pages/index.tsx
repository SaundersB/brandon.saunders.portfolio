import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import {graphql, StaticQuery} from "gatsby"
import ProjectCategorySelectorComponent from "../components/projects/ProjectCategorySelectorComponent";

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


function IndexPage() {
    return (
        <Layout>
            <SEO title="Home"/>
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
    );
};



export default IndexPage;
