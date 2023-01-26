import styled from "styled-components";

export const CustomButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: ${props => props.margin};
`;

export const CustomButton = styled.button`
    background-color: ${props => props.outlined ? "white" : props.color};
    background-image: ${props => {
        if(props.gradient && props.disabled) return 'linear-gradient(60deg, rgba(46, 207, 150, .2), rgba(28, 157, 135, .4)) !important'
        else if (props.gradient) return props.gradient;
        else return 'none';
    }};
    color: ${props => {
        if(props.textColor) return props.textColor 
        else if(props.outlined) return props.color 
        else return "white"
    }};
    border: ${props => props.outlined ? "2px solid " + props.color : "none"};
    padding: 20px;
    border-radius: 16px;
    font-weight: bold;
    font-size: 16px;
    cursor: pointer;
`;