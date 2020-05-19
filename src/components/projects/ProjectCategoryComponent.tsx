import React from 'react';
import {defaultMargin, defaultPadding} from "../../styles";
import "./ProjectCategoryComponent.css";
interface ProjectCategoryComponentInterface {
    backgroundColor: string;
    categoryName: string;
    onPress: () => {};
}

export default function ProjectCategoryComponent(props: ProjectCategoryComponentInterface){
    return (
        <div
            key={'wrapper-' + props.categoryName}
            onClick={() => props.onPress()}
            className={'grow'}
            style={{
                ...defaultPadding,
                ...defaultMargin,
                aspectRatio: '1',
                backgroundColor: props.backgroundColor,
                borderRadius: 3,
                cursor: 'pointer',
                width: '50%',
                transitionProperty: 'opacity',
                transitionDuration: '2s'
        }}>
            <div
                key={'category-' + props.categoryName}
                style={{
                    fontSize: '1rem',
                    color: 'white'
                }}>
                {props.categoryName}
            </div>
        </div>
    )
}
