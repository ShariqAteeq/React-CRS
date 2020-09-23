import React, { Component } from "react";

export class Router extends Component {
  componentDidMount() {
    //check for already loged in user
  }
  render() {
    if (loading) {
      // show loader
    }
    else if(authSuccessful){
        return <ModuleRouter />
    }
    else if(authFailed){
        return <Redirect to="/login"/>

    }
    return <div></div>;
  }
}

export default Router;
