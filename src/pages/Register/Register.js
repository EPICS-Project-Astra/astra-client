import Navbar from "../../components/Navbar/Navbar";
import classes from "./Register.module.scss";
// import Planets from "../../assets/images/Planets.png";
import Planets from "../../assets/images/Planets.png";
import { XCircle } from "react-feather";
import { useState } from "react";

const Register = () => {
    const [errorState, setErrorState] = useState(false);

    const submitEvent = (e) => {
        e.preventDefault();
        setErrorState((prevState) => !prevState);
    };

    document.body.style = "background: #254360;";
    return (
        <div className={classes.Register}>
            <Navbar />
            <div className={classes.hero}>
                <img src={Planets} alt="planets" className={classes.planets} />
                <form className={classes.formField} onSubmit={submitEvent}>
                    <h2>Join Astra Community</h2>
                    <span className={classes.message}>
                        Earn AstraCoins based on any sort of community service
                        you provide.
                    </span>
                    <input
                        type="text"
                        className={classes.textField}
                        placeholder="Username"
                    />
                    <input
                        type="email"
                        className={classes.textField}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        className={classes.textField}
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        className={classes.textField}
                        placeholder="Confirm Password"
                    />

                    <button type="submit">Create an Account</button>

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

export default Register;
