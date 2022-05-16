import { CaretRightOutlined } from "@ant-design/icons";
import { Icon } from '@iconify/react';
import classes from './AsideBar.module.css'
const AsideBar = (props) => {
    return (
        <div className={`${classes["aside-container"]} ${props.className}`}>

            <div className={classes["aside-bar-top-actions"]}>
                <div className={classes["aside-bar-top-action"]}>
                    <Icon icon="openmoji:overview" />
                </div>
                <div className={classes["aside-bar-top-action"]}>
                    <Icon icon="fluent:tray-item-add-20-filled" />
                </div>
                <div className={classes["aside-bar-top-action"]}>
                    <Icon icon="mdi:cash-plus" />
                </div>
            </div>

            <div className={` ${classes["aside-bar-bottom-actions"]}`}>
                <div className={classes["aside-bar-bottom-action"]}>
                    <CaretRightOutlined style={{ fontSize: "3.5rem", color: "#ffff" }} />
                </div>
            </div>
        </div>);
}
export default AsideBar;
