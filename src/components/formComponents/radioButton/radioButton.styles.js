import styled from 'styled-components';

export const CustomRadioButton = styled.input.attrs({ type: 'radio'})`
    width: 26px;
    height: 26px;
    /* border-color: rgba(220, 225, 224, .1);
    color: #1C9D87; */

    &:checked,
    &:not(:checked) {
        position: absolute;
        left: -9999px;
    }

    &:checked + label,
    &:not(:checked) + label {
        position: relative;
        padding-left: 28px;
        cursor: pointer;
        line-height: 20px;
        display: inline-block;
        color: #666;
    }

    &:checked + label:before,
    &:not(:checked) + label:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 26px;
        height: 26px;
        border: 1px solid rgba(220, 225, 224, 1);
        border-radius: 100%;
        background: #fff;
    }

    &:checked + label:after,
    &:not(:checked) + label:after {
        content: '';
        width: 20px;
        height: 20px;
        background: rgba(28, 157, 135, .6);
        position: absolute;
        top: 4px;
        left: 4px;
        border-radius: 100%;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }

    &:not(:checked) + label:after {
        opacity: 0;
        -webkit-transform: scale(0);
        transform: scale(0);
    }

    &:checked + label:after {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1);
    }
`;