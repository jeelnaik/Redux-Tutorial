import * as types from './actionTypes'
import * as courseApi from '../../api/courseApi'

export function createCourse(course) {
  return {type: types.CREATE_COURSE, course: course}
}

export function loadCoursesSuccess(course) {
  return {type: types.LOAD_COURSES_SUCCESS, course: course}
}

export function loadCourses(){
  return function(dispatch) {
    return courseApi.getCourses().then(courses => {
      dispatch(loadCoursesSuccess(courses))
    }).catch(error => {
      throw error;
    })
  }
}
