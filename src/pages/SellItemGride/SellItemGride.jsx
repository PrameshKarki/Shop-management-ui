import ItemCard from "./ItemCard";
import { useSelector, useDispatch } from "react-redux";
import classes from "./SellItemGride.module.css";

const SellItemGride = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const dummyItemCardInfo = [
        { "id": "1", "imageURL": "", "itemName": "Panipuri", "price": "240" },
        { "id": "2", "imageURL": "", "itemName": "Dahipuri", "price": "240" },
        { "id": "3", "imageURL": "", "itemName": "Chocklate Puri", "price": "240" },
        { "id": "4", "imageURL": "", "itemName": "Chaat", "price": "240" },
        { "id": "5", "imageURL": "", "itemName": "Milk Tea", "price": "20" },
        { "id": "6", "imageURL": "", "itemName": "Cold Drink", "price": "50" },
        { "id": "8", "imageURL": "", "itemName": "pizza", "price": "100" },
        { "id": "8", "imageURL": "", "itemName": "burger", "price": "100" },
        { "id": "10", "imageURL": "", "itemName": "laphing", "price": "100" },
        { "id": "11", "imageURL": "", "itemName": "mix chaat", "price": "100" },
        { "id": "12", "imageURL": "", "itemName": "black tea", "price": "100" },
        { "id": "13", "imageURL": "", "itemName": "Bun", "price": "100" },
        { "id": "14", "imageURL": "", "itemName": "Samosa", "price": "100" },
        { "id": "15", "imageURL": "", "itemName": "Puff", "price": "100" },
        { "id": "16", "imageURL": "", "itemName": "IceCream", "price": "100" }
    ];
    return (
        <div className={classes["sell-item-gride-container"]}>
            <div className={classes["sell-item-gride-cover"]}>
                {dummyItemCardInfo.map((item, index) => {
                    return <ItemCard key={index} imageURL={item.imageURL} itemName={item.itemName} price={item.price} />
                })}
            </div>
        </div>
    )
}
export default SellItemGride;