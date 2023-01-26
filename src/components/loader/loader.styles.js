import styled from "styled-components";

export const LoaderContainer = styled.div`
    position: relative;

    & > span {
        position: absolute;
        left: ${props => props.left ? props.left : "50%"};
        top: ${props => props.top};
    }
`;
