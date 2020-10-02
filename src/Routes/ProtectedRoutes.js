import React, { useEffect } from "react";
import ModuleRoutes from "./ModuleRoutes";
import { Route, Switch, Redirect } from "react-router-dom";
import AdminDashboard from "../components/admin/adminDashboard";
import CompanyDashboard from "../components/company/companyDashboard";
import StudentDashboard from "../components/student/studentDashboard";
import StudentDetail from "../components/student/studentDetial";
import CompanyDetail from "../components/company/companyDetail";
import CompanyProfile from "../components/company/companyProfile";
import EditJob from "../components/company/jobs/editJob";
import CreateJob from "../components/company/jobs/createJob";
import JobList from '../components/company/jobs/jobList';
import { useSelector } from "react-redux";
import StudentProfile from '../components/student/StudentProfile';

const ProtectedRoutes = () => {
  const role = useSelector((state) => state.auth.role);

  console.log("In Protected");
  if (role == "student") {
    return (
      <div>
        <Route exact path="/sboard" component={StudentDashboard} />
        <Route path="/company/:id" component={CompanyDetail} />
        <Route path="/jobs" component={JobList} />
        <Route path = '/sprofile' component = {StudentProfile} />
      </div>
    );
  } else if (role == "company") {
    return (
      <div>
        <Route path="/editJob/:id" component={EditJob} />
        <Route path="/jobs" component={JobList} />
        <Route path="/cjob" component={CreateJob} />
        <Route path="/cprofile" component={CompanyProfile} />
        <Route exact path="/cboard" component={CompanyDashboard} />
        <Route path="/std/:id" component={StudentDetail} />
      </div>
    );
  } else if (role == "admin") {
    return (
      <div>
        <Route path="/aboard" component={AdminDashboard} />
        <Route exact path="/sboard" component={StudentDashboard} />
        <Route path="/company/:id" component={CompanyDetail} />
        <Route path="/editJob/:id" component={EditJob} />
        <Route path="/cjob" component={CreateJob} />
        <Route path="/cprofile" component={CompanyProfile} />
        <Route exact path="/cboard" component={CompanyDashboard} />
        <Route path="/std/:id" component={StudentDetail} />
        <Route path="/jobs" component={JobList} />
      </div>
    );
  }
  return <div></div>;
};

export default ProtectedRoutes;
