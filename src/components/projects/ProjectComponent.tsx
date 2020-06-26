import React from 'react';
import {ProjectMediaComponent} from "./ProjectMediaContentComponent";
import {bold, defaultText, header} from "../../styles/typography";
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
            ...defaultPadding,
        }}>
            <CardComponent>
                <ProjectMediaComponent
                    project={project}
                />
                <div key={'project-info-wrapper-' + projectObj.name} style={{
                    backgroundColor: 'white',
                }}>
                    <div key={'project-name-' + projectObj.name}
                         style={{
                         ...defaultText,
                         ...header,
                         ...bold,
                         color: 'black',
                        ...defaultPadding
                    }}>
                        {projectObj.name + ' | ' + projectObj.years}
                    </div>
                    <div key={'project-description-' + projectObj.name}  style={{
                        ...defaultPadding,
                        ...defaultText,
                        color: 'black',
                    }}>
                        {projectObj.description}
                    </div>
                    <div key={'project-technologies-' + projectObj.name}  style={{
                        ...defaultPadding,
                        ...defaultText,
                        color: 'black',
                        ...header,
                    }}>
                        <TechnologiesComponent technologies={projectObj.tags}/>
                    </div>
                </div>
            </CardComponent>
        </div>
    )
}
