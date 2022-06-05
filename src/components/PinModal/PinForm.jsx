import classes from "./PinForm.module.css";
import { useState } from "react";

const DialogBox = (props) => {
    const [pinValue, setPinValue] = useState('');

    const pinChangeHandler = event => {
        setPinValue(event.target.value);
    }
    const formSubmitHandler = event => {
        event.preventDefault();
        console.log("submitted!");
        if (pinValue === "123") {
            props.onOk();
            setPinValue('');
        }
    }

    return <div className={`${classes["pin-form-cover"]} ${props.className}`}>
        <div className={classes["pin-form-container"]}>
            <form className={classes["pin-form"]} onSubmit={formSubmitHandler}>
                <div className={classes["form-fields"]}>
                    <div className={`${classes["form-field"]}`}>
                        <input type="password" value={pinValue} onChange={pinChangeHandler} autoComplete="on" placeholder="Enter the pin" />
                    </div>
                </div>
                <div className={classes["form-actions"]}>
                    <div className={classes["form-action"]}>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
}
export default DialogBox;