import React from "react";
import { SparklineComponent, Inject, SparklineTooltip } from "@syncfusion/ej2-react-charts";

type SparkLineProps = {
    currentColor: string;
    id: string;
    type: string;
    height: string;
    width: string;
    color: string;
    data: {
        x: number,
        yval: number
    }[]
}

const SparkLine: React.FC<SparkLineProps> = ({ id, height, width, color, data, type, currentColor }) => {
    return(
        <SparklineComponent 
        id={id} 
        height={height} 
        width={width} 
        lineWidth={1} 
        valueType="Numeric" 
        fill={"blue"} 
        border={{ color: currentColor, width: 2 }} 
        dataSource={data} 
        xName="x" 
        yName="y" 
        type="Line"
        tooltipSettings={{
            visible: true,
            format: '${x} : data ${y}',
            trackLineSettings: {
                visible: true
            }
        }}>
            <span>sdfsdfdsfsfd</span>
            <Inject services={[SparklineTooltip]} />
        </SparklineComponent>
    )
}
export default SparkLine;
