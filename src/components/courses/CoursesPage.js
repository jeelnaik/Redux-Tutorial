import React from "react";
import {connect} from "react-redux"
import * as courseActions from "../../redux/actions/courseActions.js"
import * as authorActions from "../../redux/actions/authorActions.js"
import PropTypes from "prop-types"
import {bindActionCreators} from "redux"
import CourseList from './CourseList'


class CoursesPage extends React.Component {

  componentDidMount(){
    if (this.props.course.length === 0) {
      this.props.actions.loadCourses().catch(error => {
        alert("Loading Failed")
      })
    }
    if (this.props.authors.length === 0) {
      this.props.actions.loadAuthors().catch(error => {
        alert("Loading Failed")
      })
    }
  }

  render() {
    return(
        <>
        <h2>Courses </h2>
        <CourseList courses={this.props.course} />

        </>
    )
  }
}

  CoursesPage.propTypes = {
    course: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired

  };

  function mapStateToProps(state) {
    return {
      course: state.authors.length === 0 ?
      [] : state.course.map(c => {
        return{
          ...c,
          authorName: state.authors.find(a=> a.id === c.authorId).name
        }
      }),
      authors: state.authors

    }
  }

  function mapDispatchToProps(dispatch){
    return {
      actions: {
        loadCourses: bindActionCreators(courseActions.loadCourses,dispatch),
        loadAuthors: bindActionCreators(authorActions.loadAuthors,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
