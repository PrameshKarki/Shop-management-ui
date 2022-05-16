import AsideBar from "./AsideBar";
import HeaderBar from "./HeaderBar";
import classes from "./Dash.module.css";
const Dashboard = () => {
  return (
    <div className={classes["dash-container"]}>
      <div className={classes["dash-cover"]}>
        <HeaderBar className={classes["header-bar-dash-config"]} />
        <AsideBar className={classes["aside-bar-dash-config"]} />
      </div>
    </div>
  );
}
export default Dashboard;

