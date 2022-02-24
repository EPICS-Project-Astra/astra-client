import { Star, Link as LinkIcon } from 'react-feather';
import classes from './RightSidebar.module.scss';
import { Link } from 'react-router-dom';

const RightSidebar = () => {
  return (
    <div>
      <div className={classes.body}>
        <div className={classes.module}>
          <div className={classes.heading}>
            <Star className={classes.icon} />
            Must-read posts
          </div>
          <Link to="#" className={classes.link}>
            <span className={classes.linkText}>How Astra works?</span>
          </Link>
          <Link to="#" className={classes.link}>
            <span className={classes.linkText}>
              Astra Coin Distribution, Cashing-in and other FAQs
            </span>
          </Link>
        </div>
        <div className={classes.module}>
          <div className={classes.heading}>
            <LinkIcon className={classes.icon} />
            Featured links
          </div>
          <Link to="#" className={classes.link}>
            <span className={classes.linkText}>Our Aim</span>
          </Link>
          <Link to="#" className={classes.link}>
            <span className={classes.linkText}>AstraCoin Future</span>
          </Link>
          <Link to="#" className={classes.link}>
            <span className={classes.linkText}>Contact Us</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
