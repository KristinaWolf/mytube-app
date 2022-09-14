import { combineReducers } from "redux";
import {contentReducer} from '../store/content/reducers'; 

const reducers = {content: contentReducer};
export const reducer = combineReducers(reducers);