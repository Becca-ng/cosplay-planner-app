import { SET_IS_FORM_OPEN } from "./actionTypes"


export const setIsFormOpen = (val) => {
    return{
        type: SET_IS_FORM_OPEN,
        payload: !val
    }
}