import classes from "./DialogBox.module.css";
const DialogBox = (props) => {
    return <div className={`${classes["dialog-box-cover"]} ${props.className}`}>
        <div className={classes["dialog-box"]}>
            <div className={classes["message"]}>
                <p>{props.confirmationMessage}</p>
            </div>
            <div className={classes["dialog-actions"]}>
                <div className={`${classes["dialog-action"]} ${classes["cancel-btn"]}`}>
                    <button type="button" onClick={props.onCancel}> Cancel</button>
                </div>
                <div className={`${classes["dialog-action"]} ${classes["ok-btn"]}`}>
                    <button type="button" onClick={props.onOk}> Yes</button>
                </div>
            </div>
        </div>
    </div>
}
export default DialogBox;