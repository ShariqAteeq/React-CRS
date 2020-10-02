import React, { Component } from "react";
import Navbar from "../layout/navbar";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import logo from "../../img/ibm.png";
import { Link } from "react-router-dom";

class CompanyDetail extends Component {
  render() {
    let { auth, user, jobs, id } = this.props;
    const navbar = auth ? <Navbar /> : null;

    let myjob = jobs.map((job, i) => {
      if (id == job.authId) {
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
            <div className="companyDetail-jbtn">
              <Link className="cprofile-btn">Apply Now</Link>
            </div>
          </div>
        );
      }
    });

    if (user && myjob) {
      return (
        <div>
          {navbar}
          <div className="companyDetail">
            <div className="companyDetail-head">
              <img src={logo} className="companyDetail-logo" />
              <h1 className="companyDetail-title">{user.name}</h1>
            </div>
            <h3 className="companyDetail-headings">Description</h3>
            <p className="companyDetail-des">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The standardchunk of Lorem Ipsum used
              since the 1500s is reproduced below for those interested. The
              first line of Lorem Ipsum, "Lorem ipsum dolor sit amet.
            </p>
            <h3 className="companyDetail-headings">{user.name} Jobs</h3>
            <div className="companyDetail-jobs"> {myjob} </div>
          </div>
        </div>
      );
    }

    return <div></div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;
  return {
    fbusers: state.firestore.ordered.users || state.cam.fbusers,
    jobs: state.firestore.ordered.jobs || state.job.jobs,
    auth: state.auth.auth,
    user: user,
    id: id,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [{ collection: "users" }, { collection: "jobs" }])
)(CompanyDetail);

