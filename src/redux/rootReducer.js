import { combineReducers } from "redux";
import cardData from "./reducer";
import productData from "./ProductReducer";


export default combineReducers({
    cardData,
    productData,
})