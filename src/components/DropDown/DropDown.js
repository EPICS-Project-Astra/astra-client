import { useContext, useEffect, useState } from 'react';
import { LogOut, Settings, User } from 'react-feather';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutUser } from '../../actions/auth';
import { ReactComponent as Astra } from '../../assets/icons/rocket.svg';
import { WalletContext } from '../../context/WalletContext';
import store from '../../store';
import { tokenBalance } from '../../utils/contract-functions';
import classes from './DropDown.module.scss';

const DropDown = (props) => {
	const [balance, setBalance] = useState(0);
	const { currentAccount } = useContext(WalletContext);
	useEffect(() => {
		(async () => {
			console.log('called');
			setBalance(await tokenBalance(currentAccount));
		})();
	}, [currentAccount]);

	const navigate = useNavigate();
	const logOut = () => {
		store.dispatch(logoutUser());
		navigate('/login');
	};

	const DropDownItem = (itemProps) => {
		return (
			<div
				className={
					itemProps.logout ? classes.menuItemLogOut : classes.menuItem
				}
			>
				<span className={classes.icon}>{itemProps.icon}</span>
				<div className={classes.itemName}>
					{itemProps.children}
					<span className={classes.description}>
						{itemProps.description}
					</span>
				</div>
			</div>
		);
	};

	return props.astracoin ? (
		<div className={classes.astraDropdown}>
			<span className={classes.balance}>
				{balance}{' '}
				{<Astra height={25} width={25} className={classes.icon} />}
			</span>
			<Link to="/astracoin" className={classes.link}>
				<button className={classes.button}>Buy AstraCoin</button>
			</Link>
		</div>
	) : (
		<div className={classes.dropdown}>
			<Link to="/profile" className={classes.link}>
				<DropDownItem icon={<User />} description={'Profile'}>
					<span>{props.user?.username}</span>
				</DropDownItem>
			</Link>
			<DropDownItem icon={<Settings />}>
				<span>Settings</span>
			</DropDownItem>
			<div onClick={logOut}>
				<DropDownItem icon={<LogOut />} logout={true}>
					<span>Sign Out</span>
				</DropDownItem>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.auth.user
	};
};

export default connect(mapStateToProps, null)(DropDown);
