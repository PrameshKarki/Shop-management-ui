import classes from "./OrderRow.module.css";
const OrderRow = (props) => {
    return <div className={classes["item"]} >
        <p>{props.itemName}</p>
        <div className={classes["unit-price-item-qty"]} >
            <p>{props.unitPrice}</p>
            <p>X</p>
            <p>{props.quantity}</p>
        </div >
        <p>=</p>
        <p>{props.unitPrice * props.quantity}</p>
    </div >
}
export default OrderRow;