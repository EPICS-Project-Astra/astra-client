import Logo from "../Logo/Logo";
import classes from "./Navbar.module.scss";
import { UserPlus } from "react-feather";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={classes.navBar}>
            <Logo />
            <div className={classes.rightSide}>
                <Link to="/login" className={classes.login}>
                    Log In
                </Link>
                <Link to="/register" className={classes.register}>
                    <UserPlus size={18} className={classes.userPlusLogo} />{" "}
                    Register
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
