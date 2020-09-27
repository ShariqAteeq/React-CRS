import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import AdminDashboard from "../../components/admin/adminDashboard";
import CompanyDashboard from "../../components/company/companyDashboard";
import StudentDashboard from "../../components/student/studentDashboard";
import StudentDetail from "../../components/student/studentDetial";
import CompanyDetail from "../../components/company/companyDetail";
import {connect} from 'react-redux';

class AdminRouter extends Component {
  render() {
    // let { auth, authRole } = this.props;
    // if (auth === true && authRole === "admin") {
    //   return <Route exact path="/aboard" component={AdminDashboard} />;
    // } else if ((auth === true && authRole === "admin") || authRole === "student") {
    //   return (
    //     <Switch>
    //       <Route exact path="/sboard" component={StudentDashboard} />
    //       <Route path="/company/:id" component={CompanyDetail} />
    //     </Switch>
    //   );
    // } else if ((auth === true && authRole === "admin") || authRole === "company") {
    //   return (
    //     <Switch>
    //       <Route exact path="/cboard" component={CompanyDashboard} />
    //       <Route path="/std/:id" component={StudentDetail} />
    //     </Switch>
    //   );
    // }

    return (
        <Switch>
            <Route exact path="/aboard" component={AdminDashboard} />
        <Route exact path="/sboard" component={StudentDashboard} />
          <Route path="/company/:id" component={CompanyDetail} />
             <Route exact path="/sboard" component={StudentDashboard} />
          <Route path="/company/:id" component={CompanyDetail} />
        <Route exact path="/cboard" component={CompanyDashboard} />
        <Route path="/std/:id" component={StudentDetail} />
      </Switch>
        );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    role: state.auth.role,
  };
};
export default connect(mapStateToProps)(AdminRouter);
