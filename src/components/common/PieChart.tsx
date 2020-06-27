import React from "react";
import * as d3 from "d3";
import {baseColor} from "../../styles/colors";

const Slice = props => {
    let { pie } = props;

    let arc = d3
        .arc()
        .innerRadius(0)
        .outerRadius(100);

    let interpolate = d3.interpolateRgb(baseColor, "#a9a9a9");

    return pie.map((slice, index) => {
        let sliceColor = interpolate(index / (pie.length - 1));
        return <path d={arc(slice)} fill={sliceColor} />;
    });
};


interface PieChartInterface {
    innerRadius: any;
    outerRadius: any;
    data: any;
    width: number;
    height: number;
}

const PieChart = (props: PieChartInterface) => {
    const height = props.height;
    const width = props.width;

    let pie = d3.pie()(props.data);

    return (
        <svg height={height} width={width}>
            <g transform={`translate(${width / 2},${height / 2})`}>
                <Slice pie={pie} />
            </g>
        </svg>
    );
};

export default PieChart;
