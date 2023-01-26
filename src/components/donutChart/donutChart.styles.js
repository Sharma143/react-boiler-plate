import styled from 'styled-components';

const color1 = '#2ECF96';
const color2 = '#FFC400';
const color3 = '#C74343';
const color4 = 'blue';
const color5 = 'orange';

export const DonutChartContainer = styled.div``;

export const DonutChartTitle = styled.div``;

export const DonutChartInnerContainer = styled.div``;

export const DonutChartSegment = styled.path`

    &:nth-child(5n + 1) {
        fill: ${color1};
    }
    &:nth-child(5n + 2) {
        fill: ${color2};
    }
    &:nth-child(5n + 3) {
        fill: ${color3};
    }
    &:nth-child(5n + 4) {
        fill: ${color4};
    }
    &:nth-child(5n + 5) {
        fill: ${color5};
    }
`;

export const DonutChartLegend = styled.div`
    list-style: none;
    padding: 0;
    margin: 30px 0 0 -140px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & > div {
        margin-bottom: 0.5em;
        margin-right: 30px;
        display: flex;
        flex-direction: row;
        

        & > span {
            margin-right: 0.5em;
        }

        &:before {
            content: "";
            display: inline-block;
            width: 1em;
            height: 1em;
            margin-right: 0.5em;
            vertical-align: middle;
        }
        &:nth-child(5n + 1)::before {
            background: ${color1};
        }
        &:nth-child(5n + 2)::before {
            background: ${color2};
        }
        &:nth-child(5n + 3)::before {
            background: ${color3};
        }
        &:nth-child(5n + 4)::before {
            background: ${color4};
        }
        &:nth-child(5n + 5)::before {
            background: ${color5};
        }
    }
`;