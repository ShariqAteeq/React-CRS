import React from "react";
import ModuleRoutes from './ModuleRoutes';
import { Route , Switch } from 'react-router-dom';
import AdminDashboard from "../components/admin/adminDashboard";
import CompanyDashboard from "../components/company/companyDashboard";
import StudentDashboard from "../components/student/studentDashboard";
import StudentDetail from "../components/student/studentDetial";
import CompanyDetail from "../components/company/companyDetail";
import { useSelector } from 'react-redux';

const ProtectedRoutes = () => {
  console.log('In Protected')
  const role = useSelector(state => state.auth.authRole);
  console.log('role' ,role);
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
  )
}

export default ProtectedRoutes;
