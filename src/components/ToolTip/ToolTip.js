import React from 'react';
import * as S from './toolTip.styles';

const ToolTip = (props) => {
    return (
        <S.Tooltip>
            {(props.value.length > props.maxCharacter) ? props.value.substring(0, props.maxCharacter-1) + '...' : props.value}
            <S.TooltipText >{props.value}</S.TooltipText>
        </S.Tooltip>
    )
}

export default ToolTip
