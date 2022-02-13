import classes from "./DashboardNavbar.module.scss";

const DashboardNavbar = ({ logout }) => {
    return (
        <div className={classes.DashboardNavbar}>
            <button
                className={classes.logout}
                onClick={() => {
                    logout();
                }}
            >
                Log Out
            </button>
        </div>
    );
};

export default DashboardNavbar;
