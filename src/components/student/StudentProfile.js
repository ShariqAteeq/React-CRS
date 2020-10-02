import React, { Component } from 'react';
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
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

 class StudentProfile extends Component {
    render() {

        const { jobs , profile } = this.props;
        console.log(jobs);

    let myjob = jobs.map((job, i) => {
      if (this.props.fb.uid == job.userId) {
        return (
          <div className="cprofile-card" key={i}>
            <h3 className="cprofile-title">{job.jobname}</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <div className="joblist-flex">
            <div className="">
              <p>
                <b>Company</b> - {job.cname}
              </p>
              <p>
                <b>Location</b> - {job.location}
              </p>
            </div>
            <div className="">
              <p>
                <b>Salary</b> - ${job.salary}
              </p>
            </div>
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
                <h3 className="studentDet-h3">Applied Jobs</h3>
                <div className="cprofile-jobs">{myjob}</div>
              </div>
            </div>
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      jobs: state.firestore.ordered.appJobs || state.job.jobs,
      auth: state.auth.auth,
      profile: state.firebase.profile,
      fb: state.firebase.auth,
    };
  };
  
//   const mapDisptachToProps = (dispatch) => {
//     return {
//       deleteJob: (id) => dispatch(deleteJob(id)),
  
//     };
//   };
  
  export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => [{ collection: "appJobs" }])
  )(StudentProfile);
  