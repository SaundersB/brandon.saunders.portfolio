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
    for (let i = 0; i < Number(projectObj.teamSize); i++) {
        developerIcons.push(<img className={'mr-2'} width={25} height={25}
                                 src="https://img.icons8.com/cotton/64/000000/developer.png" alt={'developer'}/>)
    }
    return (
        <div key={'project-' + projectObj.name}
             className={'m-2'}>
            <CardComponent>
                <ProjectMediaComponent
                    project={project}
                />
                <div key={'project-name-' + projectObj.name}
                     className={'p-2 default-text text-center black-text header'}>
                    {projectObj.name.toUpperCase() + ' | ' + year}
                </div>
                <ProjectSection title={'DETAILS'}>
                    <div className={'d-flex row p-2 flex-wrap'}>
                        <div className={'col p-0'}>
                            <div className={'header-three bold-text'}>DESCRIPTION</div>
                            <div className={'default-text pb-2'}>
                                {projectObj.description}
                            </div>
                            {projectObj.techStack && <div>
                                <div className={'header-three bold-text'}>TECH STACK</div>
                                <div className={'default-text pb-2'}>
                                    {projectObj.techStack}
                                </div>
                            </div>
                            }
                            <div className={'header-three bold-text'}>TECH SELECTION PROCESS</div>
                            <div className={'default-text pb-2'}>
                                {projectObj.techReasoning}
                            </div>
                            <div className={'header-three bold-text'}>LENGTH OF PROJECT</div>
                            <div className={'default-text'}>
                                {projectObj.lengthOfProject}
                            </div>
                        </div>
                    </div>
                </ProjectSection>
                <div className={'pb-2'}/>
                <ProjectSection title={'SKILLS'}>
                    <TechnologiesComponent technologies={projectObj.tags}/>
                </ProjectSection>
                <div className={'pb-2'}/>
                <ProjectSection title={'STATISTICS'}>
                    <div className={'d-flex row p-2 flex-wrap'}>
                        <div className={'col p-0 align-content-center'}>
                            <div className={'header-three bold-text'}>CONTRIBUTION BREAKDOWN</div>
                            <PieChart data={[myPercentage, teamPercentage]} width={200} height={200} innerRadius={0}
                                      outerRadius={0}/>
                            <div className={'row align-items-center statistics__team-text'}>
                                <div className={'project-statistics__my_contribution_block p-1 m-2'}/>
                                <div className={'bold-text default-text'}>
                                    MY CONTRIBUTION: {myPercentage * 100}%
                                </div>
                            </div>
                            <div className={'row align-items-center statistics__team-text'}>
                                <div className={'project-statistics__team_contribution_block p-1 m-2'}/>
                                <div className={'bold-text default-text'}>
                                    THE TEAMS CONTRIBUTION: {teamPercentage * 100}%
                                </div>
                            </div>
                        </div>
                        <div className={'col p-0 align-content-center'}>
                            <div className={'header-three bold-text'}>TEAM SIZE</div>
                            <div className={'pt-2 pr-2'}>
                                {developerIcons}
                            </div>
                        </div>
                    </div>
                </ProjectSection>
            </CardComponent>
        </div>
    )
}
