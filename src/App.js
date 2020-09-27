import React, {Component} from 'react';
import './App.scss';
import Front from './components/layout/front';
import Navbar from './components/layout/navbar';
import { BrowserRouter , Route , Switch} from 'react-router-dom';
import StudentDashboard from './components/student/studentDashboard';
import CompanyDetail from './components/company/companyDetail';
import CompanyProfile from './components/company/companyProfile';
import CompanyDashboard from './components/company/companyDashboard';
import StudentDetail from './components/student/studentDetial';
import StudentLogin from './components/student/auth/studentLogin';
import StudentSignUp from './components/student/auth/StudentSignup';
import CompanyLogin from './components/company/auth/compnayLogin';
import CompanySignUp from './components/company/auth/CompanySignUp';
import AdminLogin from './components/admin/auth/adminLogin';
import AdminDashboard from './components/admin/adminDashboard';
import { connect } from 'react-redux';
import CreateJob from './components/company/jobs/createJob';
import EditJob from './components/company/jobs/editJob';
import firebase from 'firebase';
import { isLoggedIn } from './actions/authActions';
import Router from './Routes/Router';
class App extends Component {

  // const auth = useSelector(state => state.auth.auth);

  // const fb = useSelector(state => state.firebase);
  

  //  const

  // componentDidMount() {
  //   this.props.isLoggedIn();
  //   console.log(this.props.auth);
  // }

  render(){
    return (
      <BrowserRouter>
        {/* <Router /> */}
      <div className="App">
      
    <Switch>
      <Route path = '/editJob/:id' component = {EditJob} />
          <Route path = '/cjob' component = {CreateJob} />
        <Route path = '/slogin' component = {StudentLogin} />
        <Route path = '/s-signup' component = {StudentSignUp} />
        <Route path = '/c-signup' component = {CompanySignUp} />
        
         <Route path = '/clogin' component = {CompanyLogin} /> 
         <Route path = '/alogin' component = {AdminLogin} /> 
      </Switch>
    
        
        <Switch>
          <Route exact path = '/' component = {Front} />
          <Route exact path = '/aboard' component = {AdminDashboard} />
          <Route exact path = '/sboard' component = {StudentDashboard} />
          <Route exact path = '/cboard' component = {CompanyDashboard} />
          <Route path = '/company/:id' component = {CompanyDetail} />
          <Route path = '/std/:id' component = {StudentDetail} />
          <Route path = '/cprofile' component = {CompanyProfile} />
        </Switch>
      </div>
      </BrowserRouter>
      
    );
  }
  
}

const mapStateToProps = state => {
  return{
      auth : state.auth.auth
  }
}

const mapDispatchToProps = dispatch => {
  return{
      isLoggedIn: () => dispatch(isLoggedIn())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
