import Navbar from "../../components/Navbar/Navbar";
import classes from "./Login.module.scss";
import Planets from "../../assets/images/Planets.png";
import { XCircle } from "react-feather";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { showAlert } from "../../actions/alert";
import { loginUser } from "../../actions/auth";
import PropTypes from "prop-types";

const Login = (props) => {
    document.body.style = "background: #254360;";
    const name = useRef(null);
    const password = useRef(null);

    const navigate = useNavigate();

    const loginUser = async (event) => {
        event.preventDefault();
        await props.loginUser(name.current.value, password.current.value);
    };

    useEffect(() => {
        if (props.isAuthenticated) {
            return navigate("/dashboard");
        }
    }, [props.isAuthenticated]);

    return (
        <div className={classes.Login}>
            <Navbar />
            <div className={classes.hero}>
                <img src={Planets} alt="planets" className={classes.planets} />
                <form className={classes.formField} onSubmit={loginUser}>
                    <h2>We’ve missed you!</h2>
                    <span className={classes.message}>
                        Hop back in to see what the community has been upto.
                    </span>
                    <input
                        type="text"
                        className={classes.textField}
                        placeholder="Username"
                        ref={name}
                    />
                    <input
                        type="password"
                        className={classes.textField}
                        placeholder="Password"
                        ref={password}
                    />
                    <button type="submit">Sign In</button>

                    <span
                        className={classes.errorDiv}
                        style={{
                            visibility: props.alert ? "visible" : "hidden",
                        }}
                    >
                        <XCircle />
                        <div>{props.alert}</div>
                    </span>
                </form>
            </div>
        </div>
    );
};

Login.propTypes = {
    isAuthenticated: PropTypes.bool,
    alert: PropTypes.string,
    showAlert: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        alert: state.alert.payload?.msg,
    };
};

const mapDispatchToProps = {
    showAlert: showAlert,
    loginUser: loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
