import { logoutUser } from "../../actions/auth";
import store from "../../store";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classes from "./Dashboard.module.scss";
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar";

const Dashboard = (props) => {
    document.body.style = "background: #FAFAFA;";
    const navigate = useNavigate();
    const logOut = () => {
        store.dispatch(logoutUser());
        navigate("/login");
    };

    return (
        <>
            <DashboardNavbar logout={logOut} />
            <div className={classes.dashboard}>
                <div className={classes.sidebarWrapper}>
                    {/* insert component here */}
                </div>
                <div className={classes.postsWrapper}>
                    {/* insert component here */}
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

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
