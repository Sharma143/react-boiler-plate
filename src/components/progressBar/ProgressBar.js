import React from 'react';
import * as S from './progressBar.styles';

const ProgressBar = (props) => {
    return (
        <S.ProgressBarContainer>
            <S.ProgressBarFiller width={props.progress}>
                <S.ProgressBarLabel>{props.progress}</S.ProgressBarLabel>
            </S.ProgressBarFiller>
        </S.ProgressBarContainer>
    )
}

export default ProgressBar
