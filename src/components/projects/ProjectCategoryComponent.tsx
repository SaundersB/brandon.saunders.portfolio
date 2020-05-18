import React from 'react';
import {defaultMargin, defaultPadding} from "../../styles";

interface ProjectCategoryComponentInterface {
    backgroundColor: string;
    categoryName: string;
    onPress: () => {};
}

export default function ProjectCategoryComponent(props: ProjectCategoryComponentInterface){
    return (
        <div
            key={props.categoryName}
            onClick={() => props.onPress()}
            style={{
                ...defaultPadding,
                ...defaultMargin,
                maxHeight: 300,
                aspectRatio: '1',
                backgroundColor: props.backgroundColor,
                borderRadius: 15,
                cursor: 'pointer'
        }}>
            <div key={'category-' + props.categoryName} style={{
                color: 'white'
            }}>
                {props.categoryName}
            </div>
        </div>
    )
}
