// import classes from './Astracoin.module.scss';
import Sticky from 'react-stickynode';
import BuyACCon from '../../components/BuyAstraCoin/BuyAstraCoin.js';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import classes from '../../scss/DashboardCommon.module.scss';

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
