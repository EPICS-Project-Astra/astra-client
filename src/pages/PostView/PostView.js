import PostContent from "../../components/PostContent/PostContent";
import store from "../../store";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classes from "./PostView.module.scss";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Sticky from "react-stickynode";
import Avatar from "../../components/Avatar/Avatar";
import Comment from "../../components/Comment/Comment";
import { useEffect, useState } from "react";
import { getPostById } from "../../actions/post";
import CommentForm from "../../components/CommentForm/CommentForm";
import AwardAstraCoin from "../../components/AwardAstraCoin/AwardAstraCoin";

const PostView = (props) => {
    document.body.style = "background: #FAFAFA;";
    const { id } = useParams();

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        console.log("toggleModal");
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    useEffect(() => {
        props.getPostById(id);
    }, []);

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
                        {props.post.post && (
                            <PostContent
                                className={classes.postContent}
                                key={props.post.post._id}
                                post={props.post.post}
                                showActions={true}
                                image
                                toggleModal={toggleModal}
                            />
                        )}
                        <hr />
                        <CommentForm id={props.post.post?._id} />
                        {props.post.post?.comments.map((comment) => (
                            <>
                                <hr />
                                <Comment key={comment._id} comment={comment} />
                            </>
                        ))}
                    </div>
                </div>
                <div className={classes.rightSideWrapper}>
                    {/* insert component here */}
                </div>
            </div>
            {modal && (
                <AwardAstraCoin
                    key={props.post.post._id}
                    id={props.post.post._id}
                    singlePost={true}
                    toggleModal={toggleModal}
                />
            )}
        </>
    );
};

PostView.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        post: state.post,
        loading: state.post.loading,
    };
};

const mapDispatchToProps = {
    getPostById: getPostById,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
