import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../actions/authActions";

import { Link } from "react-router-dom";

const SignInLinks = () => {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  let links;
  if (role == "company") {
    links = (
      <div>
        <Link to="/cjob" className="nav-link">
          CreateJob
        </Link>
        <Link to="/cprofile" className="nav-link">
          Dashboard
        </Link>
        <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
      </div>
    );
  } else if (role == "student") {
    links = (
      <div>
        <Link to="/sboard" className="nav-link">
          Companies
        </Link>
        <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
        <Link to="/sprofile" className="nav-link">
          Dashboard
        </Link>
      </div>
    );
  } else if(role== "admin") {
    links = (
        <div>
          <Link to="/cboard" className="nav-link">
            StudentLists
          </Link>
          <Link to="/sboard" className="nav-link">
            CompanyList
          </Link>
          <Link to="/jobs" className="nav-link">
            Jobs
          </Link>
          <Link to="/aboard" className="nav-link">
            Dashboard
          </Link>
        </div>
      );
  }

  return (
    <div className = "logout-links">
      <li onClick={() => dispatch(signOut())} className="nav-link">
        Logout
      </li>
      {links}
    </div>
  );
};

export default SignInLinks;
