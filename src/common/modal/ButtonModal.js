import React from 'react';

const ButtonModal = (props) => {
    return (
        <button type="button" className="btn btn-light btn-elevate-hover btn-circle btn-icon"
        data-toggle="modal" data-target={"#"+props.dataTarget}>
        {props.children}
    </button>
    )
}
export default ButtonModal;