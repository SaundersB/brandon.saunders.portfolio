import React from 'react';
import {header2} from "../../styles/typography";


export function TechnologiesComponent(props: any){
    const technologies = props.technologies.split(', ');
    const technologyRows = technologies.map((tech) => <tr><td>{tech}</td></tr>)
    return (
        <div>
            <table>
                <tr>
                    <th>
                        <div style={{...header2}}>Technologies</div>
                    </th>
                </tr>
                {technologyRows}
            </table>
        </div>
    )
}
