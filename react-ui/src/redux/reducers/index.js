import { combineReducers } from "redux";
import form from "./form";
import checkLogin from "./loggedIn";

export default combineReducers({form,checkLogin});