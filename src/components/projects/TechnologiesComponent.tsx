import React from 'react';

export function TechnologiesComponent(props: any) {
    const technologies = props.technologies.split(', ');
    const technologyRows = technologies.map(
        (tech: string) =>
        <div className={'p-0 pt-1 pb-1 col'} key={'tr-' + tech}>
            <a href={'https://en.wikipedia.org/wiki/' + tech} target={"_blank"}>
                {tech}
            </a>
        </div>);
    return (
        <div>
            {technologyRows}
        </div>
    )
}
