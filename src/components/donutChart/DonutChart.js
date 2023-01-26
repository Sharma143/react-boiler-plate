import React from 'react';
import * as S from './donutChart.styles';

const DonutChart = (props) => {
    const size = 100;
    const hole = 75;
    const gapSize = 1;
    const center = size / 2;
    const thickness = (size - hole) / 2;
    const radiusOuter = size / 2;
    const radiusInner = radiusOuter - thickness;


    const d2r = d => d * (Math.PI / 180);
    const r2d = r => r / (Math.PI / 180);
    const angleForArcLength = (arcLength, atRadius) => arcLength / atRadius;
    const gapAngleOffsetInner = r2d(angleForArcLength(gapSize, radiusInner));
    const gapAngleOffsetOuter = r2d(angleForArcLength(gapSize, radiusOuter));
    const minimumAngleDeg = r2d(angleForArcLength(gapSize * 2, radiusInner));
    const minimumValue = minimumAngleDeg / 360;
    
    const coords = (deg, r) => {
        const rad = d2r(deg);
      
        return [center - Math.cos(rad) * r, center - Math.sin(rad) * r];
      };

    const makeSegment = ({ paths, subtotal }, { percent, color }, i) => {
        const { colors = [] } = props;
        const startAngle = subtotal * 360 + 90;
        const endAngle = startAngle + percent * 360;
    
        const useGap = percent >= minimumValue;
        const innerGap = useGap ? gapAngleOffsetInner : 0;
        const outerGap = useGap ? gapAngleOffsetOuter : 0;
    
        const startAngleInner = startAngle + innerGap;
        const startAngleOuter = startAngle + outerGap;
        const endAngleInner = endAngle - innerGap;
        const endAngleOuter = endAngle - outerGap;
    
        const [x1, y1] = coords(startAngleInner, radiusInner);
        const [x2, y2] = coords(startAngleOuter, radiusOuter); 
        const [x3, y3] = coords(endAngleOuter, radiusOuter);
        const [x4, y4] = coords(endAngleInner, radiusInner);
    
        const largeArc = percent > 0.5 ? 1 : 0;
        const sweepOuter = 1;
        const sweepInner = 0;
    
        const commands = [
            `M${x1} ${y1}`,
            `L${x2} ${y2}`,
            //`C${x2} ${y2} ${x2} 0 ${x2} 0`,
            `A${radiusOuter} ${radiusOuter} 0 ${largeArc} ${sweepOuter} ${x3} ${y3}`,
            `L${x4} ${y4}`,
            `A${radiusInner} ${radiusInner} 0 ${largeArc} ${sweepInner} ${x1} ${y1}`
        ];
    
        const fill = color || colors[i % colors.length];
        const fillProp = fill ? { fill } : {};
    
        paths.push(
          <S.DonutChartSegment
            key={i}
            {...fillProp}
            stroke="none"
            d={commands.join(" ")}
          />
        );
    
        return {
          paths,
          subtotal: subtotal + percent
        };
      };
    
      const computePercentages = () => {
        const { series } = props;
    
        const filtered = (series || []).filter(({ value }) => value > 0);
        const total = filtered.reduce((t, { value = 0 }) => t + value, 0);
    
        return filtered.map(item => ({
          ...item,
          percent: item.value / total
        }));
      }

      const items = computePercentages();

    return (
        <S.DonutChartContainer>
        {props.title && <S.DonutChartTitle>{props.title}</S.DonutChartTitle>}
        <S.DonutChartInnerContainer>
          <svg viewBox={`0 0 ${size} ${size}`}>
            {items.reduce(makeSegment, { paths: [], subtotal: 0 }).paths}
          </svg>
        </S.DonutChartInnerContainer>
        <S.DonutChartLegend>
          {items.map(({ value, percent, label }) => (
            <div key={`${value}-${label}`}>
              <span>{label}</span>
              <span>({Math.round(percent * 100)}%)</span>
            </div>
          ))}
        </S.DonutChartLegend>
      </S.DonutChartContainer>
    )
}

export default DonutChart
