import React , {Component} from "react";
import { Switch, Route } from "react-router-dom";
import StudentDashboard from "../../components/student/studentDashboard";
import CompanyDetail from "../../components/company/companyDetail";
import { connect } from "react-redux";

class StudentRouter extends Component {
  render() {
    // if (this.props.auth === true && this.props.authRole === "student") {
    //   return (
    //     <Switch>
    //       <Route path="/sboard" component={StudentDashboard} />
    //       {/* //<Route path="/company/:id" component={CompanyDetail} /> */}
    //     </Switch>
    //   );
    // }
    console.log('in student router')
    return (
      //<div></div>
      <Switch>
      <Route path="/sboard" component={StudentDashboard} />
      {/* <Route path="/company/:id" component={CompanyDetail} /> */}
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

export default connect(mapStateToProps)(StudentRouter);
