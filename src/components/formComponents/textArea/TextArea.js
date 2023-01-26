import React from 'react';
import * as S from './textArea.styles';

const TextArea = ({rows, ...props}) => {
    return (
        <S.TextAreaContainer>
            <S.CustomTextArea rows={props.rows} {...props} />
        </S.TextAreaContainer>
    )
}

export default TextArea
