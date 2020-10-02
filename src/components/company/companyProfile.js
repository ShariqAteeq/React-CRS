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

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createJob(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  delete = (e, id) => {
    e.preventDefault();
    this.props.deleteJob(id);
  };

  render() {
    const { jobs , profile } = this.props;

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
            <h4 className="studentDet-name">{profile.name}</h4>
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
    profile: state.firebase.profile,
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
