import styled from 'styled-components';

export const LineChartContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: ${props => props.margin};;
`;

export const LineChartHeading = styled.div`
    width: auto;
    text-align: left;
    margin: ${props => props.margin + " 0px 0px " + props.margin};
`;

export const LineChartStatus = styled.span`
    font-size: 18px;
    color: #2ECF96;
    text-align: right;
    margin-top:  ${props => props.marginTop};
`;

export const LineChartDescription = styled.span`
    font-size: 11px;
    color: #44554C;
    font-family: RubikRegular;
`;