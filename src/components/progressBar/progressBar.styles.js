import styled from "styled-components";

export const ProgressBarContainer = styled.div`
    height: 35px;
    width: 100%;
    background-color: rgb(0, 0, 0, .15);
    position: absolute;
    top: 0;
`;

export const ProgressBarFiller = styled.div`
    height: 100%;
    width: ${props => props.width ? props.width : '0%'};
    background-color: rgb(0, 0, 0, .15);
    border-radius: inherit;
    text-align: right;
`;

export const ProgressBarLabel = styled.span`
    padding: 0 15px;
    color: #FFF;
    line-height: 35px;
    font-family: RubikRegular;
    font-size: 15px;
`;