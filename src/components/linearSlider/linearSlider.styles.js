import styled from 'styled-components';

export const LinearSliderContainer = styled.div`
    position: relative;
`;

export const LinearSliderLabel = styled.span`
    font-size: 14px;
    font-family: RubikRegular;
    color: #44554C;
    position: absolute;
    left: 53px;
    bottom: -20px;
`;

export const LinearSliderLabel2 = styled(LinearSliderLabel)`
    left: 318px;
`;

export const LinearSliderLabel3 = styled(LinearSliderLabel)`
    left: auto;
    right: 53px;
`;