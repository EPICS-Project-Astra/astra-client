import classes from "./CreateNewPost.module.scss";
import {Settings} from "react-feather";
import Avatar from "../Avatar/Avatar";

const Create = () => {
    return (
        <>
            <div className={classes.parent1}>
            
                <div className={classes.child1}>
                    <Avatar size={40} />
                </div>
                <div className={classes.child2}>
                    <input
                        type="text"
                        className={classes.textField0}
                        placeholder="Write an awesome title here...."

                    />
                    {/* <hr className={classes.createhr}></hr> */}
                    <input
                        type="text"
                        className={classes.textField1}
                        placeholder="Give a description here..."
                    />
                    <hr className={classes.createhr}></hr>
                    <div className = {classes.subnav}>
                    <div className = {classes.subnavico}>
                    I1 
                    I2
                    </div>
                    <div className = {classes.subnavbut}>
                    <button type="submit" className={classes.buttoncnp}>Post</button>

                    </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;