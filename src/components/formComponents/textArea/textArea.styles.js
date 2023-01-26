import styled from 'styled-components';

export const TextAreaContainer = styled.span`
    
`;

export const CustomTextArea = styled.textarea`
    resize: none;
    width: 100%;
    border-radius: 5px;
    border: rgba(165,181,175,.15) 2px solid;
    color: #A5B5AF;
    font-size: 14px;
    font-family: RubikRegular;

    ::placeholder {
        opacity: .5;
    }

    ::focus {
        border: none;
        overflow: hidden;
        outline:none;
    }

    ::focus-visible {
        border: none;
        overflow: hidden;
        outline:none;
    }
`;