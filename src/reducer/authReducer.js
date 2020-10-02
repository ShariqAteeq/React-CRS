const initialState = {
  authError: "hello",
  auth: false,
  role: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STUDENT_LOGIN_SUCCESS":
      console.log(" std login Success");
      localStorage.setItem("role", "student");

      console.log("user-role", localStorage.getItem("role"));
      return {
        ...state,
        authError: null,
        auth: true,
        role: "student",
      };
    case "COMPANY_LOGIN_SUCCESS":
      console.log("comp login Success");
      localStorage.setItem("role", "company");
      console.log("user-role", localStorage.getItem("role"));
      return {
        ...state,
        authError: null,
        auth: true,
        role: "company",
      };
    case "ADMIN_LOGIN_SUCCESS":
      console.log("admin login Success");
      localStorage.setItem("role", "admin");
      console.log("user-role", localStorage.getItem("role"));
      return {
        ...state,
        authError: null,
        auth: true,
        role: "admin",
      };
    case "LOGIN_ERR":
      console.log("login error");
      return {
        ...state,
        authError: "Login Failed",
        auth: false,
      };
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      localStorage.clear();
      return {
        ...state,
        auth: false,
        role: "",
      };
    case "STD_SIGNUP_SUCCESS":
      console.log("signup success std");
      return {
        ...state,
        authError: null,
        auth: false,
      };
    case "STD_SIGNUP_ERR":
      console.log("signup-failed std");
      return {  
        ...state,
        authError: action.err.message,
      };
    case "COM_SIGNUP_SUCCESS":
      console.log("signup success com");
      return {
        ...state,
        authError: null,
      };
    case "COM_SIGNUP_ERR":
      console.log("signup-failed com");
      return {
        ...state,
        authError: action.err.message,
      };
    case "LOGGED_IN":
      console.log(localStorage);
      return {
        ...state,
        auth: true,
        // role: action.role,
        //role: localStorage.getItem("role"),
        role: 'company'
      };
    case "DEL_USER":
      console.log("del user succ");
      return state;
    case "DEL_USER_ERR":
      console.log("del u err");
      return state;
    default:
      return state;
  }
};

export default authReducer;
