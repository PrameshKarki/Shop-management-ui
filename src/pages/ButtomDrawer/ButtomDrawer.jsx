import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useState } from "react";
import classes from "./ButtomDrawer.module.css";
const ButtomDrawer = () => {
    const [paymentForm, setPaymentForm] = useState(false);
    const visible = useSelector(state => state.visible);
    const upButnClickHandler = () => {
        setPaymentForm(prevStat => !prevStat);
    }
    return (
        <div className={classes["bottom-slide-container"]} >
            <div className={classes["bottom-slide-container-cover"]}>
                <div className={classes["bottom-slide-header"]} onClick={upButnClickHandler}>
                    <div className={classes["price-display"]} >
                        <div className={classes["total-price-text"]} > Total price:</div >
                        <div className={classes["total-price"]} >Rs 120</div >
                    </div >
                    <div className={classes["bottom-slide-header-actions"]} >
                        <div className={classes["bottom-slide-header-action"]} >
                            {paymentForm && <CaretDownOutlined />}
                            {!paymentForm && <CaretUpOutlined />}
                        </div >
                    </div >
                </div >
                {paymentForm &&
                    <div className={classes["items-list"]} >
                        <div className={classes["item"]} >
                            <p>Item Name</p>
                            <div className={classes["unit-price-item-qty"]} >
                                <p>UNIT PRICE</p>
                                <p>X</p>
                                <p>ITEM QUANTITY</p>
                            </div >
                            <p>=</p>
                            <p>TOTAL PRICE</p>
                        </div >
                        <form>
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
                    </div >
                }
            </div>
        </div >
    );
}
export default ButtomDrawer;