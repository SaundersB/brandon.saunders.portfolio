import React from 'react';

export function TechnologiesComponent(props: any) {
    const technologies = props.technologies.split(', ');
    const technologyRows = technologies.map((tech: string) => <tr key={'tr-' + tech}>
        <td key={'td-' + tech}><a href={'https://en.wikipedia.org/wiki/' + tech} target={"_blank"}>{tech}</a></td>
    </tr>);
    return (
        <div>
            <table style={{
                marginBottom: 0
            }}>
                <tbody>
                {technologyRows}
                </tbody>
            </table>
        </div>
    )
}
