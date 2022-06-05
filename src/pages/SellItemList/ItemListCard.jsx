import { MinusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import { menuActions, orderActions } from "../../store/index";
import { useDispatch } from "react-redux";


import classes from "./ItemListCard.module.css";
const ItemCardList = (props) => {
    const [itemCount, setItemCount] = useState(0);
    const [itemTotalPrice, setItemTotalPrice] = useState(0);
    const dispatch = useDispatch();
    const itemRowClickHandler = () => {
        dispatch(menuActions.incrQuantity({ "id": props.id })); //increase the number if item in the menu;
        setItemCount(previousCount => previousCount + 1);
        setItemTotalPrice(previousItemTotalPrice => previousItemTotalPrice + (+props.unitPrice));
        dispatch(orderActions.addOrderItem({ "id": props.id, "itemName": props.itemName, "unitPrice": props.unitPrice }));
    }
    const decreaseItemCountClickHandler = (event) => {
        event.stopPropagation();
        //decrease the number if item in the menu;
        itemCount <= 0 ? setItemCount(0) : (() => {
            dispatch(menuActions.decrQuantity({ "id": props.id }));
            setItemCount(itemCount - 1);
        })()
        itemTotalPrice <= 0 ? setItemTotalPrice(0) : setItemTotalPrice(previousItemTotalPrice => +previousItemTotalPrice - (+props.unitPrice));
        dispatch(orderActions.removeOrderItem({ "id": props.id, "itemName": props.itemName, "unitPrice": props.unitPrice }))
    }
    return (
        <div className={classes["card"]} onClick={itemRowClickHandler}>
            <div className={classes["card-cover"]}>
                <div className={classes["item-name"]}>{props.itemName}</div>
                <div className={classes["unit-price"]}>{props.unitPrice}</div>
                <div className={classes["cross"]}>X</div>
                <div className={classes["item-quantity"]}>{props.quantity}</div>
                <div>=</div>
                <div className={classes["total-price"]}>{itemTotalPrice}</div>
            </div>
            <div className={classes["row-actions"]}>
                <div className={classes["row-action"]}>
                    <button type="button" onClick={decreaseItemCountClickHandler}><MinusCircleOutlined style={{ fontSize: '20px' }} /></button>
                </div>
            </div>
        </div>

    );
}
export default ItemCardList;