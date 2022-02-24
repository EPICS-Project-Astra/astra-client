import classes from './CreatePost.module.scss';
import DashboardNavbar from '../../components/DashboardNavbar/DashboardNavbar';
import Create from '../../components/CreateNewPost/CreateNewPost';
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/RightSidebar/RightSidebar';
const CreatePost = () => {
  return (
    <>
      <DashboardNavbar />
      <div className={classes.dashboard}>
        <div className={classes.sidebarWrapper}>
          <LeftSidebar />
        </div>
        <div className={classes.postsWrapper}>
          <Create />
        </div>
        <div className={classes.rightSideWrapper}>
          <RightSidebar />
        </div>
      </div>
    </>
  );
};

export default CreatePost;
