import React from 'react';
import ProjectCategoryComponent from "./ProjectCategoryComponent";
import ProjectComponent from "./ProjectComponent";
import {baseColor} from "../../styles/colors";
import {defaultPadding} from "../../styles";

export default function ProjectCategorySelectorComponent({data}: any) {
    const [selectedCategoryKey, setSelectedCategoryKey] = React.useState('mobile');
    const [projectsByCategory, setProjectsByCategory] = React.useState([]);
    React.useEffect(() => {
        setProjectsByCategory(parseProjectsData(data));
    }, []);
    return (
        <div style={{
            backgroundColor: baseColor,
            minHeight: '100vh',
            ...defaultPadding
        }}>
            <div key={'project-category-selector-wrapper'} style={{
                maxWidth: 1080,
                padding: `0 0 0`,
                margin: `0 auto`,
            }}>
                <div
                    key={'project-category-section'}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        alignItems: 'stretch',
                        paddingTop: 5,
                        paddingLeft: 5,
                        paddingRight: 5
                    }}>
                    {
                        getCategoryComponents(projectsByCategory, setSelectedCategoryKey)
                    }
                </div>
                {
                    getProjectsComponentsByCategory(projectsByCategory, selectedCategoryKey)
                }
            </div>
        </div>
    )
}


function parseProjectsData(data: any): any {
    let projects: [][] = [];
    data.allProjectsJson.edges.forEach((project: any) => {
        project.node.categories.forEach((category: any) => {
            if (typeof projects[category] !== 'object') {
                projects[category] = [];
            }
            // @ts-ignore
            projects[category].push(project);
        });
    })
    return projects;
}

function getCategoryComponents(categories: any, setSelectedCategoryKey: any) {
    let categoryComponents = [];
    for (const key in categories) {
        if (categories.hasOwnProperty(key)) {
            categoryComponents.push(
                <ProjectCategoryComponent
                    key={key}
                    onPress={() => setSelectedCategoryKey(key)}
                    categoryName={key}
                    backgroundColor={'#fff'}
                />
            )
        }
    }
    return categoryComponents;
}

function getProjectsComponentsByCategory(projectsByCategory: any, category: string) {
    let projectComponents = [];
    const projects = projectsByCategory[category];
    for (const key in projects) {
        if (projects.hasOwnProperty(key)) {
            projectComponents.push(
                <ProjectComponent key={key} project={projects[key]}/>
            );
        }
    }
    return projectComponents;
}
