import { useState } from "react";
import AutoCompleteItemNameField from "../../components/AutoCompleteItemNameField";
import MenuItemRow from "./MenuItemRow";
import { InputNumber } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import classes from "./AddMenuItem.module.css";


const AddMenuItem = () => {
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState('');
    const [itemPrice, setItemPrice] = useState(0);
    const itemNameChangeHandler = (newItemName) => {
        setItemName(newItemName);
        console.log("item Name changed:" + newItemName);
    }
    const itemQuantityChangeHandler = (newItemQuantity) => {
        setItemQuantity(newItemQuantity);
        console.log("item quantity changes:" + newItemQuantity);
    }
    const itemPriceChangeHandler = (value) => {
        setItemPrice(value);
        console.log("from individual:" + value);
    }
    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(itemName);
        console.log(itemPrice);
        console.log(itemQuantity);
    }



    const dummyMenuItem = [{ "itemName": "Lassi", "price": "Rs 100" }, { "itemName": "Samosa", "price": "Rs 25" }, { "itemName": "Coldrinks", "price": "Rs 50" }, { "itemName": "Milk Tea", "price": "Rs 20" }, { "itemName": "Panipuri", "price": " Rs 50" }, { "itemName": "Samosa Chaat", "price": " Rs 120" }, { "itemName": "DahiPuri", "price": " Rs 120" }, { "itemName": "Chocolate Puri", "price": " Rs 120" }, { "itemName": "Laphing", "price": " Rs 120" }]
    // we have to extract object array to provide the options
    const options = [];
    dummyMenuItem.forEach(item => {
        options.push({ "label": item.itemName, "value": item.itemName });
    });
    const submitButtonClickHandler = () => {
        console.log("submitted!");
    }
    return (
        <div className={classes["add-menu-item-container"]}>
            <div className={classes["add-menu-item-cover"]}>
                <h6>Add Menu Item</h6>
                <form onSubmit={formSubmitHandler}>
                    <div className={classes["form-fields"]}>
                        <div className={classes["form-field"]}>
                            <label htmlFor="itemName">Select item name</label>
                            <AutoCompleteItemNameField onChange={itemNameChangeHandler} value={itemName}
                                options={options}
                                placeHolder="Select item name"
                            />
                        </div>
                        <div className={classes["form-field"]}>
                            <label htmlFor="itemPrice">Price</label>
                            <InputNumber min={0} value={itemPrice} onChange={itemPriceChangeHandler} size={"2x"} />
                        </div>
                    </div>
                    <div className={classes["form-actions"]}>
                        <div className={classes["form-action"]}>
                            <Button type="primary" onClick={submitButtonClickHandler} size='large'>Add menu item</Button>
                        </div>
                    </div>
                </form>
                <div className={classes["menu-items-display"]}>
                    <div className={classes["menu-items-display-cover"]}>
                        {dummyMenuItem.map((menuItem, index) => <MenuItemRow key={index} itemName={menuItem.itemName} price={menuItem.price} />
                        )}

                    </div>
                </div>
            </div>

        </div>
    )
}
export default AddMenuItem;