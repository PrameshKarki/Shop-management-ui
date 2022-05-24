import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import OrderRow from "./OrderRow";
import PaymentForm from "./PaymentForm"
import classes from "./ButtomDrawer.module.css";
const ButtomDrawer = () => {
    const [paymentForm, setPaymentForm] = useState(false);
    const visible = useSelector(state => state.visible);
    const orders = useSelector(state => state.order);
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
                        <OrderRow />
                        <PaymentForm />
                    </div >
                }
            </div>
        </div >
    );
}
export default ButtomDrawer;