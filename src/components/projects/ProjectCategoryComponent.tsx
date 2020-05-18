import React from 'react';

interface ProjectCategoryComponentInterface {
    backgroundColor: string;
    categoryName: string;
    onPress: () => {};
}

export default function ProjectCategoryComponent(props: ProjectCategoryComponentInterface){
    return (
        <div
            onClick={() => props.onPress()}
            style={{
            width: 300,
            height: 300,
            backgroundColor: props.backgroundColor
        }}>
            <div>
                {props.categoryName}
            </div>
        </div>
    )
}
