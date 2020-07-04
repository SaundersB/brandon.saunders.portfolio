import React from 'react';

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
                className={'default-text p-2 bold-text white-text projects-container mouse-pointer'}>
                {props.title} {symbol}
            </div>
            <div className={'pl-2 pr-2 pb-2'}>
                {open && props.children}
            </div>
        </div>
    )
}
