import React from 'react';
import * as S from "./dropdown.styles";

const Dropdown = ({options, width, id, onChange, disabled, value, style, name, margin, ...props}) => {
    return (
        <S.DropDownWrapper width={width} id={id} name={name} onChange={onChange} value={value} margin={margin} disabled={disabled} style={style}>
            {options.map(option => {
                return (
                    <S.DropDownOption key={option.id} value={option.value} {...props}>{option.value}</S.DropDownOption>
                )
            })}
        </S.DropDownWrapper>
    )
}

export default Dropdown
