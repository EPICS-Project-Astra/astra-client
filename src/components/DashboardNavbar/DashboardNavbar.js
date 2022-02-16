import { Bell, ChevronDown, Plus, PlusCircle } from "react-feather";
import Logo from "../Logo/Logo";
import classes from "./DashboardNavbar.module.scss";
import { ReactComponent as Astra } from "../../assets/icons/rocket.svg";
import Avatar from "../../assets/icons/avatar.svg";
import DropDown from "../DropDown/DropDown";
import DropDownLink from "../DropDownLink/DropDownLink";

const DashboardNavbar = () => {
    return (
        <div className={classes.DashboardNavbar}>
            <Logo dashboard />
            <div className={classes.rightSide}>
                <div className={classes.createPost}>
                    <Plus size={30} />
                </div>
                <DropDownLink DropDown={<DropDown astracoin />}>
                    <div className={classes.astracoins}>
                        <Astra fill="white" height="26" width="26" />
                    </div>
                </DropDownLink>
                <DropDownLink
                    className={classes.avatar}
                    DropDown={<DropDown />}
                >
                    <img src={Avatar} alt="Avatar" />
                    <ChevronDown className={classes.chevronDown} />
                </DropDownLink>
            </div>
        </div>
    );
};

export default DashboardNavbar;
