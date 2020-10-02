import React, { Component } from "react";
import { connect } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import { isLoggedIn } from "../actions/authActions";
import { Redirect } from "react-router-dom";
import ModuleRoutes from "./ModuleRoutes";
//import firebase from 'firebase/auth';
import firebase from "firebase/app";

class Router extends Component {
  componentDidMount() {
    // firebase.auth().onAuthStateChanged(user => {
    //   console.log(user);
    //   if(user) {
    //     console.log('logged in')
    //     return (
    //       <ProtectedRoutes />
    //     )
    //   }
    // })
    // let role;
    // if(this.props.role == 'student') {
    //   role = 'student'
    // }
     this.props.isLogged(this.props.role);
    console.log("router rolew", this.props.role);
  }

  render() {
    if (this.props.auth == true) {
      return <ProtectedRoutes />;
    } else if (this.props.auth == false || this.props.role == "") {
      return (
        <div>
          <PublicRoutes />
          {/* <Redirect to="/" /> */}
        </div>
      );
    }
    return <div></div>;
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    role: state.auth.role,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    isLogged: (role) => dispatch(isLoggedIn(role)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Router);

//  if (this.props.auth === true) {
//       return (
//         <div>
//           <ModuleRoutes role="student" />
//         </div>
//       );
//     } else if (this.props.auth === false) {
//       return ( <div>
//         <PublicRoutes />
//         <Redirect to = '/' />
//         </div>)

//     }
//     return <div></div>;
//   }
// }
