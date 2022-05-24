import { DeleteFilled } from "@ant-design/icons";
import classes from "./ExpenseItemRow.module.css";
import { useDispatch } from "react-redux";
import { expenseActions } from "../../store/index";

const ExpenseItemRow = (props) => {
    const dispatch = useDispatch();
    const deleteBtnClickHandler = (event) => {
        event.stopPropagation();
        dispatch(expenseActions.deleteExpenseItem({ "id": props.id, "itemName": props.itemName, "quantity": props.quantity, "price": props.price }));
    }
    return (
        <div className={classes["expense-item-row"]} >
            <div>{props.itemName}</div>
            <div>{props.quantity}</div>
            <div>{props.price}</div>
            <div className={classes["postfix-items"]}>
                <div className={classes["postfix-item"]} onClick={deleteBtnClickHandler}>
                    <DeleteFilled style={{ color: "#D00F0F", fontSize: "2rem" }} onClick={deleteBtnClickHandler} />
                </div>
            </div>
        </div>
    );
}
export default ExpenseItemRow;