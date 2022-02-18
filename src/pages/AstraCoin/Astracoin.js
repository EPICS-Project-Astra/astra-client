import classes from "./Astracoin.module.scss"
import DashboardNavbar from "../../components/DashboardNavbar/DashboardNavbar"
import Post from "../../components/Post/Post"
const Astracoin = () => {
  return (
    <>
      <DashboardNavbar />
      <div className={classes.dashboard}>
        <div className={classes.sidebarWrapper}>
          {/* insert component here */}
        </div>
        <div className={classes.postsWrapper}>
          <Post />
        </div>
        <div className={classes.rightSideWrapper}>
          {/* insert component here */}
        </div>
      </div>
    </>
  );
};

export default Astracoin;
