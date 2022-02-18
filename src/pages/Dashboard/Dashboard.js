import store from "../../store";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classes from "./Dashboard.module.scss";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";
import Post from "../../components/Post/Post";
import Sticky from "react-stickynode";
import PostContent from "../../components/PostContent/PostContent";

const Dashboard = (props) => {
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
                    <Post>
                        <PostContent image />
                    </Post>
                    <Post>
                        <PostContent />
                    </Post>
                </div>
                <div className={classes.rightSideWrapper}>
                    {/* insert component here */}
                </div>
            </div>
        </>
    );
};

Dashboard.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

export default connect(mapStateToProps, null)(Dashboard);
