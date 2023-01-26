import React from 'react';
import * as S from './timePicker.styles';
import DownArrowIcon from "assets/images/downArrow.svg";

const TimePicker = (props) => {
    return (
        <S.TimePickerContainer>
            <S.CustomTimePicker
                mode='24h'
                defaultValue={props.value}
                onChange={props.onChange}
            />
            <S.DownArrowIconContainer src={DownArrowIcon} alt="dropDown" />
        </S.TimePickerContainer>
    )
}

export default TimePicker
