import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Project from "../lib/entities/Project";
import {graphql, StaticQuery} from "gatsby"
import Img from "gatsby-image"

export const query = graphql`
    query projectsQuery {
        allProjectsJson {
            edges {
                node {
                    name
                    experienceId
                    url
                    videoUrl
                    description
                    tags
                    image {
                        childImageSharp {
                            fluid(maxWidth: 1075) {
                                ...GatsbyImageSharpFluid

                            }
                        }
                    }
                }
            }
        }
    }
`



function IndexPage(props: any) {
    return (
        <Layout>
            <SEO title="Home"/>
            <StaticQuery query={query}
                         render={(data) => (
                            <>
                                <ul>
                                    {getProjects(data)}
                                </ul>
                            </>
                         )
                     }
            />
        </Layout>
    );
};


function getProjects(data: any) {
    let projects: object[] = [];
    data.allProjectsJson.edges.forEach((project: any) => {
        console.log(project.node);
        const projectObj = new Project(project.node);
        const imageUrl = project.node.image?.childImageSharp?.fluid;
        console.log(imageUrl);
        const imageComponent = imageUrl !== undefined ? <Img fluid={imageUrl} /> : null;
        projects.push(
            <li key={projectObj.name}>
                <div>
                    {projectObj.name}
                </div>
                <div style={{
                    width: '100%',
                    height: '100%',
                    background: 'blue'
                }}>
                    {imageComponent}
                </div>
            </li>
        );
    })
    return projects;
}

export default IndexPage;
