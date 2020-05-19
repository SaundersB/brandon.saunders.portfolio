import React from 'react';
import ProjectCategoryComponent from "./ProjectCategoryComponent";
import ProjectComponent from "./ProjectComponent";

export default function ProjectCategorySelectorComponent({ data }: any){
    const [selectedCategoryKey, setSelectedCategoryKey] = React.useState('web development');
    const [projectsByCategory, setProjectsByCategory] = React.useState([]);
    React.useEffect(() => {
        setProjectsByCategory(parseProjectsData(data));
    }, []);
    return (
        <div key={'project-category-selector-wrapper'} style={{
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
            margin: `0 auto`,
        }}>
            <div
                key={'project-category-section'}
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',

                    flexWrap: 'wrap',
                    maxWidth: 960,
                    alignItems: 'stretch',
                }}>
                {
                    getCategoryComponents(projectsByCategory, setSelectedCategoryKey)
                }
            </div>
            {
                getProjectsComponentsByCategory(projectsByCategory, selectedCategoryKey)
            }
        </div>
    )
}


function parseProjectsData(data: any): any {
    let projects: [][] = [];
    data.allProjectsJson.edges.forEach((project: any) => {
        project.node.categories.forEach((category:any) => {
            if(typeof projects[category] !== 'object'){
                projects[category] = [];
            }
            // @ts-ignore
            projects[category].push(project);
        });
    })
    return projects;
}

function getCategoryComponents(categories: any, setSelectedCategoryKey: any){
    let categoryComponents = [];
    for(const key in categories){
        if(categories.hasOwnProperty(key)) {
            categoryComponents.push(
                <ProjectCategoryComponent
                    key={key}
                    onPress={() => setSelectedCategoryKey(key)}
                    categoryName={key}
                    backgroundColor={'rgba(0,0,0,0.78)'}
                />
            )
        }
    }
    return categoryComponents;
}

function getProjectsComponentsByCategory(projectsByCategory: any, category: string){
    let projectComponents = [];
    const projects = projectsByCategory[category];
    for(const key in projects){
        if(projects.hasOwnProperty(key)){
            projectComponents.push(
                <ProjectComponent key={key} project={projects[key]}/>
            );
        }
    }
    return projectComponents;
}
