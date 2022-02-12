import { logoutUser } from "../../actions/auth";
import store from "../../store";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import rocket from "../../assets/icons/rocket.svg";

const Dashboard = (props) => {
    document.body.style = "background: #254360;";
    const navigate = useNavigate();
    const logOut = () => {
        store.dispatch(logoutUser());
        navigate("/login");
    };

    return (
        <div>
            <img src={rocket} alt="rocket" />
            <span>Username: {props.auth.user?.name}</span>
            <button onClick={logOut}>Log Out</button>
        </div>
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
