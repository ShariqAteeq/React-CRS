import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import av from "../../img/av1.jpg";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Navbar from "../layout/navbar";
import { compose } from "redux";
import { connect } from "react-redux";
import { UpdateJob, deleteJob } from "../../actions/jobActions";
import { firestoreConnect } from "react-redux-firebase";
import { Modal, Popconfirm } from "antd";
import { Link } from "react-router-dom";

class CompanyProfile extends Component {
  state = {
    visible: false,
    jobname: "",
    noofvac: "",
    salary: "",
    location: "",
  };

  showModal = (job) => {
    this.setState({
      visible: true,
      jobname: job.name,
      noofvac: job.noofvac,
      salary: job.salary
    });
  };

  handleOk = (id) => {
    this.setState({
      visible: false,
    });
    let job = {
      jobname: this.state.jobname,
      noofvac:this.state.noofvac,
      salary: this.state.salary
    }
    this.props.UpdateJob(id, job);
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
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

  //  update = (id , job) => {
  //   this.props.UpdateJob(id, job);
  // };

  delete = (e, id) => {
    e.preventDefault();
    this.props.deleteJob(id);
  };

  render() {
    const { jobs } = this.props;

    let myjob = jobs.map((job, i) => {
      if (this.props.fb.uid == job.authId) {
        return (
          <div className="cprofile-card" key={i}>
            <h3 className="cprofile-title">{job.jobname}</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <div className="cprofile-card-bot">
              <p>No.of Vacancies - {job.noofvac}</p>
              <p>Salary - ${job.salary}</p>
            </div>
            <div className="cprofile-card-bot">
              <Link className="cprofile-btn" to ={`/editJob/${job.id}`}>
                Update
              </Link>
              <Popconfirm
                title="Are you sure delete this Job?"
                onConfirm={() => this.props.deleteJob(job.id)}
                okText="Yes"
                cancelText="No"
              >
                <button className="cprofile-btn">Delete</button>
              </Popconfirm>
            </div>
           
          </div>
        );
      }
    });
    return (
      <div className="companyProfile">
        <Navbar />
        <div className="studentDet">
          <div className="studentDet-sidebar">
            <Avatar alt="Remy Sharp" src={av} className="studentList-avatar" />
            <h4 className="studentDet-name">Harry</h4>
            <p className="studentDet-tag">Back-End Developer</p>
            <div className="studentDet-contact">
              <h4 className="studentDet-contactDet">Contact Information</h4>
              <div className="studentDet-list">
                <EmailIcon />
                <p>harry@hary.com</p>
              </div>
              <div className="studentDet-list">
                <PhoneIcon />
                <p>+2333 222</p>
              </div>
              <div className="studentDet-list">
                <HomeIcon />
                <p>Karachi</p>
              </div>
              <div className="studentDet-list">
                <GitHubIcon />
                <p>github.com/harry</p>
              </div>
              <div className="studentDet-list">
                <LinkedInIcon />
                <p>linkedin.com/harry</p>
              </div>
            </div>
          </div>
          <div className="cprofile-right">
            <h3 className="studentDet-h3">My Jobs</h3>
            <div className="cprofile-jobs">{myjob}</div>
          </div>
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
    deleteJob: (id) => dispatch(deleteJob(id)),

  };
};

export default compose(
  connect(mapStateToProps, mapDisptachToProps),
  firestoreConnect(() => [{ collection: "jobs" }])
)(CompanyProfile);

{/* <Modal
title="Edit Job"
visible={this.state.visible}
onOk={() => this.handleOk(job.id)}
onCancel={this.handleCancel}
okText="Update"
okType="primary"
>
<div>
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
</div>
</Modal> */}