import React from 'react';
import * as S from "./lineChart.styles";

const LineChart = (props) => {

    let lastLineChartData = {x: 0, y: 0};
    const Axis = (pointValue) => (
        <polyline
          fill="none"
          stroke="#ccc"
          strokeWidth=".5"
          points={pointValue}
        />
    )

    
    const maximumXFromData = Math.max(...props.data.map(e => e.x)) + 1;
    const maximumYFromData = Math.max(...props.data.map(e => e.y));
    const minimumYFromData = Math.min(...props.data.map(e => e.y));
    const numberOfHorizontalGuides = props.horizontalGuideLines;
    const numberOfVerticalGuides = props.verticalGuideLines;
    const STROKE = 2;
    const chartWidth = props.width - props.padding * 2;
    const chartHeight = props.height - props.padding * 2;
    
    const XAxis = () => <Axis points={`${props.padding},${props.height - props.padding} ${props.width - props.padding},${props.height - props.padding}`}/>;
    const YAxis = () => <Axis points={`${props.padding},${props.padding} ${props.padding},${props.height - props.padding}`} />;

    const points = props.data.map((element, index) => {
        const x = (element.x / maximumXFromData) * (chartWidth - 20) + props.padding * 2 - 20;
        const y = props.yAxisBetweenRange 
        ? chartHeight - (((element.y - minimumYFromData) / (maximumYFromData - minimumYFromData)) * chartHeight ) + props.padding 
        : chartHeight - ((element.y / maximumYFromData) * chartHeight ) + props.padding;
        if (props.data.length - 1 === index) {
          lastLineChartData = {x, y};
        }
        return `${x},${y}`;
    }).join(' ');

    const VerticalGuides = () => {
        const guideCount = numberOfVerticalGuides || props.data.length - 1;
        const startY = props.padding;
        const endY = props.height - props.padding;
    
        return new Array(guideCount+1).fill(0).map((_, index) => {
          const ratio = (index) / guideCount;
          const xCoordinate = props.padding + ratio * (props.width - props.padding * 2);
          return (
            <React.Fragment key={'verticalGuide' + index}>
              <polyline
                fill="none"
                stroke="#ccc"
                strokeWidth=".5"
                points={`${xCoordinate},${startY} ${xCoordinate},${endY}`}
              />
            </React.Fragment>
          );
        });
      };

    const HorizontalGuides = () => {
        const startX = props.padding * 2;
        const endX = props.width - props.padding;

        return new Array(numberOfHorizontalGuides+1).fill(0).map((_, index) => {
          const ratio = (index) / numberOfHorizontalGuides;
          const yCoordinate = chartHeight - chartHeight * ratio + props.padding;
    
          return (
            <polyline
              key={'horizontalGuide' + index}
              fill="none"
              stroke={'#A5B5AF'}
              strokeWidth=".5"
              strokeDasharray={2}
              points={`${startX},${yCoordinate} ${endX},${yCoordinate}`}
            />
          );
        });
    };

    const LabelsXAxis = () => {
        const y = props.height - props.padding + props.fontSize * 2;
    
        return props.data.map((element, index) => {
          const x = ((element.x) / maximumXFromData) * (chartWidth - 30) + props.padding * 2 - 20;
          return (
            <text
            key={'labelX' + index}
              x={x}
              y={y}
              style={{ fill: '#ccc', fontSize: props.fontSize, fontFamily: 'RubikRegular' }}
            >
              {element.label}
            </text>
          );
        });
    };

    const LabelsYAxis = () => {
        const PARTS = numberOfHorizontalGuides;
        const labelValue = (index) => {
          if(props.yAxisBetweenRange)  {
            return parseFloat(((maximumYFromData-minimumYFromData) * (index / PARTS)) + minimumYFromData).toFixed(props.precision)
          } else {
            return parseFloat(maximumYFromData * (index / PARTS)).toFixed(props.precision)
          }
        }

        return new Array(PARTS+1).fill(0).map((_, index) => {
          const x = props.padding;
          const ratio = (index) / numberOfHorizontalGuides;
          const yCoordinate = chartHeight  - chartHeight * ratio + props.padding;

          return (
            <text
            key={'labelY' + index}
              x={x}
              y={yCoordinate}
              style={{ fill: '#ccc', fontSize: props.fontSize, fontFamily: 'RubikRegular' }}
            >
              {labelValue(index)}
            </text>
          );
        });
    };

    return (
        <div>
            <S.LineChartContainer margin={props.padding + 'px'}>
              <S.LineChartHeading margin={props.padding + 'px'}>{props.heading}</S.LineChartHeading>
              <span style={{flexGrow: 1}}> </span>
              <S.LineChartStatus marginTop={props.padding + 'px'}>
                {props.status} <br/>
                <S.LineChartDescription>{props.description}</S.LineChartDescription>
              </S.LineChartStatus>
            </S.LineChartContainer>
            <svg
                viewBox={`0 ${props.fontSize * 2} ${props.width} ${props.height}`}
                >
                <XAxis />
                <LabelsXAxis />
                <YAxis />
                <LabelsYAxis />
                {numberOfVerticalGuides && <VerticalGuides />}
                <HorizontalGuides />

                <polyline
                    fill="none"
                    stroke="#1C9D87"
                    strokeWidth={STROKE}
                    points={points}
                />
                <g id="Ellipse_356" data-name="Ellipse 356" fill="#fff" stroke="#1c9d87" stroke-width="2" transform={`translate(${lastLineChartData.x - 2},${lastLineChartData.y - 6})`} >
                  <circle cx="7.5" cy="7.5" r="7.5" stroke="none"/>
                  <circle cx="7.5" cy="7.5" r="6.5" fill="none"/>
                </g>
            </svg>
        </div>
    )
}

export default LineChart
