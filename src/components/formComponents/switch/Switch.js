import React from 'react';
import * as S from "./switch.styles";

const Switch = ({color, switchedOn, small, ...props}) => {
    return (
        <S.SwitchWrapper>
            <S.SwitchContainer>
                <label>
                    <S.CustomSwitch small={small} checked={switchedOn} {...props} />
                    <div>
                        <div></div>
                    </div>
                </label>
            </S.SwitchContainer>
        </S.SwitchWrapper>
    )
}

export default Switch
