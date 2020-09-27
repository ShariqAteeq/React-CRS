import React , {Component} from "react";
import { Route, Switch } from "react-router-dom";
import CompanyDashboard from "../../components/company/companyDashboard";
import StudentDetail from "../../components/student/studentDetial";
import { connect } from "react-redux";

class CompanyRouter extends Component {
  render(){
    
//     if(this.props.auth === true && this.props.authRole === "company") {
//       return (
//         <Switch>
//         <Route exact path="/cboard" component={CompanyDashboard} />
//         <Route path="/std/:id" component={StudentDetail} />
//       </Switch>
//       );
//    } 
  
  return (
    <Switch>
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

export default connect(mapStateToProps)(CompanyRouter);
