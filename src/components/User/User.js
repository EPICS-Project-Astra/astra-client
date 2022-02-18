import Avatar from "../Avatar/Avatar";
import classes from "./User.module.scss";

const User = () => {
    return (
        <div className={classes.user}>
            <Avatar />
            <span className={classes.userDetails}>
                <div className={classes.name}>Username</div>
                <div className={classes.time}>5 days ago</div>
            </span>
        </div>
    );
};

export default User;
