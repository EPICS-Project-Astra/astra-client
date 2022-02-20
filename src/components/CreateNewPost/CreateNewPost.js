import classes from "./CreateNewPost.module.scss";
import { Film, Image, Send } from "react-feather";
import Avatar from "../Avatar/Avatar";

const Create = () => {
    return (
        <>
            <div className={classes.parent1}>
                <div className={classes.child1}>
                    <Avatar size={40} />
                </div>
                <div className={classes.child2}>
                    <div className={classes.fieldDiv}>
                        <input
                            type="text"
                            className={classes.textField0}
                            placeholder="Write an awesome title here...."
                        />
                        {/* <hr className={classes.createhr}></hr> */}
                        <input
                            type="textarea"
                            className={classes.textField1}
                            placeholder="Give a description here..."
                        />
                    </div>
                    <div className={classes.bottom}>
                        <hr className={classes.createhr}></hr>
                        <div className={classes.subnav}>
                            <div className={classes.subnavico}>
                                <Image size={27} />
                                <Film />
                            </div>
                            <div className={classes.subnavbut}>
                                <button
                                    type="submit"
                                    className={classes.buttoncnp}
                                >
                                    <Send size={20} className={classes.icon} />
                                    Post
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;
