import React from 'react';
import ProjectCategoryComponent from "./ProjectCategoryComponent";
import ProjectComponent from "./ProjectComponent";

export default function ProjectCategorySelectorComponent({data}: any) {
    const [selectedCategoryKey, setSelectedCategoryKey] = React.useState('MOBILE');
    const [projectsByCategory, setProjectsByCategory] = React.useState([]);
    React.useEffect(() => {
        setProjectsByCategory(parseProjectsData(data));
    }, []);
    return (
        <div className={'flex-fill base-background pb-2'}>
            <div className={'inner-content-wrapper p-auto m-auto'}>
                <div
                    key={'project-category-section' }
                    className={'d-flex flex-row justify-content-space-between flex-wrap align-items-stretch'}>
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
