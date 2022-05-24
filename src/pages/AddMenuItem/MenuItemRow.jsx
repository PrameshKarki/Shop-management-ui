import { DeleteFilled } from "@ant-design/icons";
import classes from "./MenuItemRow.module.css";
import { useDispatch } from "react-redux";
import { menuActions } from "../../store/index";
import { v4 as uuid } from 'uuid';


const MenuItemRow = (props) => {
    const unique_expense_id = uuid();
    const dispatch = useDispatch();
    const deleteBtnClickHandler = (event) => {
        event.stopPropagation();
        dispatch(menuActions.deleteMenuItem({ "id": props.id, "itemName": props.itemName, "price": props.price }));
    }
    return (
        <div className={classes["menu-item-row"]}>
            <div>{props.itemName}</div>
            <div>{props.price}</div>
            <div className={classes["postfix-items"]}>
                <div className={classes["postfix-item"]}>
                    <DeleteFilled style={{ color: "#D00F0F", fontSize: "2rem" }} onClick={deleteBtnClickHandler} />
                </div>
            </div>
        </div>
    );
}
export default MenuItemRow;