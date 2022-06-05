import { useState, useEffect } from "react";
import AutoCompleteItemNameField from "../../components/AutoCompleteItemNameField";
import MenuItemRow from "./MenuItemRow";
import { InputNumber } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from "react-redux";
import { menuActions } from "../../store/index";
import useCustomInput from "../../hooks/use-custom-input";
import Portal from '../../components/Modal/Portal'
import classes from "./AddMenuItem.module.css";
import notification from "../../components/Notification";

const AddMenuItem = () => {
    const {
        value: enteredItemName,
        hasError: itemNameInputHasError,
        isValid: itemNameIsValid,
        valueChangeHandler: itemNameChangeHandler,
        inputBlurHandler: itemNameBlurHandler,
        reset: resetItemName
    } = useCustomInput(value => value.trim() !== '');

    const {
        value: enteredItemPrice,
        hasError: itemPriceHasError,
        isValid: itemPriceIsValid,
        valueChangeHandler: itemPriceChangeHandler,
        inputBlurHandler: itemPriceBlurHandler,
        reset: resetItemPrice } = useCustomInput(value => value !== '');
    const [formIsValid, setFormIsValid] = useState(false);
    const menu = useSelector(state => state.menu);
    const dispatch = useDispatch();

    const dummyMenuItem = [{ "itemName": "Lassi", "price": "Rs 100" }, { "itemName": "Samosa", "price": "Rs 25" }, { "itemName": "Coldrinks", "price": "Rs 50" }, { "itemName": "Milk Tea", "price": "Rs 20" }, { "itemName": "Panipuri", "price": " Rs 50" }, { "itemName": "Samosa Chaat", "price": " Rs 120" }, { "itemName": "DahiPuri", "price": " Rs 120" }, { "itemName": "Chocolate Puri", "price": " Rs 120" }, { "itemName": "Laphing", "price": " Rs 120" }]

    const options = [];
    dummyMenuItem.forEach(item => {
        options.push({ "label": item.itemName, "value": item.itemName });
    });

    const formSubmitHandler = (e) => {
        e.preventDefault();

        // *for the id of the item we use temporary id approach in which we provide temporary id to the item which is sent to server, that temporary id is replaced by server and stored to  database.

        notification("info", { "message": "Loading" });
        fetch('http://localhost:3000/menu/add', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "itemName": enteredItemName,
                "price": enteredItemPrice
            })
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error while saving item.");
        }).then(json => {
            notification("success", { "message": "Success", "description": "Successfully saved." });
            dispatch(menuActions.addMenuItem({ "id": json.menu.id, "itemName": json.menu.itemName, "price": json.menu.price }));
            resetItemName();
            resetItemPrice();
            setFormIsValid(false);
        }).catch(err => {
            notification("error", { "message": "Error", "description": "Server error!" });
        })
    }
    return (
        <div className={classes["add-menu-item-container"]}>
            <div className={classes["add-menu-item-cover"]}>
                <h6>Add menu item</h6>
                <form onSubmit={formSubmitHandler}>
                    <div className={classes["form-fields"]}>
                        <div className={classes["form-field"]}>
                            <label htmlFor="itemName">Select item name</label>
                            <AutoCompleteItemNameField
                                onChange={itemNameChangeHandler}
                                onBlur={itemNameBlurHandler}
                                value={enteredItemName}
                                options={options}
                                placeHolder="Select item name"
                                status={itemNameInputHasError && "error"}
                            />
                        </div>
                        <div className={classes["form-field"]}>
                            <label htmlFor="itemPrice">Price</label>
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
                                onClick={formSubmitHandler}
                                size='large'
                                disabled={!itemNameIsValid || !itemPriceIsValid}>Add menu item</Button>
                        </div>
                    </div>
                </form>
                <div className={classes["menu-items-display"]}>
                    <div className={classes["menu-items-display-cover"]}>
                        {menu.menuItems.map((menuItem, index) => <MenuItemRow key={menuItem.id} id={menuItem.id} itemName={menuItem.itemName} price={menuItem.price} />
                        )}
                    </div>
                </div>
            </div>

        </div>
    )
}
export default AddMenuItem;