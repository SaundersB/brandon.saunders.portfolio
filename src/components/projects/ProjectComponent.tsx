import React from 'react';
import {ProjectMediaComponent} from "./ProjectMediaContentComponent";
import {bold, defaultText, header} from "../../styles/typography";
import {bottomPadding, defaultMargin, defaultPadding, horizontalPadding, topPadding} from "../../styles";
import {TechnologiesComponent} from "./TechnologiesComponent";
import CardComponent from "../common/CardComponent";
import Project from "../../lib/entities/Project";
import PieChart from "../common/PieChart";
import ProjectSection from "./ProjectSection";
import {baseColor, inactive} from "../../styles/colors";

interface ProjectComponentInterface {
    project: { node: any }
}

export default function ProjectComponent(props: ProjectComponentInterface) {
    const project = props.project;
    const projectObj = new Project(project.node);

    const year = projectObj.startYear !== projectObj.endYear ? projectObj.startYear + '-' + projectObj.endYear : projectObj.endYear;
    const teamPercentage = (100 - Number(projectObj.estimatedContributionPercentage)) / 100;
    const myPercentage = Number(projectObj.estimatedContributionPercentage) / 100;
    const soloProject = myPercentage >= 1;

    return (
        <div key={'project-' + projectObj.name} style={{
            ...defaultMargin,
        }}>
            <CardComponent>
                <ProjectMediaComponent
                    project={project}
                />
                <div key={'project-name-' + projectObj.name}
                     style={{
                         ...horizontalPadding,
                         ...topPadding,
                         ...defaultText,
                         ...header,
                         ...bold,
                         color: 'black',
                         textAlign: 'center',
                     }}>
                    {projectObj.name + ' | ' + year}
                </div>
                <div key={'project-description-' + projectObj.name} style={{
                    ...defaultPadding,
                    ...defaultText,
                    color: 'black',
                }}>
                    {projectObj.description}
                </div>
                <ProjectSection title={'Skills'}>
                    <TechnologiesComponent technologies={projectObj.tags}/>
                </ProjectSection>
                {!soloProject && <ProjectSection title={'Statistics'}>
                    <div className={'row'}>
                        <div className={'col align-content-center'} style={{...topPadding}}>
                            <h4>Contribution Breakdown</h4>
                            <PieChart data={[myPercentage, teamPercentage]} width={200} height={200} innerRadius={0}
                                      outerRadius={0}/>
                            <div className={'row align-items-center'}>
                                <div style={{width: 15, height: 15, backgroundColor: baseColor, margin: 15}}></div>
                                <div style={{...bold, ...defaultText}}>
                                    My Contribution: {myPercentage * 100}%
                                </div>
                            </div>
                            <div className={'row align-items-center'}>
                                <div style={{width: 15, height: 15, backgroundColor: inactive, margin: 15}}></div>
                                <div style={{...bold, ...defaultText}}>
                                    Teams Contribution: {teamPercentage * 100}%
                                </div>
                            </div>
                        </div>
                    </div>
                </ProjectSection>
                }
            </CardComponent>
        </div>
    )
}
