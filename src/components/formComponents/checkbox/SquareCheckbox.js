import React, {useState} from 'react';
import * as S from "./checkbox.styles";

const SquareCheckbox = ({margin, isChecked, ...props}) => {
    const [checked, setChecked] = useState(isChecked);

    return (
        <S.SquareCheckBoxContainer margin={margin} rounded={props.rounded} filled={props.filled}>
            <S.CustomSquareCheckBox checked={checked} onChange={(e) => console.log('')} {...props}/>
            <label onClick={() => setChecked(!checked)}></label>
        </S.SquareCheckBoxContainer>
    )
}

export default SquareCheckbox;
