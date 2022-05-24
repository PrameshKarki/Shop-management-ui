import { useState } from "react";
import AutoCompleteItemNameField from "../../components/AutoCompleteItemNameField";
import ExpenseItemRow from "./ExpenseItemRow";
import { InputNumber } from 'antd';
import { Button } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { expenseActions } from "../../store/index";
import { v4 as uuid } from 'uuid';
import 'antd/dist/antd.css';
import classes from "./AddExpense.module.css";


const AddExpense = () => {
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemPrice, setItemPrice] = useState(0);
    const expense = useSelector(state => state.expense);
    const dispatch = useDispatch();
    const itemNameChangeHandler = (newItemName) => {
        setItemName(newItemName);
    }
    const itemQuantityChangeHandler = (newItemQuantity) => {
        setItemQuantity(newItemQuantity);
    }
    const itemPriceChangeHandler = (value) => {
        setItemPrice(value);
    }
    const itemNames = [{ "label": "Dahi" }, { "label": "Potato" }, { "label": "Milk" }, { "label": "puri" }, { "label": "GaramMasala" }];
    // const itemQuantaties = [{ "label": "1 kg" }, { "label": "2 kg" }, { "label": "1 dharne" }, { "label": "1 dhak" }, { "label": "200 pics" }];
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
    const uuid_temp_id = uuid();
    const expenseFormSubmitHandler = () => {
        dispatch(expenseActions.addExpenseItem({ "id": uuid_temp_id, "itemName": itemName, "price": itemPrice, "quantity": itemQuantity }));
    }
    return (
        <div className={classes["add-expense-container"]}>
            <div className={classes["add-expense-cover"]}>
                <h6>Add Expenses</h6>
                <form>
                    <div className={classes["form-fields"]}>
                        <div className={classes["form-field"]}>
                            <label htmlFor="itemName">Select item name</label>
                            <AutoCompleteItemNameField onChange={itemNameChangeHandler} value={itemName}
                                options={itemNameOptions}
                                placeHolder="Select item name"
                            />
                        </div>
                        <div className={classes["form-field"]}>
                            <label htmlFor="itemQuantity">Quantity</label>
                            <AutoCompleteItemNameField onChange={itemQuantityChangeHandler} value={itemQuantity}
                                options={itemQuantityOptions}
                                placeHolder="Select item quantity"
                            />
                        </div>
                        <div className={classes["form-field"]}>
                            <label htmlFor="itemPrice">Cost price</label>
                            <InputNumber min={0} value={itemPrice} onChange={itemPriceChangeHandler} size={"2x"} />
                        </div>
                    </div>
                    <div className={classes["form-actions"]}>
                        <div className={classes["form-action"]}>
                            <Button type="primary" onClick={expenseFormSubmitHandler} size='large'>Add Expense</Button>
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