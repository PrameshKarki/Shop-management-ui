import { CaretUpOutlined, CaretDownOutlined, PropertySafetyFilled } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import OrderRow from "./OrderRow";
import PaymentForm from "./PaymentForm"
import classes from "./ButtomDrawer.module.css";
const ButtomDrawer = () => {
    const order = useSelector(state => state.order);
    const [paymentForm, setPaymentForm] = useState(false);
    const [totalPayablePrice, setTotalPayablePrice] = useState(0);

    const upBtnClickHandler = () => {
        setPaymentForm(prevStat => !prevStat);
    }
    let price = 0;
    //price formatter
    function currencyFormat(num) {
        return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    useEffect(() => {
        // effect
        console.log("useEffect in Execution.");
        order.orderItems.forEach((item) => { price += +item.unitPrice * +item.quantity });
        setTotalPayablePrice(price);
        return () => {
            console.log("cleanUp in Execution.");
        };
    }, [order]);

    return (
        <div className={classes["bottom-slide-container"]} >
            <div className={classes["bottom-slide-container-cover"]}>
                <div className={classes["bottom-slide-header"]} onClick={upBtnClickHandler}>
                    <div className={classes["price-display"]} >
                        <div className={classes["total-price-text"]} > Total price:</div >
                        <div className={classes["total-price"]} >Rs {currencyFormat(totalPayablePrice)}</div >
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
                        {order.orderItems.map((item) => <OrderRow key={item.id} itemName={item.itemName} quantity={item.quantity} unitPrice={item.unitPrice} />)}
                        <PaymentForm totalPayablePrice={totalPayablePrice} />
                    </div >
                }
            </div>
        </div >
    );
}
export default ButtomDrawer;