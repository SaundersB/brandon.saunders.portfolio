import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import {graphql, StaticQuery} from "gatsby"
import ProjectCategorySelectorComponent from "../components/projects/ProjectCategorySelectorComponent";
import {StaticPlaceholderComponent} from "../components/StaticPlaceholderComponent";

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
            <StaticPlaceholderComponent wrapperStyles={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'black'
            }}/>
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
