import classes from "./Overlay.module.css";
const Overlay = (props) => {
    return <div
        className={`${classes["overlay"]} ${props.className}`}
        onClick={props.onClick} />
}
export default Overlay;