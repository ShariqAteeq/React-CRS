import React, { Component } from "react";
import { createJob, deleteJob, UpdateJob } from "../../../actions/jobActions";
import { isLoggedIn } from "../../../actions/authActions";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Navbar from "../../layout/navbar";
import { Redirect } from "react-router-dom";

class EditJob extends Component {
    state = {
        jobname: "",
        noofvac: "",
        salary: "",
      };
    
      onSubmit = (e) => {
        e.preventDefault();
        let id = this.props.match.params.id;
        this.props.UpdateJob(id , this.state);
        console.log(this.props.jobs);
        console.log(this.props.fb);
        //<Redirect to = '/cprofile' />
      };
    
      handleChange = (e) => {
        this.setState({
          [e.target.id]: e.target.value,
        });
      };

      componentDidMount() {
        let id = this.props.match.params.id;
        const { jobs } = this.props;
            jobs.map((job) => {
             if (job.id == id) {
                this.setState({
                    jobname: job.jobname,
                    noofvac: job.noofvac,
                    salary: job.salary
                })
      }})}

  render() {

    return (
      <div>
        <Navbar />
        <div className="job">
          <h2 className="job-title">Edit Job!</h2>
          <input
            type="text"
            id="jobname"
            placeholder="Job Title"
            value={this.state.jobname}
            onChange={this.handleChange}
            className="job-field"
          />
          <input
            type="text"
            id="salary"
            placeholder="Salary"
            value={this.state.salary}
            onChange={this.handleChange}
            className="job-field"
          />
          <input
            type="text"
            id="noofvac"
            placeholder="Number of Vacancies"
            value={this.state.noofvac}
            onChange={this.handleChange}
            className="job-field"
          />
          <button onClick={this.onSubmit} className="job-btn">
            Update Job
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
      jobs: state.firestore.ordered.jobs || state.job.jobs,
      auth: state.auth.auth,
      fb: state.firebase.auth,
    };
  };
  
  const mapDisptachToProps = (dispatch) => {
    return {
      UpdateJob: (id, newData) => dispatch(UpdateJob(id, newData)),
    };
  };
  
  export default compose(
    connect(mapStateToProps, mapDisptachToProps),
    firestoreConnect(() => [{ collection: "jobs" }])
  )(EditJob);