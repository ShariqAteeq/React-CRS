import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import av from "../../img/av1.jpg";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link, Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import Navbar from "../layout/navbar";
import { deleteUser } from "../../actions/authActions";

class AdminDashboard extends Component {
  render() {
    const navbar = this.props.auth ? <Navbar /> : null;
    let fbu = [];
    let fbc = [];
    this.props.fbusers.map((user) => {
      if (user.role == "student") {
        fbu.push(user);
      } else if (user.role == "company") {
        fbc.push(user);
      }
    });
    return (
      <div>
        {navbar}
        <div className="admin">
          <h2 className="admin-title">Admin Dashboard</h2>
          <div className="admin-bg">
            <div className="studentDet-sidebar">
              <Avatar
                alt="Remy Sharp"
                src={av}
                className="studentList-avatar"
              />
              <h4 className="studentDet-name">James Bond</h4>
              <p className="studentDet-tag">Administrator</p>
              <div className="studentDet-contact">
                <h4 className="studentDet-contactDet">Contact Information</h4>
                <div className="studentDet-list">
                  <EmailIcon />
                  <p>james@gmail.com</p>
                </div>
                <div className="studentDet-list">
                  <PhoneIcon />
                  <p>+123 234 222</p>
                </div>
                <div className="studentDet-list">
                  <HomeIcon />
                  <p>Street-123 Pakistan</p>
                </div>
                <div className="studentDet-list">
                  <GitHubIcon />
                  <p>github.com/james</p>
                </div>
                <div className="studentDet-list">
                  <LinkedInIcon />
                  <p>linkedin.com/james</p>
                </div>
              </div>
            </div>
            <div className="admin-right">
              <h3 className="studentDet-h3">List of Students</h3>
              <div className="studentDet-table">
                <table>
                  <tr className="studentDet-table-head">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Qualification</th>
                    <th>City</th>
                    <th>Operation</th>
                  </tr>
                  {fbu.map((user) => {
                    return (
                      <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.quali}</td>
                        <td>{user.city}</td>
                        <td>
                          <Link
                            className="table-btn"
                            onClick={() => this.props.deleteUser(user.id)}
                          >
                            Remove
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </table>

                <h3 className="studentDet-h3 mt-small">List of Companies</h3>
                <table>
                  <tr className="studentDet-table-head">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Operation</th>
                  </tr>

                  {fbc.map((company) => {
                    return (
                      <tr>
                        <td>{company.name}</td>
                        <td>{company.email}</td>
                        <td>{company.city}</td>
                        <td>
                          <Link
                            className="table-btn"
                            onClick={() => this.props.deleteUser(company.id)}
                          >
                            Remove
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    users: state.cam.users,
    companies: state.cam.companies,
    fbusers: state.firestore.ordered.users || state.cam.fbusers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => dispatch(deleteUser(id)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(() => [{ collection: "users" }])
)(AdminDashboard);
