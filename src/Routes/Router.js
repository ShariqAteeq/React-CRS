import React, { Component } from "react";
import { connect } from "react-redux";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import { Redirect } from "react-router-dom";
import ModuleRoutes from "./ModuleRoutes";

class Router extends Component {
 
  render() {
if(this.props.auth == true) {
  return (
      <ProtectedRoutes />
  )
} else {
  return(
    <div>
    <Redirect to ='/' />
    <PublicRoutes />
    </div>
    
  ) 
}
  return <div></div>;
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    role: state.auth.authRole,
  };
};

export default connect(mapStateToProps)(Router);

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