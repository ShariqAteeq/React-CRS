const initialState = {
  jobs: [],
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_JOB":
      console.log(action.job);
      return state;
    case "CREATE_JOB_ERR":
      console.log(action.err);
      return state;
    case "DEL_JOB":
      console.log('deleted')
      return state;
      case "DEL_ERR":
        console.log(action.err);
        return state;
      case "UPDATE_JOB":
        console.log('updated')
        return state;
        case "UPDATE_JOB_ERR":
          console.log(action.err);
          return state;
    default:
      return state;
  }
};

export default jobReducer;
