import Overlay from "../Modal/Overlay";
import PinForm from "./PinForm";
import classes from "./Portal.module.css";
import React from "react";
import ReactDOM from "react-dom";
const Modal = (props) => {
    return (
        < React.Fragment>
            {ReactDOM.createPortal(<Overlay
                className={classes["modal-overlay"]}
                onClick={props.onReject}
            />, document.getElementById("backdrop-root"))}
            {ReactDOM.createPortal(<PinForm
                className={classes["modal-dialogbox"]}
                confirmationMessage={props.confirmationMessage}
                status={props.error}
                onCancel={props.onReject}
                onOk={props.onConfirm}
            />, document.getElementById("modal-root"))}
        </React.Fragment >
    )
}
export default Modal;