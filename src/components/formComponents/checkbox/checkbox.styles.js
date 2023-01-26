import styled from 'styled-components';

export const CheckBoxContainer = styled.span`
    position: relative;
    margin: ${props => props.margin};

    & > label {
        background-color: #fff;
        border: 1px solid #DCE1E0;
        border-radius: 50%;
        cursor: pointer;
        height: 18px;
        left: 0;
        position: absolute;
        top: 0;
        width: 18px;
        margin: auto;

        &:after {
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: "";
            height: 6px;
            left: 2px;
            opacity: 0;
            position: absolute;
            top: 3px;
            transform: rotate(-45deg);
            width: 12px;
        }
    }
`;

export const CustomCheckBox = styled.input.attrs({ type: 'checkbox'})`
    visibility: hidden;
    height: 20px;
    width: 20px;
    top: 0;

    &:checked + label {
        background-color: #2ECF96;
        border-color: #2ECF96;
    }
    &:checked + label:after {
        opacity: 1;
    }
`;

// Square Checkbox
export const SquareCheckBoxContainer = styled.span`
    position: relative;
    margin: ${props => props.margin};

    & > label {
        background-color: ${props => props.filled ? props.filled : '#fff'};
        border: ${props => props.filled ? '1px solid ' + props.filled : '1px solid #DCE1E0'};
        border-radius: ${props => props.rounded ? props.rounded : '0px'};
        cursor: pointer;
        height: 16px;
        left: 0;
        position: absolute;
        top: 0;
        width: 16px;
        margin: auto;

        &:after {
            border: 2px solid #fff;
            border-top: none;
            border-right: none;
            content: "";
            height: 4px;
            left: 1px;
            opacity: 0;
            position: absolute;
            top: 3px;
            transform: rotate(-45deg);
            width: 12px;
        }
    }
`;

export const CustomSquareCheckBox = styled.input.attrs({ type: 'checkbox'})`
    visibility: hidden;
    height: 20px;
    width: 20px;
    top: 0;

    &:checked + label {
        background-color: #2ECF96;
        border-color: #2ECF96;
    }
    &:checked + label:after {
        opacity: 1;
    }
`;