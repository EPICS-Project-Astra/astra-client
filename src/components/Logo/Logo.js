import classes from "./Logo.module.scss";
import Astra from "../../assets/icons/Logo.svg";

const Logo = ({ dashboard }) => {
    return (
        <div className={classes.logo}>
            <img src={Astra} alt="Astra" height={dashboard ? "50px" : ""} />
        </div>
    );
};

export default Logo;
