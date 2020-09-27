
export const SignIn = (cred) => {
  
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    
    firebase
      .auth()
      .signInWithEmailAndPassword(cred.email, cred.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS"});
        const role = getState().firebase.profile.role;
        dispatch({ type: "CHECK_ROLE" , role : role});
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERR", err });
      });
  };
};

export const checkAuth = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
      firebase.auth().onAuthStateChanged()
      .then(() => {
        dispatch({ type : 'checkAuth' })
      })
  }
}

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      });
  };
};

export const signUpStudent = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        return firestore.collection("users").doc(res.user.uid).set({
          name: newUser.name,
          phone: newUser.phone,
          address: newUser.address,
          city: newUser.city,
          role: "student",
        });
      })
      .then(() => {
        dispatch({ type: "STD_SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "STD_SIGNUP_ERR", err });
      });
  };
};

export const signUpCompany = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        return firestore.collection("users").doc(res.user.uid).set({
          name: newUser.name,
          jt: newUser.jt,
          noOfvac: newUser.noOfvac,
          role: "company",
        });
      })
      .then(() => {
        dispatch({ type: "COM_SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "COM_SIGNUP_ERR", err });
      });
  };
};

export const isLoggedIn = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      if(user) {
      //  localStorage.setItem('user', JSON.stringify(user))
        dispatch({ type : 'LOGGED_IN' })
      }
    })
  }
}



  // let uid = user.uid;
        // firebase.console.log(e);
        // if ("user") {
        //   dispatch({ type: "USER_LOGIN_SUCCESS" });
        // } else if ("company") {
        //   dispatch({ type: "TEACHER_LOGIN_SUCCESS" });
        // } else if ("admin") {
        //   dispatch({ type: "ADMIN_LOGIN_SUCCESS" });
        // }