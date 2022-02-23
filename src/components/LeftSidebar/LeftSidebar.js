import { Home, Award, User } from 'react-feather';
import { ReactComponent as Rocket } from '../../assets/icons/rocket.svg';
import classes from './LeftSidebar.module.scss';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div>
      <div className={classes.body}>
        <div className={classes.module}>
          <div className={classes.heading}>Menu</div>
          <Link to="/dashboard" className={classes.link}>
            <Home className={classes.icon} />
            <span className={classes.linkText}>Home</span>
          </Link>
          <Link to="#" className={classes.link}>
            <Award className={classes.icon} />
            <span className={classes.linkText}>Ranking</span>
          </Link>
        </div>
        <div className={classes.module}>
          <div className={classes.heading}>Personal</div>
          <Link to="#" className={classes.link}>
            <User className={classes.icon} />
            <span className={classes.linkText}>Profile</span>
          </Link>
          <Link to="/astracoin" className={classes.link}>
            <Rocket className={classes.icon} />
            <span className={classes.linkText}>AstraCoin</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
