import AvatarIcon from '../../assets/icons/avatar.svg';
import classes from './Avatar.module.scss';

const Avatar = (props) => {
	return (
		<div className={classes.avatar}>
			{props.size ? (
				<img
					src={AvatarIcon}
					height={props.size}
					width={props.size}
					alt="Avatar"
				/>
			) : (
				<img src={AvatarIcon} height={45} width={45} alt="Avatar" />
			)}
		</div>
	);
};

export default Avatar;
