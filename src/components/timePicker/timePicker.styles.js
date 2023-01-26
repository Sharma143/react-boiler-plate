import styled from 'styled-components';
import TimeInput from 'material-ui-time-picker';

export const TimePickerContainer = styled.span`
    position: relative;
`;

export const CustomTimePicker = styled(TimeInput)`
    width: 96px;
    border-bottom: none;
    
    &.MuiInput-underline::before, &.MuiInput-underline::after {
        transition: none;
        border-bottom: none !important;
    }

    & > input {
        padding-left: 10px;
        color: #A5B5AF;
        border: 2px solid rgba(165, 181, 175, .15);
        border-radius: 5px;
        font-size: 14px;
        height: 20px;
    }
`;

export const DownArrowIconContainer = styled.img`
    position: absolute;
    right: 15px;
    top: 15px;
`;