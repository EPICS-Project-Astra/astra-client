import BuyACCon from '../../components/BuyAstraCoin/BuyAstraCoin.js';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import classes from '../../scss/DashboardCommon.module.scss';

const Astracoin = () => {
	return (
		<>
			<DashboardNavbar />
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
