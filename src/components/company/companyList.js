import React from "react";
import ComapnySummary from "./comapnySummary";
import { useSelector } from "react-redux";

function CompanyList() {
  let comp = useSelector((state) => state.cam.companies);
  let auth = useSelector((state) => state.auth.auth);

  let companies = comp.map((c) => {
    return (
      <ComapnySummary
        logo={c.logo}
        title={c.name}
        jobTitle={c.jt}
        vacancies={c.vac}
        id={c.id}
        key={c.id}
      />
    );
  });

  return (
    <div>
      <h1 className="company-list-main">List of Companies</h1>
      {companies}
    </div>
  );
}

export default CompanyList;
