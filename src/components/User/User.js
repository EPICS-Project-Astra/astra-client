import { format } from 'timeago.js';
import Avatar from '../Avatar/Avatar';
import classes from './User.module.scss';

const User = (props) => {
  return (
    <div className={classes.user}>
      <Avatar />
      <span className={classes.userDetails}>
        <div className={classes.name}>
          {props.user.username} - {props.user.wallet}
        </div>
        <div className={classes.time}>{format(props.date)}</div>
      </span>
    </div>
  );
};

export default User;
