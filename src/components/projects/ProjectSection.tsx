import React from 'react';
import {bold, defaultText, header, headerTwo} from "../../styles/typography";
import {bottomPadding, defaultPadding} from "../../styles";

interface ProjectSectionInterface {
    title: string;
    children: any;
}

export default function ProjectSection(props: ProjectSectionInterface) {
    return (
        <div style={{
            ...defaultPadding,
        }}>
            <div style={{
                ...defaultText,
                color: 'black',
                ...header,
                ...bold,
            }}>
                {props.title}
            </div>
            {props.children}
        </div>
    )
}
