import PostContent from "../../components/PostContent/PostContent";
import store from "../../store";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classes from "./PostView.module.scss";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Sticky from "react-stickynode";
import Avatar from "../../components/Avatar/Avatar";
import Comment from "../../components/Comment/Comment";

const PostView = (props) => {
    document.body.style = "background: #FAFAFA;";

    return (
        <>
            <Sticky>
                <DashboardNavbar />
            </Sticky>
            <div className={classes.dashboard}>
                <div className={classes.sidebarWrapper}>
                    {/* insert component here */}
                </div>
                <div className={classes.postsWrapper}>
                    <div className={classes.postView}>
                        <PostContent className={classes.postContent} />
                        <hr />
                        <div className={classes.commentBox}>
                            <div className={classes.header}>
                                <Avatar />
                                <input
                                    type="text"
                                    placeholder="Add a public comment..."
                                />
                            </div>
                            <div className={classes.footer}>
                                <button>COMMENT</button>
                            </div>
                        </div>
                        <hr />
                        <Comment />
                        <hr />
                        <Comment />
                        <hr />
                        <Comment />
                    </div>
                </div>
                <div className={classes.rightSideWrapper}>
                    {/* insert component here */}
                </div>
            </div>
        </>
    );
};

PostView.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, null)(PostView);
