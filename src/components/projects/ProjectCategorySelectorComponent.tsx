import React from 'react';
import ProjectCategoryComponent from "./ProjectCategoryComponent";
import ProjectComponent from "./ProjectComponent";

export default function ProjectCategorySelectorComponent({ data }){
    const [selectedCategoryKey, setSelectedCategoryKey] = React.useState('');
    const [projectsByCategory, setProjectsByCategory] = React.useState([]);
    React.useEffect(() => {
        setProjectsByCategory(parseProjectsData(data));
    }, []);
    console.log(selectedCategoryKey);

    return (<div>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
        }}>
            {
                getCategoryComponents(projectsByCategory, setSelectedCategoryKey)
            }
        </div>
        {
            getProjectsComponentsByCategory(projectsByCategory, selectedCategoryKey)
        }
    </div>)
}


function parseProjectsData(data: any): any {
    let projects: [][] = [];
    data.allProjectsJson.edges.forEach((project: any) => {
        project.node.categories.forEach((category:any) => {
            if(typeof projects[category] !== 'object'){
                projects[category] = [];
            }
            projects[category].push(project);
        });
    })
    return projects;
}

function getCategoryComponents(categories: any, setSelectedCategoryKey: any){
    let categoryComponents = [];
    for(const key in categories){
        categoryComponents.push(
            <ProjectCategoryComponent
                onPress={() => setSelectedCategoryKey(key)}
                categoryName={key}
                backgroundColor={'#0088ff'}
            />
        )
    }
    return categoryComponents;
}

function getProjectsComponentsByCategory(projectsByCategory: any, category: string){
    let projectComponents = [];
    const projects = projectsByCategory[category];
    for(const key in projects){
        projectComponents.push(
            <ProjectComponent project={projects[key]}/>
        );
    }
    return projectComponents;
}
