import { DeleteFilled } from "@ant-design/icons";
import classes from "./ExpenseItemRow.module.css";
import { useDispatch } from "react-redux";
import { expenseActions } from "../../store/index";
import { useState, useEffect } from "react";
import DeleteConfirmationPortal from "../../components/Modal/Portal";
import notification from "../../components/Notification";



let isInitial = true;
const ExpenseItemRow = (props) => {
    const [portalIsVisible, setPortalIsVisible] = useState(false);
    const [isReadyToHit, setIsReadyToHit] = useState(false);
    const dispatch = useDispatch();

    // !we found a bug in useEffect; while expense was added it was immediately deleted because the expenserow items was also reevaluated and 
    // !when this component get's reevaluated the useEffect get executed. So, that's a bug.

    // useEffect(() => {
    //     console.log("inside delete expense.");
    //     if (isInitial) {
    //         console.log("inside is initial.....");
    //         isInitial = !isInitial;
    //         return;
    //     }
    //     notification("info", { 'message': 'Loading' });
    //     fetch('http://localhost:3000/expense/delete', {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //             "id": props.id, "itemName": props.itemName, "quantity": props.quantity, "price": props.price
    //         })
    //     }).then(response => {
    //         console.log(response.ok);
    //         if (response.ok)
    //             return response.json();
    //         throw new Error("Error while deleting expense from server.");
    //     }).then(json => {
    //         notification("info", { 'message': 'Success', 'description': 'Successfully deleted.' });
    //         console.log("from delete ui part", json);
    //         dispatch(expenseActions.deleteExpenseItem({ "id": props.id, "itemName": props.itemName, "quantity": props.quantity, "price": props.price }))
    //     }).catch(err => {
    //         notification("error", { 'message': 'Error', 'description': "Server error!" });
    //     })
    // }, [isReadyToHit]);

    const deleteBtnClickHandler = (event) => {
        event.stopPropagation();
        setPortalIsVisible(true);
    }
    const deleteRowConfirmationHandler = (event) => {
        event.stopPropagation();
        // setIsReadyToHit(!isReadyToHit);
        setPortalIsVisible(false);
        notification("info", { 'message': 'Loading' });
        fetch('http://localhost:3000/expense/delete', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "id": props.id, "itemName": props.itemName, "quantity": props.quantity, "price": props.price
            })
        }).then(response => {
            console.log(response.ok);
            if (response.ok)
                return response.json();
            throw new Error("Error while deleting expense from server.");
        }).then(json => {
            notification("success", { 'message': 'Success', 'description': 'Successfully deleted.' });
            console.log("from delete ui part", json);
            dispatch(expenseActions.deleteExpenseItem({ "id": props.id, "itemName": props.itemName, "quantity": props.quantity, "price": props.price }))
        }).catch(err => {
            notification("error", { 'message': 'Error', 'description': "Server error!" });
        });
    };
    const deleteRowRejectHandler = (event) => {
        event.stopPropagation();
        setPortalIsVisible(false);
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
                {portalIsVisible && <DeleteConfirmationPortal
                    onConfirm={deleteRowConfirmationHandler}
                    onReject={deleteRowRejectHandler}
                    confirmationMessage="Are you sure?"
                />
                }
            </div>
        </div>
    );
}
export default ExpenseItemRow;