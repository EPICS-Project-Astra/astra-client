import { connect } from 'react-redux';
import { format } from 'timeago.js';
import { ReactComponent as Rocket } from '../../assets/icons/rocket.svg';
import Avatar from '../Avatar/Avatar';
import classes from './ProfileCard.module.scss';

const ProfileCard = (props) => {
	return (
		<div className={classes.body}>
			<div className={classes.gradient}></div>
			<div className={classes.avatarWrapper}>
				<Avatar size={90} />
			</div>
			<div className={classes.username}>{props.user?.username}</div>

			<div className={classes.module}>
				<div className={classes.title}>Joined</div>
				<div>{format(props.user?.date)}</div>
			</div>
			<div className={classes.module}>
				<div className={classes.title}>AstraCoins Received</div>
				<div className={classes.content}>
					500{' '}
					<Rocket height={18} width={18} className={classes.icon} />
				</div>
			</div>
			<div className={classes.module}>
				<div className={classes.title}>AstraCoins Awarded</div>
				<div className={classes.content}>
					300{' '}
					<Rocket height={18} width={18} className={classes.icon} />
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.auth.user,
		isAuthenticated: state.auth.isAuthenticated
	};
};

export default connect(mapStateToProps, null)(ProfileCard);
