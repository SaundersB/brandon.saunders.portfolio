import React from 'react';
import {bold, defaultText, header, whiteText} from "../../styles/typography";
import {defaultPadding, horizontalPadding} from "../../styles";
import {baseColor} from "../../styles/colors";

interface ProjectSectionInterface {
    title: string;
    children: any;
}

export default function ProjectSection(props: ProjectSectionInterface) {
    const [open, setOpen] = React.useState(false);
    const symbol = open ? '-' : '+';
    return (
        <div style={{}}>
            <div
                onClick={() => setOpen(!open)}
                style={{
                    ...defaultText,
                    ...defaultPadding,
                    ...whiteText,
                    ...bold,
                    cursor: "pointer",
                    backgroundColor: baseColor,
                }}>
                {props.title} {symbol}
            </div>
            <div style={{
                ...horizontalPadding,
            }}>
                {open && props.children}
            </div>
        </div>
    )
}
