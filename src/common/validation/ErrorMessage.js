import React from 'react';

const ErrorMessage = (props) => {
    var className = props.error ? 'has-error' : 'hidden';
    return (
        <span className={className}>{props.message}</span>
    )
}
export default ErrorMessage;