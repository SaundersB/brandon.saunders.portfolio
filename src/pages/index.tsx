import React from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import Project from "../lib/entities/Project";
import {graphql, StaticQuery} from "gatsby"
import {Constants} from "../core/Constants";

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
        projects.push(
            <li key={projectObj.name}>
                <div>
                    {projectObj.name}
                </div>
                <img alt={'test'} src={Constants.BUCKET_URL + Constants.IMAGES_PATH + projectObj.imageName}/>
            </li>
        );
    })
    return projects;
}

export default IndexPage;
