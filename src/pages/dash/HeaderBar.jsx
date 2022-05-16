import classes from "./HeaderBar.module.css"
const HeaderBar = (props) => {
    return (
        <div className={`${classes["header-bar-container"]} ${props.className}`}>
            <div className={classes["header-bar-cover"]}>
                <div className={classes["shop-logo"]}>
                    <div className={classes["logo"]}>
                        चाट
                    </div>
                </div>
                <div className={classes["shop-info"]}>
                    <div className={classes["shop-name"]}><p>Chaat Station</p></div>
                    <div className={classes["shop-address"]}>Patan Dhoka, Lalitpur, Nepal</div>
                </div>

            </div>
        </div >
    );
}
export default HeaderBar;