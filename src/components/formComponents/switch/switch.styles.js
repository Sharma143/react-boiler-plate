import styled from 'styled-components';

export const SwitchWrapper = styled.span`
    position: relative;
    margin-left: 20px;
`;

export const SwitchContainer = styled.span`
    position: absolute;
	top: 50%; left: 50%;
	-webkit-transform: translate3d( -50%, -50%, 0 );
	transform: translate3d( -50%, -50%, 0 );
`;

export const CustomSwitch = styled.input.attrs({ type: 'checkbox'})`
    width: ${props => props.small ? "32px" :"40px"};
    height: ${props => props.small ? "19px" :"24px"};
    left: 0px;
    position: absolute;
	opacity: 0;
    cursor: pointer;
    margin-left: ${props => props.small ? "-32px" :"-40px"};
    
    & + div {
        vertical-align: middle;
        width: ${props => props.small ? "32px" :"40px"};
        height: ${props => props.small ? "19px" :"24px"};
        border-radius: 999px;
        background-color: white;
        border: 1px solid #2ECF96;
        -webkit-transition-duration: .4s;
        transition-duration: .4s;
        -webkit-transition-property: background-color, box-shadow;
        transition-property: background-color, box-shadow;
        cursor: pointer;
        margin-left: -40px;
    }

    & + div span {
        position: absolute;
        font-size: 1.6rem;
        color: white;
        margin-top: 12px;
    }

    & + div span:nth-child( 1 ) {
        margin-left: 15px;
    }

    & + div span:nth-child( 2 ) {
        margin-left: 55px;
    }

    &:checked + div {
        width: ${props => props.small ? "32px" :"40px"};
        background-position: 0 0;
        background-color: #3b89ec;
    }

    & + div {
        width: ${props => props.small ? "32px" :"40px"};
        height: ${props => props.small ? "19px" :"24px"};
    }

    &:checked + div {
        background-color: #2ECF96;
    }

    & + div > div {
        float: left;
        width: ${props => props.small ? "17px" :"22px"};
        height: ${props => props.small ? "17px" :"22px"};
        border-radius: inherit;
        border: 1px solid #2ECF96;
        background: #ffffff;
        -webkit-transition-timing-function: cubic-bezier(1,0,0,1);
        transition-timing-function: cubic-bezier(1,0,0,1);
        -webkit-transition-duration: 0.4s;
        transition-duration: 0.4s;
        -webkit-transition-property: transform, background-color;
        transition-property: transform, background-color;
        pointer-events: none;
    }

    &:checked + div > div {
        -webkit-transform: translate3d(20px, 0, 0);
        transform: translate3d(20px, 0, 0);
        background-color: #ffffff;
    }

    &:checked + div > div {
        -webkit-transform: translate3d(17px, 0, 0);
        transform: translate3d(17px, 0, 0);
    }
`;