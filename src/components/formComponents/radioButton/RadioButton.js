import React from 'react';
import * as S from './radioButton.styles';

const RadioButton = (props) => {
    return (
        <>
            <S.CustomRadioButton {...props} onChange={() => console.log('')} />
            <label htmlFor={props.id}></label>
        </>
    )
}

export default RadioButton
