import styled from 'styled-components';

export const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginInnerContainer = styled.div`
    width: 400px;
    height: 500px;
    background: grey;
    padding: 50px;
    border-radius: 20px;
    height: auto;
`;

export const LoginInputContainer = styled.div`
    margin: 0 0 16px 0;
`;

export const CompanyLogoContainer = styled.div`
    margin: 90px 100px 100px;
    display: flex;
    justify-content: center;
`;

export const CompanyLogo = styled.img`
    margin: auto 56px;
`;

export const WelcomeHeading = styled.div`
    font-size: 32px;
`;

export const WelcomeSubHeading = styled.div`
    font-size: 16px;
    margin: 12px 0 32px 0;
    color: var(--whiteOpacity);
    line-height: 22px;
`;

export const ForgotPassword = styled.div`
    font-size: 16px;
    color: var(--yellow);
    text-align: right;
    cursor: pointer;
`;

export const LoginButtonContainer = styled.div`
    margin: 50px 0 0 0;
`;

export const NoAccountContainer = styled.div`
    margin: 24px 0 50px 0;
    text-align: center;
`;

export const SignUpButton = styled.span`
    margin: 0 0 0 5px;
    color: var(--yellow);
    cursor: pointer;
`;

export const LoginFillEmptySpaces = styled.div`
    height: calc(100vh - 800px);
`;