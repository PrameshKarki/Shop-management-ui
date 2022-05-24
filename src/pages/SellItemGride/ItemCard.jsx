// import Card from '../../components/Card';
import { MinusCircleOutlined } from "@ant-design/icons";
import { useState } from "react";
import classes from './ItemCard.module.css';
import { orderActions } from "../../store/index";
import { useDispatch } from "react-redux";

var divBackground = {
    backgroundImage: "url(" + "../../Images/Dahi-Puri-3.jpg" + ")"
};

const ItemCard = (props) => {
    const dispatch = useDispatch();
    const [itemCount, setItemCount] = useState(0);
    const itemCardClickHandler = () => {
        setItemCount(itemCount + 1);
        dispatch(orderActions.addOrderItem({ "id": props.id, "itemName": props.itemName, "unitPrice": props.unitPrice }))
    }
    const decreaseItemCountButtonClickHandler = (event) => {
        event.stopPropagation();
        itemCount <= 0 ? setItemCount(0) : setItemCount(itemCount - 1);
        dispatch(orderActions.removeOrderItem({ "id": props.id, "itemName": props.itemName, "unitPrice": props.unitPrice }))
    }

    return (
        <div className={classes["item-card"]} onClick={itemCardClickHandler}>
            <div className={classes["card-cover"]}>
                <div className={classes["item-count"]}>
                    <p>{itemCount}</p>
                </div>
                <div className={classes["image"]} style={divBackground}>
                </div>
                <div className={classes["item-name"]}>
                    <p>{props.itemName}</p>
                </div>
                <div className={classes["item-price"]}>
                    <p>Rs {props.unitPrice}</p>
                </div>
                <div className={classes["card-actions"]}>
                    <div className={classes["card-action"]}>
                        <button type="button" onClick={decreaseItemCountButtonClickHandler}><MinusCircleOutlined style={{ fontSize: '20px' }} /></button>
                    </div>
                    {/* + button is commented below */}
                    {/* <div className={classes["card-action"]}>
                        <button type="button"><i className="fa-solid fa-circle-plus"></i></button>
                    </div> */}
                </div>
            </div>
        </div >
    );
}
export default ItemCard;