import AsideBar from "./AsideBar";
import HeaderBar from "./HeaderBar";
import DivisionPlayGround from "./DivisionPlayGround";
import classes from "./Dash.module.css";
import ButtomDrawer from "../ButtomDrawer/ButtomDrawer";
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const visible = useSelector(state => state.visible);

  return (
    <div className={classes["dash-container"]}>
      <div className={classes["dash-cover"]}>
        <HeaderBar className={classes["header-bar-dash-config"]} />
        <AsideBar className={classes["aside-bar-dash-config"]} />
        <DivisionPlayGround />
        {visible.cardMenuIsVisible | visible.listMenuIsVisible && <ButtomDrawer />}
      </div>
    </div>
  );
}
export default Dashboard;

