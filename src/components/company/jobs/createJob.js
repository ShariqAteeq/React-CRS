import React, {Component} from 'react';
import { createJob , deleteJob , UpdateJob} from '../../../actions/jobActions';
import {connect} from 'react-redux';
import {compose} from 'redux';
import { firestoreConnect } from 'react-redux-firebase';

class CreateJob extends Component {


    state = {
        jobname : '',
        noofvac : ''
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.createJob(this.state);
        console.log(this.props.jobs);
    }

     handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    delete = (e) =>{
        e.preventDefault();
        this.props.deleteJob(this.props.jobs[0].id);
    }

    edit = (e) => {
        this.state.jobname = this.props.jobs[0].jobname;
        this.state.noofvac = this.props.jobs[0].noofvac;
    }

    update = (e) => {
        this.props.UpdateJob(this.props.jobs[0].id , this.state);
    }

    render() {

        return (
            <div>
                <input type = "text" id = "jobname" placeholder = "job name" value = {this.state.jobname} onChange = {this.handleChange}/>
                <input type = "text" id = "noofvac" placeholder = "no of vac" value = {this.state.noofvac} onChange = {this.handleChange}/>
                <button onClick = {this.onSubmit}>Create Job</button>
                <button onClick = {this.delete}>Delete</button>
                <button onClick = {this.edit}>Edit</button>
                <button onClick = {this.update}>Update</button>
                <br />
                <br />
                <br />
                { this.props.jobs.map(job => {
                return(
                    <div>
                        <p>{job.id}</p>
                    <p>title: {job.jobname} vac : {job.noofvac}</p>
                </div>
            )})}
            </div>
        )
    }
   
}

const mapStateToProps = state => {
    return {
        jobs : state.firestore.ordered.jobs || state.job.jobs
    }
}

const mapDisptachToProps = dispatch => {
    return {
        createJob : (job) => dispatch(createJob(job)),
        deleteJob : (id) => dispatch(deleteJob(id)),
        UpdateJob : (id , newData) => dispatch(id , newData)
    }
}

export default compose(
    connect(mapStateToProps , mapDisptachToProps),
    firestoreConnect(() => [{collection: 'jobs'}]),
    )(CreateJob);
