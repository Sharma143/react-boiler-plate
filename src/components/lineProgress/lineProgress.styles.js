import styled from 'styled-components';

export const DonutProgressChartContainer = styled.span`
    position: relative;
`;

export const LinearChart = styled.svg`
    display: block;
    margin: 0 auto;
    max-width: ${props => props.width? props.width : "66.66px"};
    max-height: 250px;
`;