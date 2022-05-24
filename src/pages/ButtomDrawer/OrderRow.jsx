import classes from "./OrderRow.module.css";
const OrderRow = (props) => {
    return <div className={classes["item"]} >
        <p>Item Name</p>
        <div className={classes["unit-price-item-qty"]} >
            <p>UNIT PRICE</p>
            <p>X</p>
            <p>ITEM QUANTITY</p>
        </div >
        <p>=</p>
        <p>TOTAL PRICE</p>
    </div >
}
export default OrderRow;