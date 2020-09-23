// import react from 'react';
import {useSelector} from 'react-redux';
// import { connect } from 'react-redux';

const initialState = {
    authError: 'hello',
    auth: false,
    authRole: ''
    
}

const authReducer = (state = initialState, action ) => {

    switch (action.type) {
        case 'LOGIN_SUCCESS':
           // const authProfile = useSelector(state => state.firebase.profile);
            console.log('login Success');
          // console.log(authProfile);
            return {
                ...state,
                authError: null,
                auth: true,
                role: 'student'
            }
        case 'CHECK_ROLE':
            return {
                ...state,
                authRole: 'student'
            };
        case 'LOGIN_ERR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login Failed',
                auth: false
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout success')
            return {
                ...state,
                auth:false
            };
        case 'STD_SIGNUP_SUCCESS':
            console.log('signup success std');
            return {
                ...state,
                authError: null,
                auth: false,
                
            }
        case 'STD_SIGNUP_ERR':
            console.log('signup-failed std');
            return {
                ...state,
                authError: action.err.message
            }
        case 'COM_SIGNUP_SUCCESS':
            console.log('signup success com');
            return {
                ...state,
                authError: null
            }
        case 'COM_SIGNUP_ERR':
            console.log('signup-failed com');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }

}

const mapStateToProps = state => {
    return {
        authPro: state.cam.users
    }
}
export default authReducer;