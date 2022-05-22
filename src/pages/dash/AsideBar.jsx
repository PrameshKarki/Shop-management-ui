import { Icon } from '@iconify/react';
import { FaGlobe } from 'react-icons/fa';
import { BsFillGrid3X2GapFill } from "react-icons/bs";
import { VscListFlat } from "react-icons/vsc";

import classes from './AsideBar.module.css'
import { visibilityActions } from "../../store/index";
import { useDispatch, useSelector } from 'react-redux';
import { display } from '@mui/system';
const AsideBar = (props) => {
    const visible = useSelector(state => state.visible);
    const dispatch = useDispatch();
    const overviewBatchClickHandler = () => {
        dispatch(visibilityActions.overviewVisibility(true));
    }

    const editMenuBatchClickHandler = () => {
        console.log("edit MEnu clicked!");
        dispatch(visibilityActions.editMenuPnlVisibility(true));
    }

    const addExpenseBatchClickHandler = () => {
        console.log("expense batched editMenuBatchClickHandler");
        dispatch(visibilityActions.expenseVisibility(true));
    }
    const cardMenuBatchClickHandler = () => {
        dispatch(visibilityActions.cardMenuVisibility(true));
    }
    const listMenuBatchClickHandler = () => {
        dispatch(visibilityActions.listMenuVisibility(true));
    }
    return (
        <div className={`${classes["aside-container"]} ${props.className}`}>

            <div className={`${classes["aside-bar-top-actions"]}`}>
                <div className={`${classes["aside-bar-top-action"]} ${visible.overviewIsVisible ? classes["batch-active"] : ""}`} onClick={overviewBatchClickHandler}>
                    <FaGlobe />
                </div>
                <div className={`${classes["aside-bar-top-action"]} ${visible.editMenuPnlIsVisible ? classes["batch-active"] : ""}`} onClick={editMenuBatchClickHandler}>
                    <Icon icon="fluent:tray-item-add-20-filled" />
                </div>
                <div className={`${classes["aside-bar-top-action"]} ${visible.expenseIsVisible ? classes["batch-active"] : ""}`} onClick={addExpenseBatchClickHandler}>
                    <Icon icon="mdi:cash-plus" />
                </div>
                <div className={`${classes["aside-bar-top-action"]} ${visible.cardMenuIsVisible ? classes["batch-active"] : ""}`} onClick={cardMenuBatchClickHandler}>
                    <BsFillGrid3X2GapFill />
                </div>
                <div className={`${classes["aside-bar-top-action"]} ${visible.listMenuIsVisible ? classes["batch-active"] : ""}`} onClick={listMenuBatchClickHandler}>
                    <VscListFlat />
                </div>
            </div>
            {/* <div className={` ${classes["aside-bar-bottom-actions"]}`}>
                <div className={classes["aside-bar-bottom-action"]}>
                    <CaretRightOutlined style={{ fontSize: "3.5rem", color: "#ffff" }} />
                </div>
            </div> */}
        </div>);
}
export default AsideBar;
