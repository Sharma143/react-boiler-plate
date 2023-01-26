import React from "react";
import * as S from './donutProgress.styles';
import {getRandomValue} from 'configs/utils';

function DonutProgress({width, gradient, percent, style, target}) {
    const percentValue = percent + ", 100";
    const SecondCircleValue = percent === 0 ? 0 : percent + getRandomValue(95 - percent) + ", 100";
  return (
      <S.DonutProgressChartContainer >
        <S.CircularChart viewBox="0 0 36 36" width={width} style={style}>
            <defs>
                <linearGradient id="grad1" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#37e3a8"/>
                    <stop offset="1" stop-color="#1c9d87"/>
                </linearGradient>
            </defs>
            <S.DefaultCircle
                strokeDasharray="100, 100"
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            {percent !== 0 && <S.SecondCircle
                strokeDasharray={SecondCircleValue}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />}
            {percent !== 0 && <S.MainProgressCircle
                stroke={gradient ? "url(#grad1)" : "white"}
                strokeDasharray={percentValue}
                d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
            />}
        </S.CircularChart>
        <S.DonutProgressValue isZero={percent === 0} gradient={gradient} isHundred={percent === 100} >{percent}</S.DonutProgressValue>
        {!gradient && percent !== 0 && <S.DonutProgressValueSubHeading>Ziel: {target}</S.DonutProgressValueSubHeading>}
        {gradient && <S.DonutProgressGradientValueSubHeading>
            <S.DonutProgressGradientValueMiniHeading>Aktueller</S.DonutProgressGradientValueMiniHeading>
            Health Score
        </S.DonutProgressGradientValueSubHeading>}
    </S.DonutProgressChartContainer>
  )
}

export default DonutProgress;
