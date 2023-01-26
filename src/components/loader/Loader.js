import React from 'react';
import FadeLoader from "react-spinners/FadeLoader";
import { LoaderContainer } from './loader.styles';

const Loader = (props) => {
    return (
        <LoaderContainer top={props.top} left={props.left}>
            <FadeLoader color="#000" loading={props.loading} margin="1px" height="13px" size={100} />
        </LoaderContainer>
    )
}

export default Loader
