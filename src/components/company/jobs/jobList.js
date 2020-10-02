import React, { Component } from "react";
import Navbar from "../../layout/navbar";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { appliedJobs } from "../../../actions/jobActions";
import { Modal, Button } from "antd";

class JobList extends Component {
  state = {
    modal2Visible: false,
  };

  setModal2Visible(modal2Visible) {
    this.setState({ modal2Visible });
  }

  handleSubmit = (job) => {
    let myJob = {
      jobname: job.jobname,
      location: job.location,
      cname: job.cname,
      salary: job.salary
    }
    this.props.appliedJobs(myJob);
    this.setModal2Visible(true);
  };

  render() {
    let { auth, jobs } = this.props;
    const navbar = auth ? <Navbar /> : null;

    let myjob = jobs.map((job, i) => {
      return (
        <div className="joblist-card" key={i}>
          <h3 className="cprofile-title">{job.jobname}</h3>
          <p className="joblist-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500sLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s
          </p>
          <div className="joblist-flex">
            <div className="joblist-text">
              <p>
                <b>Company</b> - {job.cname}
              </p>
              <p>
                <b>Location</b> - Karachi
              </p>
            </div>
            <div className="joblist-text">
              <p>
                <b>Vacancies</b> - {job.noofvac}
              </p>
              <p>
                <b>Salary</b> - ${job.salary}
              </p>
            </div>
          </div>
          <div className="companyDetail-jbtn">
            <button
              className="cprofile-btn"
              onClick={() => this.handleSubmit(job)}
            >
              Apply Now
            </button>
          </div>
        </div>
      );
    });
    return (
      <div>
        {navbar}
        <h2 className="company-list-main">All Jobs</h2>
        <div className="joblist">{myjob}</div>
        <Modal
          title="Applied Jobs"
          centered
          visible={this.state.modal2Visible}
          onOk={() => this.setModal2Visible(false)}
          onCancel={() => this.setModal2Visible(false)}
        >
          <h2>You have Successfully Applied for this Job!!.</h2>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    jobs: state.firestore.ordered.jobs || state.job.jobs,
    auth: state.auth.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    appliedJobs: (job) => dispatch(appliedJobs(job)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [{ collection: "users" }, { collection: "jobs" }])
)(JobList);
