import React from 'react';
import {ProjectMediaComponent} from "./ProjectMediaContentComponent";
import {TechnologiesComponent} from "./TechnologiesComponent";
import CardComponent from "../common/CardComponent";
import Project from "../../lib/entities/Project";
import PieChart from "../common/PieChart";
import ProjectSection from "./ProjectSection";

interface ProjectComponentInterface {
    project: { node: any }
}

export default function ProjectComponent(props: ProjectComponentInterface) {
    const project = props.project;
    const projectObj = new Project(project.node);

    const year = projectObj.startYear !== projectObj.endYear ? projectObj.startYear + '-' + projectObj.endYear : projectObj.endYear;
    const teamPercentage = (100 - Number(projectObj.estimatedContributionPercentage)) / 100;
    const myPercentage = Number(projectObj.estimatedContributionPercentage) / 100;
    let developerIcons = [];
    for(let i =0; i < Number(projectObj.teamSize); i++){
        developerIcons.push(<img width={25} height={25} src="https://img.icons8.com/cotton/64/000000/developer.png" alt={'developer'}/>)
    }
    return (
        <div key={'project-' + projectObj.name}
             className={'m-2'}>
            <CardComponent>
                <ProjectMediaComponent
                    project={project}
                />
                <div key={'project-name-' + projectObj.name}
                     className={'pl-2 pr-2 pt-2 bold-text default-text text-center black-text header'}>
                    {projectObj.name + ' | ' + year}
                </div>
                <div key={'project-description-' + projectObj.name}
                     className={'default-text p-2'}>
                    {projectObj.description}
                </div>
                <ProjectSection title={'Skills'}>
                    <TechnologiesComponent technologies={projectObj.tags}/>
                </ProjectSection>
                <ProjectSection title={'Statistics'}>
                    <div className={'d-flex row p-2'}>
                        <div className={'col align-content-center'}>
                            <h4>Contribution Breakdown</h4>
                            <PieChart data={[myPercentage, teamPercentage]} width={200} height={200} innerRadius={0}
                                      outerRadius={0}/>
                            <div className={'row align-items-center '}>
                                <div className={'project-statistics__my_contribution_block p-1 m-2'}/>
                                <div className={'bold-text default-text'}>
                                    My Contribution: {myPercentage * 100}%
                                </div>
                            </div>
                            <div className={'row align-items-center'}>
                                <div className={'project-statistics__team_contribution_block p-1 m-2'}/>
                                <div className={'bold-text default-text'}>
                                    Teams Contribution: {teamPercentage * 100}%
                                </div>
                            </div>
                        </div>
                        <div className={'col align-content-center pt-2'}>
                            <h4>Team Size</h4>
                            <div className={'bold-text default-text'}>
                                {developerIcons}
                            </div>
                        </div>
                    </div>
                </ProjectSection>
            </CardComponent>
        </div>
    )
}
