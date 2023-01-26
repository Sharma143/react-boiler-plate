import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`;

export const CustomInput = styled.input`
    background-color: ${props => props.filled ? '#15212F' : 'white'};
    color: var(--white);
    font-size: 18px;
    font-weight: bold;
    font-family: DMSansRegular;
    letter-spacing: 1px;
    border: ${props => {
        if(props.error) return "1px solid var(--red)";
        else if(props.filled) return 'none';
        else return "#15212F 2px solid";
    }};
    width: 100%;
    padding: ${props => props.filled ? '20px' : "9px 15px"};
    border-radius: 18px;
    outline: none;
    margin: 0 auto;

    :focus {
        outline: none;
        border: ${props => props.error ? "1px solid var(--red)" : "1px solid var(--yellow)"};
    }

    :active {
        border: ${props => props.error ? "1px solid var(--red)" : "1px solid var(--yellow)"};
    }

    :placeholder {
        opacity: .5;
    }
`;

export const PasswordShowOrHide = styled.img`
    width: 24px;
    display: flex;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
`;