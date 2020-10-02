import React, {Component} from "react";
import ComapnySummary from "./comapnySummary";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import logo from '../../img/apple.png';

class CompanyList extends Component {
  render() {
    const { fbusers } = this.props;

    let myUsers = fbusers.map((user) => {
      if (user.role === "company") {
        return (
          <ComapnySummary
          logo={logo}
          title={user.name}
          location={user.city}
          id={user.id}
          key={user.id}
        />
        );
      }
    });
  
    return (
      <div>
        <h1 className="company-list-main">List of Companies</h1>
        {myUsers}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.cam.users,
    fbusers: state.firestore.ordered.users || state.cam.fbusers,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [{ collection: "users" }])
)(CompanyList);
