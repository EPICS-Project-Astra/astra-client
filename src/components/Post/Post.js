import classes from "./Post.module.scss";
import Avatar from "../../assets/icons/avatar.svg";
import bag from "../../assets/images/bag.png";
import { Heart, MessageSquare } from "react-feather";
const Post = () => {
    return (
        <div className={classes.post}>
            <div className={classes.top}>
                <div className={classes.avatar}>
                    <img src={Avatar} alt="Avatar" />
                </div>
                <span className={classes.user}>
                    <div className={classes.name}>Username</div>
                    <div className={classes.time}>5 days ago</div>
                </span>
            </div>
            <div className={classes.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam sapiente accusantium minus temporibus atque rem amet
                dolorem eveniet ratione tempora, enim nesciunt, consequatur quos
                possimus earum quod molestiae incidunt voluptatem reprehenderit
                mollitia necessitatibus id? Reprehenderit!
            </div>
            <div className={classes.image}>
                <img src={bag} alt="bag" />
            </div>
            <div className={classes.interaction}>
                <div className={classes.like}>
                    <Heart size={20} /> 155 likes
                </div>
                <div className={classes.comment}>
                    <MessageSquare size={20} /> 15 comments
                </div>
                <div className={classes.astracoin}>
                    
                </div>
            </div>
        </div>
    );
};

export default Post;
