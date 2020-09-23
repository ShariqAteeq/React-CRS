import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import av from '../../img/av1.jpg';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import web1 from '../../img/web1.jpg';
import web2 from '../../img/web2.jpg';
import web3 from '../../img/web3.jpg';
import { Progress, Image } from 'antd';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Navbar from '../layout/navbar';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(13),
        height: theme.spacing(13),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
}));

function StudentDetail() {

    const classes = useStyles();
    let { id } = useParams();
    let users = useSelector(state => state.cam.users);
    let auth = useSelector(state => state.auth.auth);

    const navbar = auth ? <Navbar /> : null;

    let myUser = users.find(user => user.id == id);

    if(auth == false) return <Redirect to = '/' />;

    return (
        <div className = "stds">
            {navbar}
              <div className="studentDet">
            <div className="studentDet-sidebar">
                <Avatar alt="Remy Sharp" src={av} className={classes.large} />
                <h4 className="studentDet-name">{myUser.name}</h4>
                <p className="studentDet-tag">Back-End Developer</p>
                <div className="studentDet-contact">
                    <h4 className="studentDet-contactDet">Contact Information</h4>
                    <div className="studentDet-list">
                        <EmailIcon />
                        <p>{myUser.email}</p>
                    </div>
                    <div className="studentDet-list">
                        <PhoneIcon />
                        <p>+{myUser.phone}</p>
                    </div>
                    <div className="studentDet-list">
                        <HomeIcon />
                        <p>{myUser.address}</p>
                    </div>
                    <div className="studentDet-list">
                        <GitHubIcon />
                        <p>github.com/{myUser.name}</p>
                    </div>
                    <div className="studentDet-list">
                        <LinkedInIcon />
                        <p>linkedin.com/{myUser.name}</p>
                    </div>

                </div>
            </div>
            <div className="studentDet-des">
                <h3 className="studentDet-h3">Objective</h3>
                <p className="studentDet-obj">loren It is a long established fact that a reader will be distracted
                     by the readable content of a page when looking at its layout.</p>
                <h3 className="studentDet-h3">Academic Qualification</h3>
                <div >
                    <table className="studentDet-table">
                        <tr className="studentDet-table-head">
                            <th>Institute</th>
                            <th>Department</th>
                            <th>Degree</th>
                            <th>Grade</th>
                        </tr>
                        {myUser.quali.map(user => {
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
                    {myUser.skillS.map(user => {
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
                        <Image
                            width={200}
                            src={web1}
                        />
                        <Image
                            width={200}
                            src={web2}
                        />
                        <Image
                            width={200}
                            src={web3}
                        />
                    </div>
                </div>
                <button className="login-btn mt-medium">Recruit Now</button>
            </div>
        </div>
        </div>
      
    )
}

export default StudentDetail;
