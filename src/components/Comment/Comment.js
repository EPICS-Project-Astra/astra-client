import User from "../User/User";
import classes from "./Comment.module.scss";

const Comment = () => {
    return (
        <div className={classes.comment}>
            <User />
            <span className={classes.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                consequuntur sint nisi dicta quasi quidem labore vel dolore
                aspernatur veritatis. Optio reiciendis sed, exercitationem
                tempora cum doloribus iusto. Modi, amet.
            </span>
        </div>
    );
};

export default Comment;
