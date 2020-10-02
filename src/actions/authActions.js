export const SignIn = (cred) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(cred.email, cred.password)
      .then((user) => {
        const role = getState().firebase.profile.role;
        if (role === "student") {
          localStorage.setItem("role", "student");
          dispatch({ type: "STUDENT_LOGIN_SUCCESS" });
        } else if (role === "company") {
          // localStorage.removeItem('role');
          localStorage.setItem("role", "company");
          dispatch({ type: "COMPANY_LOGIN_SUCCESS" });
        } else if (role === "admin") {
          localStorage.setItem("role", "admin");
          dispatch({ type: "ADMIN_LOGIN_SUCCESS" });
        } else {
          console.log("UnAuthorized Invalid Login");
        }
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    localStorage.removeItem("role");
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        //localStorage.removeItem('role');
        // localStorage.clear();
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
          email: newUser.email,
          dev: newUser.dev,
          quali: newUser.quali,
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
          email: newUser.email,
          city: newUser.city,
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

export const deleteUser = (id) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("users")
      .doc(id)
      .delete()
      .then(function () {
        dispatch({ type: "DEL_USER" });
      })
      .catch(function (err) {
        dispatch({ type: "DEL_USER_ERR", err });
      });
  };
};

export const isLoggedIn = (role) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    // const role = getState().firebase.profile;
    console.log("logged in action", role);
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        dispatch({ type: "LOGGED_IN", role });
      }
      //   user ?
      //   localStorage.setItem('user', JSON.stringify(user))
      // : localStorage.removeItem('user')
      //   dispatch({ type : 'LOGGED_IN'  })
    });
  };
};

// let uid = user.uid;
// firebase.console.log(e);
// if ("user") {
//   dispatch({ type: "USER_LOGIN_SUCCESS" });
// } else if ("company") {
//   dispatch({ type: "TEACHER_LOGIN_SUCCESS" });
// } else if ("admin") {
//   dispatch({ type: "ADMIN_LOGIN_SUCCESS" });
// }
