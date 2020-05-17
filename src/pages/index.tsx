import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Project from "../lib/entities/Project";
import {graphql, StaticQuery} from "gatsby"
import Img from "gatsby-image"
import {CardComponent} from "../components/common/card";
import {defaultMargin, defaultPadding} from "../styles";
import {header} from "../styles/typography";
import {VideoComponent} from "../components/common/VideoComponent";
import {ProjectMediaComponent} from "../components/projects/ProjectMediaContentComponent";

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


function IndexPage(props: any) {
    return (
        <Layout>
            <SEO title="Home"/>
            <StaticQuery query={query}
                         render={(data) => (
                             <>
                                 {getProjects(data)}
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
        const projectObj = new Project(project.node);
        projects.push(
            <div key={projectObj.name} style={{
                ...defaultMargin,
                ...defaultPadding
            }}>
                <CardComponent>
                    <ProjectMediaComponent project={project}/>
                    <div style={{
                        ...header,
                        ...defaultPadding
                    }}>
                        {projectObj.name}
                    </div>
                    <div style={{
                        ...defaultPadding
                    }}>
                        {projectObj.description}
                    </div>
                </CardComponent>
            </div>
        );
    })
    return projects;
}

export default IndexPage;
