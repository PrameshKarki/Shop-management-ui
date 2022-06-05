import { useEffect } from "react";
import ItemCard from "./ItemCard";
import classes from "./SellItemGride.module.css";
import { useSelector, useDispatch } from "react-redux";
import { menuActions } from "../../store/index";


const SellItemGride = () => {
    const menu = useSelector(state => state.menu.menuItems);
    const dispatch = useDispatch();
    useEffect(() => {
        if (menu.length)
            return
        fetch('http://localhost:3000/menu/get', {
            method: "GET",
            header: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error while fetching menu items.");
        }).then(json => {
            json.menu.forEach(item => {
                dispatch(menuActions.addMenuItem({ "id": item.id, "itemName": item.itemName, "price": item.price, "quantity": 0 }));
            })
        });
    }, [menu, dispatch]);

    return (
        <div className={classes["sell-item-gride-container"]}>
            <h3>Menu</h3>
            <div className={classes["sell-item-gride-cover"]}>
                {menu ? menu.map((item, index) => <ItemCard key={item.id} id={item.id} imageURL={item.imageURL} itemName={item.itemName} unitPrice={item.price} quantity={item.quantity} />) : <p>No items added in menu.</p>}
            </div>
        </div>
    )
}
export default SellItemGride;