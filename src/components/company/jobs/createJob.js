import React, { Component } from "react";
import { createJob, deleteJob, UpdateJob } from "../../../actions/jobActions";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Redirect } from "react-router-dom";


class CreateJob extends Component {
  state = {
    jobname: "",
    noofvac: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createJob(this.state);
    console.log(this.props.jobs);
    console.log(this.props.fb);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  delete = (e) => {
    e.preventDefault();
    this.props.deleteJob(this.props.jobs[0].id);
  };

  edit = (e) => {
    this.state.jobname = this.props.jobs[0].jobname;
    this.state.noofvac = this.props.jobs[0].noofvac;
  };

  update = (e) => {
    this.props.UpdateJob(this.props.jobs[0].id, this.state);
  };

  // componentDidMount() {

  // }

  render() {
    if (this.props.auth == false) return <Redirect to="/" />;
    const {jobs} = this.props;
    
let myjob = (
    jobs.map((job ,i) => {
        if(this.props.fb.uid == job.authId) {
            return(
                <div key={i}>
          <p>{job.id}</p>
          <p>
            title: {job.jobname} vac : {job.noofvac}
          </p>
        </div>
              )}})
        );
    
    return (
      <div>
        <input
          type="text"
          id="jobname"
          placeholder="job name"
          value={this.state.jobname}
          onChange={this.handleChange}
        />
        <input
          type="text"
          id="noofvac"
          placeholder="no of vac"
          value={this.state.noofvac}
          onChange={this.handleChange}
        />
        <button onClick={this.onSubmit}>Create Job</button>
        <button onClick={this.delete}>Delete</button>
        <button onClick={this.edit}>Edit</button>
        <button onClick={this.update}>Update</button>
        <br />
        <br />
        <br />
        {this.props.jobs.map((job, i) => {
          return (
            <div key={i}>
              <p>{job.id}</p>
              <p>
                title: {job.jobname} vac : {job.noofvac}
              </p>
            </div>
          );
        })}
        <br />
        <br />
        <br />
        {myjob}
    <p>{myjob.length}</p>
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
    deleteJob: (id) => dispatch(deleteJob(id)),
    UpdateJob: (id, newData) => dispatch(UpdateJob(id, newData)),
  };
};

export default compose(
  connect(mapStateToProps, mapDisptachToProps),
  firestoreConnect(() => [{ collection: "jobs" }])
)(CreateJob);
