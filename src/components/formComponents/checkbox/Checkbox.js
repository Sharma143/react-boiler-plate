import React, {useState} from 'react';
import * as S from "./checkbox.styles";

const Checkbox = ({margin, isChecked, onChange, ...props}) => {
    const [checked, setChecked] = useState(isChecked);

    return (
        <S.CheckBoxContainer margin={margin}>
            <S.CustomCheckBox checked={checked} {...props} onChange={() => console.log("")}/>
            <label onClick={() => {onChange(!checked);setChecked(!checked)}}></label>
        </S.CheckBoxContainer>
    )
}

export default Checkbox;
