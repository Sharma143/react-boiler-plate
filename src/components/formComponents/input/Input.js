import React, {useState} from 'react';
import * as S from "./input.styles";

import ErrorMessage from 'components/formComponents/errorMessage/ErrorMessage';

// Images
import showPasswordImage from 'assets/images/showPassword.svg';
import hidePasswordImage from 'assets/images/hidePassword.svg';

const Input = ({type, error, noErrMsg, ...props}) => {
    const [showPassword, setShowPassword] = useState(false)

    const isPassword = type === 'password';
    const typeCheck = () => {
        if(isPassword) {
            if(showPassword) return 'text'
            else return 'password'
        }
        return type;
    }
    return (
        <>
            <S.InputContainer>
                <S.CustomInput error={error} type={typeCheck()} {...props} />
                {isPassword && <S.PasswordShowOrHide 
                    src={showPassword ? hidePasswordImage : showPasswordImage} 
                    alt="show/hide"
                    onClick={() => setShowPassword(!showPassword)}
                />}
            </S.InputContainer>
            {error && !noErrMsg && <ErrorMessage error={error} />}
        </>
    )
}

export default Input
