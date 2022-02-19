import User from "../User/User";
import classes from "./Comment.module.scss";

const Comment = (props) => {
    return (
        <div className={classes.comment}>
            <User date={props.comment.date} />
            <span className={classes.content}>
                {props.comment && props.comment.text}
            </span>
        </div>
    );
};

export default Comment;
