import React from "react";
import StudentRouter from "./Modules/Student";
import CompanyRouter from "./Modules/Company";
import AdminRouter from "./Modules/Admin";

import {useSelector} from 'react-redux';

const ModuleRoutes = ({role}) => {

  const auth = useSelector(state=> state.auth.authRole);
  console.log(auth);

  switch (role) {
    case "student":
      return <StudentRouter />
     // break;
    case "company":
     return <CompanyRouter />
     // break;
    case "admin":
      return <AdminRouter />
    default:
      return null;
  }
}

export default ModuleRoutes;
