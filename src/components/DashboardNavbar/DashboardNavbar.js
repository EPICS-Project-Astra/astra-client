import { ChevronDown, Plus } from 'react-feather';
import { Link } from 'react-router-dom';
import { ReactComponent as Astra } from '../../assets/icons/rocket.svg';
import Avatar from '../Avatar/Avatar';
import DropDown from '../DropDown/DropDown';
import DropDownLink from '../DropDownLink/DropDownLink';
import Logo from '../Logo/Logo';
import classes from './DashboardNavbar.module.scss';

const DashboardNavbar = () => {
	return (
		<div className={classes.DashboardNavbar}>
			<Link to="/dashboard">
				<Logo dashboard />
			</Link>
			<div className={classes.rightSide}>
				<Link to="/post/create" className={classes.createPost}>
					<Plus size={30} />
				</Link>
				<DropDownLink DropDown={<DropDown astracoin />}>
					<div className={classes.astracoins}>
						<Astra fill="white" height="26" width="26" />
					</div>
				</DropDownLink>
				<DropDownLink
					className={classes.avatar}
					DropDown={<DropDown />}
				>
					<Avatar size={40} />
					<ChevronDown className={classes.chevronDown} />
				</DropDownLink>
			</div>
		</div>
	);
};

export default DashboardNavbar;
