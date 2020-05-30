import React from 'react';
import {ProjectMediaComponent} from "./ProjectMediaContentComponent";
import {header} from "../../styles/typography";
import {defaultMargin, defaultPadding} from "../../styles";
import {TechnologiesComponent} from "./TechnologiesComponent";
import CardComponent from "../common/CardComponent";
import Project from "../../lib/entities/Project";

interface ProjectComponentInterface {
    project: { node: any }
}

export default function ProjectComponent(props: ProjectComponentInterface){
    const project = props.project;
    const projectObj = new Project(project.node);

    return (
        <div key={'project-' + projectObj.name} style={{
            ...defaultMargin,
            ...defaultPadding
        }}>
            <CardComponent>
                <ProjectMediaComponent
                    project={project}
                />
                <div key={'project-info-wrapper-' + projectObj.name}>
                    <div key={'project-name-' + projectObj.name}
                         style={{
                        ...header,
                        ...defaultPadding
                    }}>
                        {projectObj.name + ' | ' + projectObj.years}
                    </div>
                    <div key={'project-description-' + projectObj.name}  style={{
                        ...defaultPadding
                    }}>
                        {projectObj.description}
                    </div>
                    <div key={'project-technologies-' + projectObj.name}  style={{
                        ...defaultPadding
                    }}>
                        <TechnologiesComponent technologies={projectObj.tags}/>
                    </div>
                </div>
            </CardComponent>
        </div>
    )
}
