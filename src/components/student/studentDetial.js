import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import av from "../../img/av1.jpg";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import web1 from "../../img/web1.jpg";
import web2 from "../../img/web2.jpg";
import web3 from "../../img/web3.jpg";
import { Progress, Image } from "antd";
import Navbar from "../layout/navbar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class StudentDetail extends Component {
  render() {
    //     let myUser;
    //     let id = this.props.match.params.id;
    const navbar = this.props.auth ? <Navbar /> : null;
    const {users , user} = this.props;
    // this.props.fbusers.map(user => {
    //     if(user.id == id) {
    //         myUser = user
    //         console.log(myUser.name);
    //     }
    // })
    //  myUser = this.props.fbusers.find(user => user.id == id);
    //console.log(myUser.name)
    if(user) {
        return (
            <div className="stds">
              {navbar}
              <div className="studentDet">
                <div className="studentDet-sidebar">
                  <Avatar alt="Remy Sharp" src={av} className="studentList-avatar" />
                  <h4 className="studentDet-name">{user.name}</h4>
                  <p className="studentDet-tag">{user.dev}</p>
                  <div className="studentDet-contact">
                    <h4 className="studentDet-contactDet">Contact Information</h4>
                    <div className="studentDet-list">
                      <EmailIcon />
                      <p>{user.email}</p>
                    </div>
                     <div className="studentDet-list">
                      <PhoneIcon />
                      <p>+1222-222-11</p>
                    </div>
                    <div className="studentDet-list">
                      <HomeIcon />
                      <p>{user.city}</p>
                    </div>
                    <div className="studentDet-list">
                      <GitHubIcon />
                      <p>github.com/{user.name}</p>
                    </div>
                    <div className="studentDet-list">
                      <LinkedInIcon />
                      <p>linkedin.com/{user.name}</p>
                    </div> 
                  </div>
                </div>
                <div className="studentDet-des">
                  <h3 className="studentDet-h3">Objective</h3>
                  <p className="studentDet-obj">
                    loren It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at its
                    layout.
                  </p>
                  <h3 className="studentDet-h3">Academic Qualification</h3> 
                   <div>
                     <table className="studentDet-table">
                         <tr className="studentDet-table-head">
                             <th>Institute</th>
                             <th>Department</th>
                             <th>Degree</th>
                             <th>Grade</th>
                         </tr>
                         {users[0].quali.map(user => {
                             return (
                                 <tr>
                                     <td>{user.institue}</td>
                                     <td>{user.dept}</td>
                                     <td>{user.degree}</td>
                                     <td>{user.grade}</td>
                                 </tr>
                             );
                         })}
                     </table>
                 </div>
                 <div className="studentDet-skills">
                     <h3 className="studentDet-h3 mt-small">Skills</h3>
                     {users[0].skillS.map(user => {
                         return (
                             <div className="studentDet-skill">
                                 <p>{user.name}</p>
                                 <Progress percent={user.per} status="active" strokeColor=" #236CA4" />
                             </div>
                         );
                     })}
                 </div> 
                <div className="studentDet-portfolio">
                    <h3 className="studentDet-h3">Portfolio</h3>
                    <div className="studentDet-imgs">
                      <Image width={200} src={web1} />
                      <Image width={200} src={web2} />
                      <Image width={200} src={web3} />
                    </div>
                  </div>
                  <button className="login-btn mt-medium">Recruit Now</button>
                </div>
              </div> 
            </div>
          );
  
    }
   return <div></div>;
    
  }
}



const mapStateToProps = (state, ownProps) => {
  console.log(state);
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;
  return {
    users: state.cam.users,
    fbusers: state.firestore.ordered.users || state.cam.fbusers,
    auth: state.auth.auth,
    user: user,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [{ collection: "users" }])
)(StudentDetail);
