import React from 'react';
import * as S from './button.styles';

const Button = (props) => {
    const {margin, id, absolute, ...otherProps} = props;
    return (
        <S.CustomButtonContainer margin={margin} style={absolute}>
            <S.CustomButton id={props.id} {...otherProps} />
        </S.CustomButtonContainer>
    )
}

export default Button
