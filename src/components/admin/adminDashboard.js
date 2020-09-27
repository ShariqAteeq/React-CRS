import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import av from '../../img/av1.jpg';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link , Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Navbar from '../layout/navbar';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(13),
        height: theme.spacing(13),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
}));


function AdminDashboard() {

    const classes = useStyles();

    const users = useSelector(state => state.cam.users);
    const companies = useSelector(state => state.cam.companies);
    let auth = useSelector(state => state.auth.auth);

    // if(auth === false) return <Redirect to = '/' />
    const navbar = auth ? <Navbar />: null;

    return (
        <div>
            {navbar}
            <div className="admin">
            <h2 className="admin-title">Admin Dashboard</h2>
            <div className="admin-bg">
                <div className="studentDet-sidebar">
                    <Avatar alt="Remy Sharp" src={av} className={classes.large} />
                    <h4 className="studentDet-name">James Bond</h4>
                    <p className="studentDet-tag">Administrator</p>
                    <div className="studentDet-contact">
                        <h4 className="studentDet-contactDet">Contact Information</h4>
                        <div className="studentDet-list">
                            <EmailIcon />
                            <p>james@gmail.com</p>
                        </div>
                        <div className="studentDet-list">
                            <PhoneIcon />
                            <p>+123 234 222</p>
                        </div>
                        <div className="studentDet-list">
                            <HomeIcon />
                            <p>Street-123 Pakistan</p>
                        </div>
                        <div className="studentDet-list">
                            <GitHubIcon />
                            <p>github.com/james</p>
                        </div>
                        <div className="studentDet-list">
                            <LinkedInIcon />
                            <p>linkedin.com/james</p>
                        </div>

                    </div>
                </div>
                <div className="admin-right">
                    <h3 className="studentDet-h3">List of Students</h3>
                    <div className="studentDet-table">
                        <table >
                            <tr className="studentDet-table-head">
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone Number</th>
                                <th>Qualification</th>
                                <th>Operation</th>
                            </tr>
                            { users.map(user => {
                                return (
                                    <tr>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>+{user.phone}</td>
                                        <td>{user.quali[0].degree}</td>
                                        <td><Link to='/' className="table-btn">Remove</Link></td>
                                    </tr>
                                );
                            }) }
                        </table>
                        
                        <h3 className="studentDet-h3 mt-small">List of Companies</h3>
                        <table >
                            <tr className="studentDet-table-head">
                                <th>Name</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th>Operation</th>
                            </tr>

                            { companies.map(company => {
                                return (
                                    <tr>
                                        <td>{company.name}</td>
                                        <td>{company.email}</td>
                                        <td>{company.location}</td>
                                        <td><Link to='/' className="table-btn">Remove</Link></td>
                                    </tr>
                                );
                            }) }
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
        

    )
}

export default AdminDashboard;
