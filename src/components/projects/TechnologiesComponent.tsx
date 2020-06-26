import React from 'react';
import {header, headerTwo} from "../../styles/typography";
import {baseColor} from "../../styles/colors";
import {defaultMargin, defaultPadding} from "../../styles";


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
                                <div style={{...header}}>
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
                                            backgroundColor: baseColor,
                                            borderRadius: 10,
                                            padding: 6,
                                            color: "white",
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
