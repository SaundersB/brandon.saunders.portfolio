import React from 'react';
import {header2} from "../../styles/typography";


export function TechnologiesComponent(props: any){
    const [expanded, setExpanded] = React.useState(false);
    const technologies = props.technologies.split(', ');
    const technologyRows = technologies.map((tech: string) => <tr><td>{tech}</td></tr>);
    const symbol = expanded ? '-' : '+';
    const actionWord = expanded ? 'Collapse' : 'Expand';
    return (
        <div>
            <table>
                <tr>
                    <th>
                        <div>
                            <div style={{...header2}}>
                                Technologies
                            </div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <td>
                        <div style={{display: "flex", flex: 1}}>
                            <div onClick={() => setExpanded(!expanded)} style={{flexDirection: "row"}}>
                                Press to {actionWord} {symbol}
                            </div>
                        </div>
                    </td>
                </tr>
                { expanded && technologyRows}
            </table>
        </div>
    )
}
