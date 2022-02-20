import classes from "./CreatePost.module.scss"
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar"
import Create from "../../components/CreateNewPost/CreateNewPost"
const CreatePost = () => {
  return (
    <>
      <DashboardNavbar />
      <div className={classes.dashboard}>
        <div className={classes.sidebarWrapper}>
          {/* insert component here */}
        </div>
        <div className={classes.postsWrapper}>
          <Create />
        </div>
        <div className={classes.rightSideWrapper}>
          {/* insert component here */}
        </div>
      </div>
    </>
  );
};

export default CreatePost;
