export const userLogin = (credentials) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
      // make async call to database
      const firebase = getFirebase()
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then((data) => {
        const firestore = getFirestore()
        console.log('qwer', firestore.collections('users'))
        dispatch({ type: 'LOGIN_SUCCESS', data });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
      
    }
  };

  export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }