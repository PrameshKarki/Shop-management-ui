import ItemCard from "./ItemCard";
import { useSelector, useDispatch } from "react-redux";
import classes from "./SellItemGride.module.css";

const SellItemGride = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    const dummyItemCardInfo = [
        { "id": "1", "imageURL": "", "itemName": "Panipuri", "unitPrice": "240" },
        { "id": "2", "imageURL": "", "itemName": "Dahipuri", "unitPrice": "240" },
        { "id": "3", "imageURL": "", "itemName": "Chocklate Puri", "unitPrice": "240" },
        { "id": "4", "imageURL": "", "itemName": "Chaat", "unitPrice": "240" },
        { "id": "5", "imageURL": "", "itemName": "Milk Tea", "unitPrice": "20" },
        { "id": "6", "imageURL": "", "itemName": "Cold Drink", "unitPrice": "50" },
        { "id": "8", "imageURL": "", "itemName": "pizza", "unitPrice": "100" },
        { "id": "8", "imageURL": "", "itemName": "burger", "unitPrice": "100" },
        { "id": "10", "imageURL": "", "itemName": "laphing", "unitPrice": "100" },
        { "id": "11", "imageURL": "", "itemName": "mix chaat", "unitPrice": "100" },
        { "id": "12", "imageURL": "", "itemName": "black tea", "unitPrice": "100" },
        { "id": "13", "imageURL": "", "itemName": "Bun", "unitPrice": "100" },
        { "id": "14", "imageURL": "", "itemName": "Samosa", "unitPrice": "100" },
        { "id": "15", "imageURL": "", "itemName": "Puff", "unitPrice": "100" },
        { "id": "16", "imageURL": "", "itemName": "IceCream", "unitPrice": "100" }
    ];
    return (
        <div className={classes["sell-item-gride-container"]}>
            <div className={classes["sell-item-gride-cover"]}>
                {dummyItemCardInfo.map((item, index) => <ItemCard key={index} id={item.id} imageURL={item.imageURL} itemName={item.itemName} unitPrice={item.unitPrice} />)}
            </div>
        </div>
    )
}
export default SellItemGride;