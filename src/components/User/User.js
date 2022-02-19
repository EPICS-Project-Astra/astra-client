import { useEffect } from "react";
import { connect } from "react-redux";
// import { getProfileById } from "../../actions/profile";
import Avatar from "../Avatar/Avatar";
import classes from "./User.module.scss";
import { format } from "timeago.js";

const User = (props) => {
    useEffect(() => {
        // props.getProfileById(props.id);
    }, [props.id]);

    return (
        <div className={classes.user}>
            <Avatar />
            <span className={classes.userDetails}>
                <div className={classes.name}>Username</div>
                <div className={classes.time}>{format(props.date)}</div>
            </span>
        </div>
    );
};

const mapDispatchToProps = {
    // getProfileById: getProfileById,
};

export default connect(null, mapDispatchToProps)(User);
