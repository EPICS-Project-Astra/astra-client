import Navbar from "../../components/Navbar/Navbar";
import classes from "./Login.module.scss";
import Planets from "../../assets/images/Planets.png";
import { useState } from "react";
import { XCircle } from "react-feather";

const Login = () => {
    const [errorState, setErrorState] = useState(false);

    const submitEvent = (e) => {
        e.preventDefault();
        setErrorState((prevState) => !prevState);
    };

    document.body.style = "background: #254360;";
    return (
        <div className={classes.Login}>
            <Navbar />
            <div className={classes.hero}>
                <img src={Planets} alt="planets" className={classes.planets} />
                <form className={classes.formField} onSubmit={submitEvent}>
                    <h2>We’ve missed you!</h2>
                    <span className={classes.message}>
                        Hop back in to see what the community has been upto.
                    </span>
                    <input
                        type="text"
                        className={classes.textField}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        className={classes.textField}
                        placeholder="Password"
                    />
                    <button type="submit">Sign In</button>

                    <span
                        className={classes.errorDiv}
                        style={{
                            visibility: errorState ? "visible" : "hidden",
                        }}
                    >
                        <XCircle />
                        <div>Error message</div>
                    </span>
                </form>
            </div>
        </div>
    );
};

export default Login;
