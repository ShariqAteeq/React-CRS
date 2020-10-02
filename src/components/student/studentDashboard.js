import React, { Component } from "react";
import CompanyList from "../company/companyList";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Navbar from "../layout/navbar";

class StudentDashboard extends Component {
  // componentWillMount() {
  //     if(this.props.auth == false) return <Redirect to = '/slogin' />;
  // }

  render() {
    //    if(this.props.auth == false) return <Redirect to = '/' />;

    return (
      <div>
        {this.props.auth ? <Navbar /> : null}
        <CompanyList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    role: state.auth.authRole,
  };
};

export default connect(mapStateToProps)(StudentDashboard);
