import React from 'react';
import * as S from "./card.styles";

const Card = (props) => {
    return (
        <S.CardContainer
            width={props.width}
            height={props.height}
            textAlign={props.textAlign}
            margin={props.margin}
            style={props.styles}
        >
            {props.children}
        </S.CardContainer>
    )
}

export default Card;
