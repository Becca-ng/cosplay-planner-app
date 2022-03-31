import { SET_IS_FORM_OPEN } from "../actionTypes"

const initialState = false;

function formReducer(state=initialState, action) {
  if (action.type === SET_IS_FORM_OPEN) {
    return  action.payload;
  }
  return state;
}

export default formReducer;