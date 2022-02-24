import classes from './Astracoin.module.scss';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';
import BuyACCon from '../../components/buyastracoin/BuyAC.js';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import Sticky from 'react-stickynode';

const Astracoin = () => {
  return (
    <>
      <Sticky>
        <DashboardNavbar />
      </Sticky>
      <div className={classes.dashboard}>
        <div className={classes.sidebarWrapper}>
          <LeftSidebar />
        </div>
        <div className={classes.postsWrapper}>
          <BuyACCon />
        </div>
        <div className={classes.rightSideWrapper}>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default Astracoin;
