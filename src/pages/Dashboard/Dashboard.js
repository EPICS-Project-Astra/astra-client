import store from "../../store";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classes from "./Dashboard.module.scss";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Post from "../../components/Post/Post";
import Sticky from "react-stickynode";
import PostContent from "../../components/PostContent/PostContent";
import { getPosts } from "../../actions/post";
import { useEffect } from "react";

const Dashboard = (props) => {
    document.body.style = "background: #FAFAFA;";
    const navigate = useNavigate();

    useEffect(() => {
        // if (!props.isAuthenticated) {
        //     return navigate("/login");
        // }
        props.getPosts();
    }, []);

    //redirect if not logged in

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
                    {props.posts.map((post) => (
                        <Post key={post._id}>
                            <PostContent
                                key={post._id}
                                post={post}
                                showActions={true}
                                image
                            />
                        </Post>
                    ))}
                </div>
                <div className={classes.rightSideWrapper}>
                    {/* insert component here */}
                </div>
            </div>
        </>
    );
};

Dashboard.propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        posts: state.post.posts,
        isAuthenticated: state.auth.isAuthenticated,
    };
};

const mapDispatchToProps = {
    getPosts: getPosts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
