import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Project from "../lib/entities/Project";
import {graphql, StaticQuery} from "gatsby"
import Img from "gatsby-image"
import {CardComponent} from "../components/common/card";
import {defaultMargin, defaultPadding} from "../styles";
import {header} from "../styles/typography";

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
        const imageUrl = project.node.image?.childImageSharp?.fluid;
        const imageComponent = imageUrl !== undefined ? (
            <div style={{padding: 15}}>
                <Img fluid={imageUrl} />
            </div>
            ) : null;
        projects.push(
            <div key={projectObj.name} style={{
                ...defaultMargin,
                ...defaultPadding
            }}>
                <CardComponent>
                    {imageComponent}
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
