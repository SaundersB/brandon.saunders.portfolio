import React from 'react';
import {ProjectMediaComponent} from "./ProjectMediaContentComponent";
import {header} from "../../styles/typography";
import {defaultMargin, defaultPadding} from "../../styles";
import {TechnologiesComponent} from "./TechnologiesComponent";
import {CardComponent} from "../common/card";
import Project from "../../lib/entities/Project";

interface ProjectComponentInterface {
    project: { node: any }
}

export default function ProjectComponent(props: ProjectComponentInterface){
    const [expanded, setExpanded] = React.useState(false);
    const project = props.project;
    const projectObj = new Project(project.node);

    return (
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
                    {projectObj.name + ' | ' + projectObj.years}
                </div>
                <div style={{
                    ...defaultPadding
                }}>
                    {projectObj.description}
                </div>
                <div style={{
                    ...defaultPadding
                }}>
                    <TechnologiesComponent technologies={projectObj.tags}/>
                </div>
            </CardComponent>
        </div>
    )
}
