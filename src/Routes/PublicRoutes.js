import React from "react";
import { Route, Switch , Redirect } from "react-router-dom";
import StudentLogin from "../components/student/auth/studentLogin";
import StudentSignUp from "../components/student/auth/StudentSignup";
import CompanySignUp from "../components/company/auth/CompanySignUp";
import Front from "../components/layout/front";
import { BrowserRouter } from 'react-router-dom';

function PublicRoutes() {
  return (
    <div>
        <div>
        <Route path="/c-signup" component={CompanySignUp} />
        <Route path="/slogin" component={StudentLogin} />
        <Route path="/s-signup" component={StudentSignUp} />
        <Route exact path="/" component={Front} />
        </div>
      
    </div>
  );
}

export default PublicRoutes;
