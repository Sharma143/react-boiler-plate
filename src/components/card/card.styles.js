import styled from "styled-components";

export const CardContainer = styled.div`
    width: ${props => props.width};
    min-height: ${props => props.height};
    margin: ${props => props.margin};
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 3px #F5FAF9;
    text-align: ${props => props.textAlign};
    position: relative;
`;