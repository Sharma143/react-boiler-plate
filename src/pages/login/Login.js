import React from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import * as S from './login.styles';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Components
import Input from 'components/formComponents/input/Input';
import Button from 'components/formComponents/button/Button';
import Loader from "components/loader/Loader";

// Redux
import * as AuthActions from "redux/auth/auth.actions";

const Login = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const loading = useSelector(state => state.auth.loading);
    const authenticated = localStorage.getItem('token');

    if (authenticated) history.push("/");

    const loginRedirection = () => history.push('/');

    const initialValues = {
        userId: "",
        password: ""
    };

    const validationSchema = Yup.object().shape({
        userId: Yup.string().required("Required"),
        password: Yup.string().required("Required"),
    });

    const onFormSubmit = (values, { resetForm }) => {
        dispatch(AuthActions.signInRequest({
            formValues: { userId: values.userId, password: values.password },
            func: loginRedirection
        }));
        resetForm();
    };

    return (
        <S.LoginContainer>
            <S.LoginInnerContainer>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onFormSubmit}
                >
                    {({ handleSubmit, handleChange, handleBlur, values, touched, errors, isValid, dirty, }) => (
                        <form noValidate autoComplete="off" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: "column" }}>
                            <S.LoginInputContainer>
                                <Input
                                    type="text"
                                    placeholder="user id"
                                    error={errors.userId} name="userId"
                                    onChange={handleChange}
                                    value={values.userId} filled
                                />
                            </S.LoginInputContainer>
                            <S.LoginInputContainer>
                                <Input
                                    type="password"
                                    placeholder="password"
                                    error={errors.password} name="password"
                                    onChange={handleChange}
                                    value={values.password} filled
                                />
                            </S.LoginInputContainer>
                            <S.ForgotPassword onClick={() => history.push('/forgotPassword')} >Forgot Password?</S.ForgotPassword>
                            <Button textColor="var(--grey)" color="var(--yellow)" style={{ width: "100%", height: "60px" }}>Login</Button>
                            <Loader loading={loading} top="-135px" />
                        </form>
                    )}
                </Formik>
            </S.LoginInnerContainer>
        </S.LoginContainer>
    )
}

export default Login;
