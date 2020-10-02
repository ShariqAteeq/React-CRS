import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import av from "../../img/av1.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class StudentList extends Component {
  state = {
    mys: [],
  };
  render() {
    const { fbusers } = this.props;

    let myUsers = fbusers.map((user) => {
      if (user.role === "student") {
        return (
          <div className="studentList-box" key={user.id}>
            <Avatar alt="Remy Sharp" src={av} className="studentList-avatar" />
            <h3 className="studentList-name">{user.name}</h3>
            <p className="studentList-tag">{user.dev}</p>
            <p className="studentList-tag">{user.city}</p>
            <p className="studentList-tag">{user.quali}</p>
            <Link to={`/std/${user.id}`} className="studentList-link">
              Check Resume
            </Link>
          </div>
        );
      }
    });

    return <div className="studentList">{myUsers}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    users: state.cam.users,
    fbusers: state.firestore.ordered.users || state.cam.fbusers,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [{ collection: "users" }])
)(StudentList);
