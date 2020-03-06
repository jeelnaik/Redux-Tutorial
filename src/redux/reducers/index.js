import {combineReducers} from "redux";
import courses from "./courseReducer"
import authors from './authorReducer'
const rootReducer = combineReducers({
  course: courses,
  authors: authors
})

export default rootReducer;
