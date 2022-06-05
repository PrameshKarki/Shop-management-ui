import { useEffect, useState } from "react";
import AutoCompleteItemNameField from "../../components/AutoCompleteItemNameField";
import ExpenseItemRow from "./ExpenseItemRow";
import { InputNumber, Button } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { expenseActions } from "../../store/index";
import useCustomInput from "../../hooks/use-custom-input";
import { v4 as uuid } from 'uuid';
import 'antd/dist/antd.css';
import classes from "./AddExpense.module.css";
import notification from "../../components/Notification"

let isInitial = true;

const AddExpense = () => {
    const [isReadyToHit, setIsReadToHit] = useState(false)
    const {
        value: enteredItemName,
        hasError: itemNameInputHasError,
        isValid: itemNameIsValid,
        valueChangeHandler: itemNameChangeHandler,
        inputBlurHandler: itemNameBlurHandler,
        reset: resetItemName
    } = useCustomInput(value => value.trim() !== '');

    const {
        value: enteredItemQuantity,
        hasError: itemQuantityHasError,
        isValid: itemQuantityIsValid,
        valueChangeHandler: itemQuantityChangeHandler,
        inputBlurHandler: itemQuantityBlurHandler,
        reset: resetItemQuantity

    } = useCustomInput(value => value.trim() !== '');

    const {
        value: enteredItemPrice,
        hasError: itemPriceHasError,
        isValid: itemPriceIsValid,
        valueChangeHandler: itemPriceChangeHandler,
        inputBlurHandler: itemPriceBlurHandler,
        reset: resetItemPrice
    } = useCustomInput(value => value !== '');


    // redux
    const expense = useSelector(state => state.expense);

    // useEffect(() => {
    //     if (isInitial) {
    //         isInitial = !isInitial;
    //         return;
    //     }
    //     notification("info", {
    //         "message": "Saving data...", "description": "Sending data to the server."
    //     });
    //     fetch('http://localhost:3000/expense/add', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             "itemName": enteredItemName,
    //             "price": enteredItemPrice,
    //             "quantity": enteredItemQuantity
    //         })
    //     }).then(res => {
    //         console.log("inside fetch...");
    //         if (res.ok)
    //             return res.json();
    //         notification("error", { "message": "Error", "description": "Server error!" });
    //     }).then(json => {
    //         console.log("from json:", json.expense);
    //         dispatch(expenseActions.addExpenseItem({ "id": json.expense.id, "itemName": json.expense.itemName, "price": json.expense.price, "quantity": json.expense.quantity }));
    //         resetItemName();
    //         resetItemQuantity();
    //         resetItemPrice();
    //         notification("success", { "message": "Success", "description": "Sucessfully fetched from the server." });
    //     }).catch(err => {
    //         notification("error", { "message": "Error", "description": "Server error!" });
    //     });
    // }, [isReadyToHit]);

    const dispatch = useDispatch();
    const dummyExpenseItem = [
        { "itemName": "Dahi", "quantity": "2 ltr", "costPrice": "330" },
        { "itemName": "puri", "quantity": "500 pics", "costPrice": "3130" },
        { "itemName": "samosa", "quantity": "20", "costPrice": "3320" },
        { "itemName": "jaljira", "quantity": "1 packet small", "costPrice": "3430" },
        { "itemName": "aalu", "quantity": "5 kg", "costPrice": "30" },
        { "itemName": "apple", "quantity": "2 pics", "costPrice": "3330" },
        { "itemName": "banana", "quantity": "5 pics", "costPrice": "3630" },
        { "itemName": "aanar", "quantity": "3 pics", "costPrice": "3370" },
        { "itemName": "badam", "quantity": "1 kg", "costPrice": "3380" },
        { "itemName": "imili", "quantity": "4 packet", "costPrice": "3390" },
        { "itemName": "plastic duna", "quantity": "5 packet", "costPrice": "3310" },
        { "itemName": "plastic spoon", "quantity": "2 packet", "costPrice": "1330" },
    ]
    const itemNameOptions = [];
    const itemQuantityOptions = [];
    dummyExpenseItem.forEach(item => itemNameOptions.push({ "label": item.itemName, "value": item.itemName }))
    dummyExpenseItem.forEach(item => itemQuantityOptions.push({ "label": item.quantity, "value": item.quantity }))
    const expenseFormSubmitHandler = () => {
        // setIsReadToHit(!isReadyToHit);

        notification("info", {
            "message": "Saving data...", "description": "Sending data to the server."
        });
        fetch('http://localhost:3000/expense/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "itemName": enteredItemName,
                "price": enteredItemPrice,
                "quantity": enteredItemQuantity
            })
        }).then(res => {
            console.log("inside fetch...");
            if (res.ok)
                return res.json();
            notification("error", { "message": "Error", "description": "Server error!" });
        }).then(json => {
            console.log("from json:", json.expense);
            dispatch(expenseActions.addExpenseItem({ "id": json.expense.id, "itemName": json.expense.itemName, "price": json.expense.price, "quantity": json.expense.quantity }));
            resetItemName();
            resetItemQuantity();
            resetItemPrice();
            notification("success", { "message": "Success", "description": "Sucessfully saved to the server." });
        }).catch(err => {
            notification("error", { "message": "Error", "description": "Server error!" });
        });
    }
    return (
        <div className={classes["add-expense-container"]}>
            <div className={classes["add-expense-cover"]}>
                <h6>Add Expenses</h6>
                <form>
                    <div className={classes["form-fields"]}>
                        <div className={classes["form-field"]}>
                            <label htmlFor="itemName">Select item name</label>
                            <AutoCompleteItemNameField
                                onChange={itemNameChangeHandler}
                                onBlur={itemNameBlurHandler}
                                value={enteredItemName}
                                options={itemNameOptions}
                                placeHolder="Select item name"
                                status={itemNameInputHasError && "error"}
                            />
                        </div>
                        <div className={classes["form-field"]}>
                            <label htmlFor="itemQuantity">Quantity</label>
                            <AutoCompleteItemNameField
                                onChange={itemQuantityChangeHandler}
                                onBlur={itemQuantityBlurHandler}
                                value={enteredItemQuantity}
                                options={itemQuantityOptions}
                                placeHolder="Select item quantity"
                                status={itemQuantityHasError && "error"}
                            />
                        </div>
                        <div className={classes["form-field"]}>
                            <label htmlFor="itemPrice">Cost price</label>
                            <InputNumber
                                onChange={itemPriceChangeHandler}
                                onBlur={itemPriceBlurHandler}
                                min={0}
                                value={enteredItemPrice}
                                size={"2x"}
                                status={itemPriceHasError && "error"} />
                        </div>
                    </div>
                    <div className={classes["form-actions"]}>
                        <div className={classes["form-action"]}>
                            <Button
                                type="primary"
                                onClick={expenseFormSubmitHandler}
                                size='large'
                                disabled={!itemNameIsValid || !itemQuantityIsValid || !itemPriceIsValid}
                            >Add Expense</Button>
                        </div>
                    </div>
                </form>
                <div className={classes["expense-items-display"]}>
                    <div className={classes["expense-items-display-cover"]}>
                        {expense.expenseItems.map((expenseItem, index) => <ExpenseItemRow
                            key={index}
                            id={expenseItem.id}
                            itemName={expenseItem.itemName}
                            quantity={expenseItem.quantity}
                            price={expenseItem.price}
                        />
                        )}
                    </div>
                </div>
            </div>

        </div >
    )
}
export default AddExpense;