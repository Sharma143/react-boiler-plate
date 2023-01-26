import styled from "styled-components";
import { RegistrationSubHeading } from "pages/registration/registration.styles";

export const AccordionContainer =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;  
`;

export const Accordion =styled.div`
    width: 355px;
    height: ${props => props.active ? 'fit-content' : '54px'};
    background-color: white;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 0px auto 10px;
    text-align: center;
    position: relative;
`;

export const AccordionHeading =styled(RegistrationSubHeading)`
    font-size: 16px;
    padding: 0 30px;
    margin-bottom: 20px;
    line-height: 54px;
    text-align: left;
`;

export const AccordionIcon =styled.img`
    position: absolute;
    right: 30px;
    top: 23px;
`;

export const AccordionContent = styled.div`
    height: fit-content;
    text-align: left;
    padding: 0 30px 18px;
    font-size: 14px;
    font-family: RubikRegular;
    color: #44554C;
    display: ${props => props.active ? 'block' : 'none'};
`;

export const NoDataFound = styled(AccordionContent)`
    text-align: center;
`;