import React from "react";
import StudentRouter from "react";
import CompanyRouter from "react";
import AdminRouter from "react";

function ModuleRoutes(role) {
  switch (role) {
    case "STUDENT":
      <StudentRouter />;
      break;
    case "COMPANY":
      <CompanyRouter />;
      break;
    case "ADMIN":
      <AdminRouter />;
      break;
  }
}

export default ModuleRoutes;
