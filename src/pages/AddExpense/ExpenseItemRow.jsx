import { DeleteFilled } from "@ant-design/icons";
import classes from "./ExpenseItemRow.module.css";

const deleteButtonClickHandler = (event) => {
    console.log("Delete button clicked.");
    event.stopPropagation();
}
const ExpenseItemRow = (props) => {
    return (
        <div className={classes["expense-item-row"]} >
            <div>{props.itemName}</div>
            <div>{props.quantity}</div>
            <div>{props.price}</div>
            <div className={classes["postfix-items"]}>
                <div className={classes["postfix-item"]}>
                    <DeleteFilled style={{ color: "#D00F0F", fontSize: "2rem" }} onClick={deleteButtonClickHandler} />
                </div>
            </div>
        </div>
    );
}
export default ExpenseItemRow;