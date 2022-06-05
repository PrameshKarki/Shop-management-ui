import { useState } from "react";
import { DeleteFilled } from "@ant-design/icons";
import classes from "./MenuItemRow.module.css";
import { useDispatch } from "react-redux";
import { menuActions } from "../../store/index";
import DeleteConfirmationPortal from "../../components/Modal/Portal";
import notification from "../../components/Notification";


const MenuItemRow = (props) => {
    const [portalIsVisible, setPortalIsVisible] = useState(false);
    const dispatch = useDispatch();
    const deleteBtnClickHandler = (event) => {
        event.stopPropagation();
        setPortalIsVisible(true);
    }
    const deleteRowConfirmationHandler = () => {
        notification("info", { "message": "Loading" });
        fetch('http://localhost:3000/menu/delete', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": props.id,
                "itemName": props.itemName,
                "price": props.price
            })
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Error while deleting item.");
        }).then(json => {
            notification("success", { "message": "Success", "description": "Successfully deleted." });
            dispatch(menuActions.deleteMenuItem({ "id": json.menu.id, "itemName": json.menu.itemName, "price": json.menu.price }))
        }).catch(err => {
            notification("error", { "message": "Error", "description": "Server error!" });
        })
    };
    const deleteRowRejectHandler = () => setPortalIsVisible(false);

    return (
        <div className={classes["menu-item-row"]}>
            <div>{props.itemName}</div>
            <div>{props.price}</div>
            <div className={classes["postfix-items"]}>
                <div className={classes["postfix-item"]} onClick={deleteBtnClickHandler}>
                    <DeleteFilled style={{ color: "#D00F0F", fontSize: "2rem" }} />
                </div>
                {portalIsVisible && <DeleteConfirmationPortal
                    onConfirm={deleteRowConfirmationHandler}
                    onReject={deleteRowRejectHandler}
                    confirmationMessage="Are you sure you want to delete the item?"
                />
                }
            </div>
        </div>
    );
}
export default MenuItemRow;