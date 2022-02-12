import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const initialState = {};

export default function setAlert(state = initialState, action) {
    switch (action.type) {
        case SET_ALERT:
            return { ...state, payload: action.payload };
        case REMOVE_ALERT:
            return { ...state, payload: null };
        default:
            return state;
    }
}
