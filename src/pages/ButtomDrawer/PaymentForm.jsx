import classes from "./PaymentForm.module.css";
const PaymentForm = () => {

    return <form>
        <div className={classes["form-inputs"]}>
            <div className={classes["form-input"]}>
                <label htmlFor="tenderAmount">Tender Amount</label>
                <input type="number" name="tenderAmount" />
            </div>
            <div className={classes["form-input"]} >
                <label htmlFor="change">Change</label>
                <input type="number" name="change" disabled value="200" />
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