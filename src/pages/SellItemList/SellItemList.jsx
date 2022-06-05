import ItemListCard from "./ItemListCard"
import classes from "./SellItemList.module.css";
import { useEffect } from "react";
import { menuActions } from "../../store/index";
import { useDispatch, useSelector } from "react-redux";

const SellItemList = () => {
    const menu = useSelector(state => state.menu.menuItems);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log("inside fetch");
        if (menu.length)
            return;

        fetch('http://localhost:3000/menu/get', {
            method: "GET",
            header: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log("inside first then.");
            if (response.ok) {
                console.log("inside response ok then.");
                return response.json();
            }
            throw new Error("Error while fetching menu items.");
        }).then(json => {
            json.menu.forEach(item => {
                dispatch(menuActions.addMenuItem({ "id": item.id, "itemName": item.itemName, "price": item.price }))
            })
        });
    }, [menu, dispatch]);
    return (
        <div className={classes["sell-item-list-container"]}>
            <h3>Menu</h3>
            <div className={classes["sell-item-list-cover"]}>
                {menu ? menu.map((item, index) => <ItemListCard key={item.id} id={item.id} itemName={item.itemName} unitPrice={item.price} quantity={item.quantity} />) : <p>No items added in menu.</p>}
            </div>
        </div>
    );
}

export default SellItemList;