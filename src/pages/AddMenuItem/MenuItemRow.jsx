import { DeleteFilled } from "@ant-design/icons";
import classes from "./MenuItemRow.module.css";

const deleteButtonClickHandler = (event) => {
    event.stopPropagation();
    console.log("button clicked")
}
const MenuItemRow = (props) => {
    return (
        <div className={classes["menu-item-row"]}>
            <div>{props.itemName}</div>
            <div>{props.price}</div>
            <div className={classes["postfix-items"]}>
                <div className={classes["postfix-item"]}>
                    <DeleteFilled style={{ color: "#D00F0F", fontSize: "2rem" }} onClick={deleteButtonClickHandler} />
                </div>
            </div>
        </div>
    );
}
export default MenuItemRow;