import React from "react";
import { Switch, Route } from "react-router-dom";

function Student() {
  return (
    <div>
      <Switch>
        <Route path="/sboard" component={} />
        <Route path="/company/:id" component={} />
      </Switch>
    </div>
  );
}

export default Student;
