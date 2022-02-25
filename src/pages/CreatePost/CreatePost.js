import CreateNewPost from '../../components/CreateNewPost/CreateNewPost';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
import classes from '../../scss/DashboardCommon.module.scss';

const CreatePost = () => {
	return (
		<>
			<DashboardNavbar />
			<div className={classes.dashboard}>
				<div className={classes.sidebarWrapper}>
					<LeftSidebar />
				</div>
				<div className={classes.postsWrapper}>
					<CreateNewPost />
				</div>
				<div className={classes.rightSideWrapper}>
					<RightSidebar />
				</div>
			</div>
		</>
	);
};

export default CreatePost;
