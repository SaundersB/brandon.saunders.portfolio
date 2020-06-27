import React from 'react';
import {header} from "../../styles/typography";
import {bottomPadding, defaultPadding} from "../../styles";

interface ProjectSectionInterface {
    title: string;
    children: any;
}

export default function ProjectSection(props: ProjectSectionInterface) {
    return (
        <div>
            <div style={{...header, ...bottomPadding}}>
                {props.title}
            </div>
            {props.children}
        </div>
    )
}
