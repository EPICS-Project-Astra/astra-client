import Navbar from '../../components/Navbar/Navbar';
import classes from './Register.module.scss';
// import Planets from "../../assets/images/Planets.png";
import Planets from '../../assets/images/Planets.png';
import { XCircle } from 'react-feather';
import { useEffect, useContext } from 'react';

import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { showAlert } from '../../actions/alert';
import PropTypes from 'prop-types';
import { registerUser } from '../../actions/auth';
import { WalletContext } from '../../context/WalletContext';

const Register = (props) => {
  const { currentAccount } = useContext(WalletContext);

  document.body.style = 'background: #254360;';
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const cPassword = useRef(null);

  const navigate = useNavigate();
  const registerUser = (event) => {
    event.preventDefault();
    //check if passwords match
    if (currentAccount === undefined) {
      props.showAlert('Connect a wallet first');
    } else if (password.current.value !== cPassword.current.value) {
      props.showAlert('Passwords do not match.', 'danger');
    } else {
      props.registerUser({
        username: name.current.value,
        // email: email.current.value,
        password: password.current.value,
        wallet: currentAccount
      });
    }
  };

  useEffect(() => {
    if (props.isAuthenticated) {
      return navigate('/dashboard');
    }
  }, [props.isAuthenticated]);

  return (
    <div className={classes.Register}>
      <Navbar />
      <div className={classes.hero}>
        <img src={Planets} alt="planets" className={classes.planets} />
        <form className={classes.formField} onSubmit={registerUser}>
          <h2>Join Astra Community</h2>
          <span className={classes.message}>
            Earn AstraCoins based on any sort of community service you provide.
          </span>
          <input
            type="text"
            className={classes.textField}
            placeholder="Username"
            ref={name}
          />
          <input
            type="email"
            className={classes.textField}
            placeholder="Email"
            ref={email}
          />
          <input
            type="password"
            className={classes.textField}
            placeholder="Password"
            ref={password}
          />
          <input
            type="password"
            className={classes.textField}
            placeholder="Confirm Password"
            ref={cPassword}
          />

          <button type="submit">Create an Account</button>

          <span
            className={classes.errorDiv}
            style={{
              visibility: props.alert ? 'visible' : 'hidden'
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

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  alert: PropTypes.string,
  showAlert: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    alert: state.alert.payload?.msg
  };
};

const mapDispatchToProps = {
  showAlert: showAlert,
  registerUser: registerUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);

// export default Register;
