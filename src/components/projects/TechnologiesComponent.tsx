import React from 'react';
import {headerTwo} from "../../styles/typography";


export function TechnologiesComponent(props: any) {
    const [expanded, setExpanded] = React.useState(false);
    const technologies = props.technologies.split(', ');
    const technologyRows = technologies.map((tech: string) => <tr key={'tr-' + tech}>
        <td key={'td-' + tech}>{tech}</td>
    </tr>);
    const symbol = expanded ? '-' : '+';
    const actionWord = expanded ? 'Collapse' : 'Expand';
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>
                            <div>
                                <div style={{...headerTwo}}>
                                    Technologies
                                </div>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            <div style={{display: "flex", flex: 1}}>
                                <div
                                    onClick={() => setExpanded(!expanded)}
                                    style={
                                        {
                                            flexDirection: "row",
                                            cursor: "pointer",
                                            color: "blue"
                                        }
                                    }
                                >
                                    {actionWord} {symbol}
                                </div>
                            </div>
                        </td>
                    </tr>
                    {expanded && technologyRows}
                </tbody>
            </table>
        </div>
    )
}
