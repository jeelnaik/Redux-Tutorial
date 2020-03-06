import React from "react";
import {connect} from "react-redux"
import * as courseActions from "../../redux/actions/courseActions.js"
import * as authorActions from "../../redux/actions/authorActions.js"
import PropTypes from "prop-types"
import {bindActionCreators} from "redux"
import CourseForm from "./CourseForm"
// import {newCourse} from "../../../tools/mockData"
const newCourse = {
  id: null,
  title: "",
  authorId: null,
  category: ""
};

class ManageCoursePage extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      course: props.course,
      setCourse: props.setCourse,
      errors: ''
    }
  }


  componentDidMount(){
    if (this.props.course.length === 0) {
      this.props.loadCourses().catch(error => {
        alert("Loading Failed")
      })
    }
    if (this.props.authors.length === 0) {
      this.props.loadAuthors().catch(error => {
        alert("Loading Failed")
      })
    }
  }

  render() {
    return(
        <>
        <h2>Manage Courses </h2>
        <CourseForm course={this.props.newCourse} errors={this.state.errors} authors={this.props.authors} />
        </>
    )
  }
}

  ManageCoursePage.propTypes = {
    course: PropTypes.array.isRequired,
    authors: PropTypes.array.isRequired

  };

  function mapStateToProps(state) {
    return {
      newCourse: newCourse,
      course: state.authors,
      authors: state.authors

    }
  }

const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageCoursePage);
