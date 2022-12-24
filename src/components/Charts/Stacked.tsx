import React from "react";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from "@syncfusion/ej2-react-charts";
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from "../../data/dummy";

type StackedProps = {
    width: string,
    height: string
}

const Stacked: React.FC<StackedProps> = ({width, height}) => {
    return(
        <ChartComponent width={width} height={height}>
            <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
        </ChartComponent>
    )
}
export default Stacked;
