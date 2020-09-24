import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import av from '../../img/av1.jpg';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import {compose} from 'redux';

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        marginLeft: 'auto',
        marginRight: 'auto'
    },
}));

//const classes = useStyles(); className={classes.large}

class StudentList extends Component {

    state = {
        mys: []
    }
    render() {

        const {users , fbusers} = this.props;
        console.log(fbusers);
        //  let myuser = fbusers;


        //  fbusers.map(fb => {
        //     if(fb.role === "company"){
        //                         console.log(fb);
        //                      }
        // });

        let myUsers = users.map(user => {
            return (
                <div className="studentList-box" key = {user.id}>
                    <Avatar alt="Remy Sharp" src={av}  className = "studentList-avatar"/>
                    <h3 className="studentList-name">{user.name}</h3>
                    <p className="studentList-tag">{user.tag}</p>
                    <p className="studentList-tag">{user.city}</p>
                    <p className="studentList-tag">{user.quali[0].degree}</p>
                    <Link to={`/std/${user.id}`} className="studentList-link">Check Resume</Link>
                </div>
            );
        })

        return (
            <div className="studentList">
                {myUsers}
            </div>
        )
    }
}

const mapStateToProps = state => {
 console.log(state);
    return {
        users: state.cam.users,
        fbusers: state.firestore.ordered.users || state.cam.fbusers,
    
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect(() => [{collection: 'users'}]),
)(StudentList);
