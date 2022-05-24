import { useState } from "react";
import AutoCompleteItemNameField from "../../components/AutoCompleteItemNameField";
import MenuItemRow from "./MenuItemRow";
import { InputNumber } from 'antd';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { useSelector, useDispatch } from "react-redux";
import { menuActions } from "../../store/index";
import { v4 as uuid } from 'uuid';

import classes from "./AddMenuItem.module.css";
const AddMenuItem = () => {
    const unique_temp_id = uuid();
    const menu = useSelector(state => state.menu);
    const dispatch = useDispatch();
    const [itemName, setItemName] = useState('');
    const [itemPrice, setItemPrice] = useState();
    // console.log("from AddMenuItem:", menu);
    const itemNameChangeHandler = (newItemName) => {
        setItemName(newItemName);
    }
    const itemPriceChangeHandler = (value) => {
        setItemPrice(value);
    }
    const dummyMenuItem = [{ "itemName": "Lassi", "price": "Rs 100" }, { "itemName": "Samosa", "price": "Rs 25" }, { "itemName": "Coldrinks", "price": "Rs 50" }, { "itemName": "Milk Tea", "price": "Rs 20" }, { "itemName": "Panipuri", "price": " Rs 50" }, { "itemName": "Samosa Chaat", "price": " Rs 120" }, { "itemName": "DahiPuri", "price": " Rs 120" }, { "itemName": "Chocolate Puri", "price": " Rs 120" }, { "itemName": "Laphing", "price": " Rs 120" }]

    // we have to extract object array to provide the options
    const options = [];
    dummyMenuItem.forEach(item => {
        options.push({ "label": item.itemName, "value": item.itemName });
    });

    const formSubmitHandler = (e) => {
        e.preventDefault();
        // for the id of the item we use temporary id approach in which we provide temporary id to the item which is sent to server, that temporary id is replaced by server and stored to  database.
        dispatch(menuActions.addMenuItem({ "id": unique_temp_id, "itemName": itemName, "price": itemPrice }));
        //initialize input fields
        setItemName("");
        setItemPrice("");
    }
    return (
        <div className={classes["add-menu-item-container"]}>
            <div className={classes["add-menu-item-cover"]}>
                <h6>Add menu item</h6>
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
                            <Button type="primary" onClick={formSubmitHandler} size='large'>Add menu item</Button>
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