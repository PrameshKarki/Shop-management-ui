import classes from "./FullScreenButton.module.css";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { fullscreenActions } from "../store/index";
import Authenticate from "../components/PinModal/Portal";
import { useState } from "react";

const FullScreenButton = (props) => {
    const dispatch = useDispatch();
    const fullscreen = useSelector(state => state.fullscreen.isFullscreen);
    const [authRequired, setAuthRequired] = useState(false);

    const fullScreenBtnClick = () => {
        console.log("fullScreen btn clicked!");
        document.documentElement.requestFullscreen().catch(e => console.log(e));
        dispatch(fullscreenActions.changeFullScreenMode());
    }
    const minScreenBtnClick = () => {
        console.log("minScreenBtnClick btn clicked!");
        setAuthRequired(true);
    }
    const authConfirmHandler = () => {
        console.log("confirmation click");
        document.exitFullscreen();
        dispatch(fullscreenActions.changeFullScreenMode());
        setAuthRequired(false);
    }
    const authRejectHandler = () => {
        console.log("rejection click");
        setAuthRequired(false);
    }
    return (<div className={classes["fullscreenbutton"]} >
        {!fullscreen && !authRequired && <BsFullscreen onClick={fullScreenBtnClick} />}
        {fullscreen && !authRequired && <BsFullscreenExit onClick={minScreenBtnClick} />}
        {authRequired && <Authenticate onConfirm={authConfirmHandler} onReject={authRejectHandler} confirmationMessage="Are you sure?" />}
    </div>)
}
export default FullScreenButton;