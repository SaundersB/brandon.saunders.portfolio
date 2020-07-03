import React from 'react';
import "./ProjectCategoryComponent.css";

interface ProjectCategoryComponentInterface {
    backgroundColor: string;
    categoryName: string;
    onPress: () => {};
}

export default function ProjectCategoryComponent(props: ProjectCategoryComponentInterface) {
    return (
        <div
            key={'wrapper-' + props.categoryName}
            onClick={() => props.onPress()}
            className={'flex-fill p-2 m-2 project-category-button-wrapper'}>
            <div
                onClick={() => props.onPress()}
                key={'category-' + props.categoryName}
                className={'default-text bold-text project-category-button'}>
                {props.categoryName}
            </div>
        </div>
    )
}
