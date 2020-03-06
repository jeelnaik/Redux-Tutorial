import * as types from '../actions/actionTypes'
import initialState from './initialState'


export default function courseReducer(state = initialState.courses,action) {
  switch(action.type){
    case types.CREATE_COURSE:
      return [...state , {...action.course}]
    case types.LOAD_COURSES_SUCCESS:
      console.log(action,action.courses);
      return action.course;
    default:
      return state;
  }
}