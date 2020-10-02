import React, { Component } from "react";
import { createJob, deleteJob, UpdateJob } from "../../../actions/jobActions";
import { isLoggedIn } from "../../../actions/authActions";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Navbar from "../../layout/navbar";
import { Redirect } from "react-router-dom";

class CreateJob extends Component {
  state = {
    jobname: "",
    noofvac: "",
    salary: "",
    location: "",
    su: false
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createJob(this.state);

    this.setState({su: true});
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
  //  if (this.props.auth == false) return <Redirect to="/" />;
    
    return (
      <div>
        <Navbar />
        <div className="job">
          <h2 className="job-title">Create Job!</h2>
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
            id="location"
            placeholder="Location"
            value={this.state.location}
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
            Create Job
          </button>
          {this.state.su ? <Redirect to = '/cprofile' /> : null}
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
    createJob: (job) => dispatch(createJob(job)),
    isLoggedIn: () => dispatch(isLoggedIn()),
  };
};

export default compose(
  connect(mapStateToProps, mapDisptachToProps),
  firestoreConnect(() => [{ collection: "jobs" }])
)(CreateJob);



// delete = (e) => {
  //   e.preventDefault();
  //   this.props.deleteJob(this.props.jobs[0].id);
  // };

  // edit = (e) => {
  //   this.state.jobname = this.props.jobs[0].jobname;
  //   this.state.noofvac = this.props.jobs[0].noofvac;
  // };

  // update = (e) => {
  //   this.props.UpdateJob(this.props.jobs[0].id, this.state);
  // };

  // applyJob = (e) => {
  //   const newArr = this.state.appliedJobs;
  //   let job = {
  //     userid: this.props.jobs[0].authId,
  //     jobId: this.props.jobs[0].id,
  //     jobName: this.props.jobs[0].jobname,
  //   };
  //   newArr.push(job);
  //   this.setState({
  //     appliedJobs: newArr,
  //   });
  //   console.log(this.state.appliedJobs);
  // };

  // componentDidMount() {
  //       console.log(this.props.fb);
  //       this.props.isLoggedIn();
  // }

