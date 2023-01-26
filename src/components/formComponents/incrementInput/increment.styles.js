import styled from "styled-components";

export const IncrementInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    width: ${props => props.width};

`;

export const IncrementInputButton = styled.div`
    width: 35px;
    height: 35px;
    background-color: #2ECF96;
    color: white;
    margin: 5px;
    line-height: 35px;
    cursor: pointer;
    border-radius: 5px;
    font-size: 20px;
`;