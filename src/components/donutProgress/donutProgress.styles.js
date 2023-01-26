import styled from 'styled-components';

export const DonutProgressChartContainer = styled.span``;

export const CircularChart = styled.svg`
    display: block;
    margin: 0 auto;
    max-width: ${props => props.width? props.width : "66.66px"};
    max-height: 250px;
`;

export const DefaultCircle = styled.path`
    stroke: rgba(20, 44, 31, .1);
    fill: none;
    stroke-width: 4;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
`;

export const SecondCircle = styled.path`
    stroke: rgba(20, 44, 31, .2);
    fill: none;
    stroke-width: 4;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
`;


export const MainProgressCircle = styled.path`
    fill: none;
    stroke-width: 4;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
`;

export const DonutProgressValue = styled.div`
    position: absolute;
    top: ${props => {
        if(props.gradient) {
            return "60px"
        } else if (props.isZero) return "24px" 
        else return "16px"
    }};
    right: ${props => {
        if(props.gradient) {
            if(props.isHundred) return "70px"
            return "80px"
        }
        else if (props.isZero) return "47px"
        else if(props.isHundred) return "38px"
        else return "42px"
    }};
    color: ${props => props.gradient ? "#142C1F" : "white"};
    font-size: ${props => props.gradient ? "38px" : "16px"};
`;

export const DonutProgressValueSubHeading = styled.div`
    position: absolute;
    text-align: center;
    top: 35px;
    right: 30px;
    color: rgba(255, 255, 255, .6);
    font-size: 10px;
    width: 45px;
`;

export const DonutProgressGradientValueSubHeading = styled.div`
    position: absolute;
    top: 110px;
    right: 54px;
    color: rgba(68, 85, 76, .6);
    font-size: 13px;
    width: 100px;
`;

export const DonutProgressGradientValueMiniHeading = styled.div`
    font-family: RubikRegular;
`;