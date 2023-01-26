import React from 'react'
import { ErrorMessageStyling } from './errorMessage.styles'

const ErrorMessage = (props) => {
    return (
        <ErrorMessageStyling>{props.error}</ErrorMessageStyling>
    )
}

export default ErrorMessage
