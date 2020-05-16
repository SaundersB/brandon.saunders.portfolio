import React, {useEffect, useState} from 'react';
import SEO from '../components/seo';
import Layout from '../components/layout';
import {Constants} from "../core/Constants";
import Project from "../lib/entities/Project";

function IndexPage() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch(Constants.BUCKET_URL + Constants.DATA_PATH + 'projects.json')
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                let projectEntities = result.map((project: any) => new Project(project))
                setProjects(projectEntities);
            }).catch((error) => {
                console.log(error);
        })
    }, []);
    return (
        <Layout>
            <SEO title="Home"/>
            <ul>
                {projects.map(project => (
                    <li key={project?.name}>
                        {project?.name}
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export default IndexPage;
