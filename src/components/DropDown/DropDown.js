import { LogOut, Settings, User } from "react-feather";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../actions/auth";
import store from "../../store";
import classes from "./DropDown.module.scss";
import { ReactComponent as Astra } from "../../assets/icons/rocket.svg";

const DropDown = (props) => {
    const navigate = useNavigate();
    const logOut = () => {
        store.dispatch(logoutUser());
        navigate("/login");
    };

    const DropDownItem = (itemProps) => {
        return (
            <div
                className={
                    itemProps.logout ? classes.menuItemLogOut : classes.menuItem
                }
            >
                <span className={classes.icon}>{itemProps.icon}</span>
                <div className={classes.itemName}>
                    {itemProps.children}
                    <span className={classes.description}>
                        {itemProps.description}
                    </span>
                </div>
            </div>
        );
    };

    return props.astracoin ? (
        <div className={classes.astraDropdown}>
            <span className={classes.balance}>
                500 {<Astra height={25} width={25} className={classes.icon} />}
            </span>
            <button className={classes.button}>Buy AstraCoin</button>
        </div>
    ) : (
        <div className={classes.dropdown}>
            <DropDownItem icon={<User />} description={"Profile"}>
                <span>{props.user?.name}</span>
            </DropDownItem>
            <DropDownItem icon={<Settings />}>
                <span>Settings</span>
            </DropDownItem>
            <div onClick={logOut}>
                <DropDownItem icon={<LogOut />} logout={true}>
                    <span>Sign Out</span>
                </DropDownItem>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    };
};

export default connect(mapStateToProps, null)(DropDown);
