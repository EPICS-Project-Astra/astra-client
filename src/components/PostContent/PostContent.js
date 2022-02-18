import bag from "../../assets/images/bag.png";
import { Heart, MessageSquare } from "react-feather";
import { ReactComponent as Astra } from "../../assets/icons/rocket.svg";
import classes from "./PostContent.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import User from "../User/User";

const PostContent = (props) => {
    const [isLiked, setIsLiked] = useState(false);

    return (
        <div className={props.className}>
            <User />
            <div className={classes.title}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
            <div className={classes.description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam sapiente accusantium minus temporibus atque rem amet
                dolorem eveniet ratione tempora, enim nesciunt, consequatur quos
                possimus earum quod molestiae incidunt voluptatem reprehenderit
                mollitia necessitatibus id? Reprehenderit!
            </div>
            <div className={classes.image}>
                {props.image && <img src={bag} alt="bag" />}
            </div>
            <div className={classes.interaction}>
                <div
                    className={isLiked ? classes.liked : classes.disliked}
                    onClick={() => {
                        setIsLiked(!isLiked);
                    }}
                >
                    <Heart size={20} />
                    <span>155 likes</span>
                </div>
                <Link to="/post" className={classes.comment}>
                    <MessageSquare size={20} /> <span>15 comments</span>
                </Link>
                <div className={classes.astracoin}>
                    <Astra width={20} height={20} /> <span>15 astracoins</span>
                </div>
            </div>
        </div>
    );
};

export default PostContent;
