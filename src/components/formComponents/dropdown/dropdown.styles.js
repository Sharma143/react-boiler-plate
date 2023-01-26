import styled from 'styled-components';

export const DropDownWrapper = styled.select`
    height: 35px;
    min-width: 80px;
    width: ${props => props.width};
    padding: 0 15px;
    margin: ${props => props.margin ? props.margin : "0 auto 1rem"};
    background-color: white;
    border: 1px solid #DCE1E0;
    color: #A5B5AF;
    border-radius: 5px;
    font-family: RubikRegular;
`;

export const DropDownOption = styled.option``;