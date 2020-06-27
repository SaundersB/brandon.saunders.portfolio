import React from 'react';
import {header} from "../../styles/typography";
import {baseColor} from "../../styles/colors";

export function TechnologiesComponent(props: any) {
    const [expanded, setExpanded] = React.useState(false);
    const technologies = props.technologies.split(', ');
    const technologyRows = technologies.map((tech: string) => <tr key={'tr-' + tech}>
        <td key={'td-' + tech}><a href={'https://en.wikipedia.org/wiki/' + tech} target={"_blank"}>{tech}</a></td>
    </tr>);
    const symbol = expanded ? '-' : '+';
    const actionWord = expanded ? 'Collapse' : 'Expand';
    return (
        <div>
            <table style={{
                marginBottom: 0
            }}>
                <tbody>
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
