import React, {useState, useEffect} from 'react';
import * as S from "./increment.styles";
import Input from '../input/Input';

const IncrementInput = (props) => {
    const [value, setValue] = useState(props.value);
    const [defaultValue, setDefaultValue] = useState(value + " " + props.inputMeasure);
    const inputWidth = props.width - 80 + 'px';
    
    useEffect(() => {
        changeInputValue()
    }, [defaultValue])
    

    const changeInputValue = () => document.getElementById(props.id).value = defaultValue;

    const handleIncrement = () => {
        let Value = parseInt(value) + 1;
        if(props.maxLimit) {
            if(value < props.maxLimit) {
                setDefaultValue(Value + " " + props.inputMeasure)  
                setValue(Value);
                props.setData(Value)
            }
        } else {
            setDefaultValue(Value + " " + props.inputMeasure)  
            setValue(Value);
            props.setData(Value)
        }
    }
    const handleDecrement = () => {
        if(value > 0) {
            let Value = parseInt(value)-1;
            setDefaultValue(Value + " " + props.inputMeasure)
            setValue(Value);
            props.setData(Value)
        }  
    }
    return (
        <S.IncrementInputContainer width={props.width}>
            <S.IncrementInputButton onClick={handleDecrement}>-</S.IncrementInputButton>
            <Input 
                type='text'
                id={props.id}
                value={value}
                onFocus={(e) => e.target.value = value}
                onChange={(e) => {
                    setValue(e.target.value)
                    props.setData(e.target.value)
                }}
                onBlur={(e) => e.target.value = value + " " + props.inputMeasure}
                style={{width: inputWidth, padding: "9px 0", textAlign: "center"}}
                disabled={props.disabled}
            />
            <S.IncrementInputButton onClick={handleIncrement}>+</S.IncrementInputButton>
        </S.IncrementInputContainer>
    )
}

export default IncrementInput
