import { useState } from "react";
import classes from "./PaymentForm.module.css";
const PaymentForm = (props) => {
    const [tenderAmount, setTenderAmount] = useState(0);
    const [changeAmount, setChangeAmount] = useState(0);

    const tenderAmountChangeHandler = (event) => {
        setTenderAmount(event.target.value);
        console.log(event.target.value >= props.totalPayablePrice);
        +event.target.value >= props.totalPayablePrice ? setChangeAmount((+event.target.value) - (+props.totalPayablePrice)) : setChangeAmount(0);
    }

    return <form>
        <div className={classes["form-inputs"]}>
            <div className={classes["form-input"]}>
                <label htmlFor="tenderAmount">Tender Amount</label>
                <input type="number" name="tenderAmount" value={tenderAmount} onChange={tenderAmountChangeHandler} />
            </div>
            <div className={classes["form-input"]} >
                <label htmlFor="change">Change</label>
                <div>{changeAmount}</div>
            </div >
        </div >
        <div className={classes["form-actions"]}>
            <div className={`${classes["form-action"]} ${classes["receit"]}`}>
                <button type="button">Receit</button>
            </div>
            <div className={`${classes["form-action"]} ${classes["pay"]}`}>
                <button type="button">Pay</button>
            </div>

        </div>
    </form >
}
export default PaymentForm;