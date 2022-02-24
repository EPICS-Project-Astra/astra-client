import Logo from '../Logo/Logo';
import classes from './Navbar.module.scss';
import { UserPlus } from 'react-feather';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { WalletContext } from '../../context/WalletContext';

const Navbar = () => {
  const { currentAccount, connectWallet } = useContext(WalletContext);

  return (
    <div className={classes.navBar}>
      <Logo />
      <div className={classes.rightSide}>
        <Link to="/login" className={classes.login}>
          Log In
        </Link>
        <Link to="/register" className={classes.register}>
          <UserPlus size={18} className={classes.userPlusLogo} /> Register
        </Link>
        {currentAccount ? (
          <div className={classes.login}>{currentAccount.slice(0, 7)}</div>
        ) : (
          <div className={classes.login} onClick={() => connectWallet()}>
            Connect Wallet
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
