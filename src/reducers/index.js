import { combineReducers } from "redux";
import auth from "./auth";
import post from "./post";
import alert from "./alert";

export default combineReducers({
    alert: alert,
    auth: auth,
    post: post,
});
