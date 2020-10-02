export const createJob = (job) => {
  return (dispatch, getState , {getFirebase , getFirestore}) => {

    const firestore = getFirestore();
    const role = getState().firebase.auth.uid;
    const name = getState().firebase.profile.name;
    firestore.collection('jobs').add({
      ...job,
      cname: name,
      createAt: new Date(),
      authId: role
    }).then(() => {
       dispatch({ type: "CREATE_JOB", job });
    }).catch((err) => {
      dispatch({ type: "CREATE_JOB_ERR", err });
    })
  }
};

export const deleteJob = (id) => {
  return (dispatch, getState , {getFirebase , getFirestore}) => {

    const firestore = getFirestore();
    firestore.collection("jobs").doc(id).delete().then(function() {
      dispatch({ type: "DEL_JOB" });
    }).catch(function(err) {
      dispatch({ type: "DEL_ERR", err });
  });
}
};

export const UpdateJob = (id , newData) => {
  return (dispatch, getState , {getFirebase , getFirestore}) => {

    const firestore = getFirestore();
    firestore.collection('jobs').doc(id).update({
      ...newData
      
    }).then(() => {
       dispatch({ type: "UPDATE_JOB" });
    }).catch((err) => {
      dispatch({ type: "UPDATE_JOB_ERR", err });
    })
  }
};

export const appliedJobs = (job) => {
  return (dispatch, getState , {getFirebase , getFirestore}) => {

    const firestore = getFirestore();
    const uid = getState().firebase.auth.uid;
    firestore.collection('appJobs').add({
      userId: uid,
      ...job
    }).then(() => {
       dispatch({ type: "APP_JOB" });
    }).catch((err) => {
      dispatch({ type: "APP_JOB_ERR", err });
    })
  }
};