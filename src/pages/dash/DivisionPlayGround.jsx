import AddExpense from "../AddExpense/AddExpense";
import SellItemGride from "../SellItemGride/SellItemGride";
import SellItemList from "../SellItemList/SellItemList";
import AddMenuItem from "../AddMenuItem/AddMenuItem";
import ButtmDrawer from "../ButtomDrawer/ButtomDrawer"
import classes from "./DivisionPlayGround.module.css";
import { useSelector } from "react-redux";

const DivisionPlayGround = () => {
    const visible = useSelector(state => state.visible);
    return (
        <div className={classes["division-playground-container"]}>
            {/* add player divisions eg: item adder, expense adder, sell Item, overview, etc */}
            {visible.expenseIsVisible && <AddExpense />}
            {visible.editMenuPnlIsVisible && <AddMenuItem />}
            {visible.cardMenuIsVisible && <SellItemGride />}
            {visible.listMenuIsVisible && <SellItemList />}
        </div>
    );
}
export default DivisionPlayGround;