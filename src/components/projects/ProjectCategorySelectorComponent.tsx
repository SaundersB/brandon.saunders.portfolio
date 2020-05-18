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
        {
            getCategoryComponents(projectsByCategory, setSelectedCategoryKey)
        }
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
                backgroundColor={'#969696'}
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

//
// function getProjectsPage(data: any) {
//     let projectComponents: any[] = [];
//     let categoryComponents = [];
//
//
//
//     for(const key in projectsByCategory){
//         console.log(key);
//         console.log(categories[key])
//         categoryComponents.push(
//             <ProjectCategoryComponent
//                 categoryName={key}
//                 backgroundColor={'#969696'}
//             />
//         )
//
//         for(const project in categories[key]){
//             if(typeof projectComponents[key] !== 'object'){
//                 projectComponents[key] = [];
//             }
//             projectComponents[key].push(
//                 <ProjectComponent project={project}/>
//             );
//         }
//     }
//
//     console.log(projectComponents);
//     return (
//         <div>
//             {categoryComponents}
//         </div>
//     );
// }
