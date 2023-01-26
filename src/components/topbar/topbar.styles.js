import styled from "styled-components";
import Button from 'components/formComponents/button/Button';

export const TopbarContainer = styled.nav`
    position: relative;
`;

export const TopbarImage = styled.img`
    width: 104%;
    margin: ${props => props.progress ? "-2% 0 0 -3%" : "-4% 0 0 -3%"};

    @media only screen and (min-width: 1440px) {
        margin: ${props => props.progress ? "-4% 0 0 -3%" : "-6% 0 0 -3%"};
    }
`;

export const TopbarLogo = styled.img`
    position: absolute;
    z-index: 10;
    margin: auto 20px;
    left: 4%;
    top: ${props => props.progress ? "3rem" : "1rem"};

    @media only screen and (min-width: 1150px) {
        top: ${props => props.progress ? "4rem" : "2rem"};
    }
`;

export const TopBarButtonContainer = styled.span`
    position: absolute;
    top: ${props => props.progress ? "4rem" : "2rem"};
    right: 45px;
    display: flex;
    flex-direction: row;

    @media only screen and (min-width: 1150px) {
        top: ${props => props.progress ? "5rem" : "3rem"};
    }
`;

export const HealthReportCloseButton = styled(Button)`
    width: 43px;
    color: white;
    margin-right: 10px;
`;

export const FurtherButton = styled(Button)`
    line-height: 20px;
    width: ${props => props.noButtonArrow ? "80px" : "115px"};
    margin-right: 10px;
    position: relative;
    text-align: left;
`; 

export const NextButtonForwardArrow = styled.img`
    position: absolute;
    right: 20px;
    top: 17px;
`;

export const BackButton = styled(Button)`
    line-height: 20px;
    background-color: transparent;
    opacity: .7;
    margin-right: 10px;
`;

export const HealthReportContainer = styled.div`
    position: absolute;
    left: 20%;
    top: 55px;
    display: flex;
    flex-direction: row;

    @media only screen and (min-width: 1150px) {
        top: 4rem;
    }
`;

export const HealthReportSeparationLine = styled.div`
    height: 48px;
    border-left: 2px solid rgba(20, 44, 31, .1);
    width: 1px;
    margin-top: 10px;
`;

export const HealthReportGraphContainer = styled.div`
    width: 105px;
    text-align: center;
    position: relative;
`;

export const HealthReportCurrentCoachingContainer = styled.div`
    width: 200px;
    font-size: 14px;
    margin: 15px 0 0 20px;
    color: rgba(255, 255, 255, .7);
    font-family: RubikRegular;
`;

export const HealthReportTargetBudgetContainer = styled(HealthReportCurrentCoachingContainer)`
    width: 115px;
`;

export const HealthReportValue = styled.div`
    margin-top: 5px;
    color: rgba(255, 255, 255, 1);
    font-family: RubikMedium;
`;

export const TargetBudgetValue = styled.span`
    margin-top: 5px;
    color: rgba(255, 255, 255, .7);
    font-family: RubikRegular;
    font-size: 12px;
`;