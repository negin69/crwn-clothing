import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyDb8w1Z0oZsEyNdDDc402UGR-Hobcs_Npg",
    authDomain: "crwn-db-c37f9.firebaseapp.com",
    databaseURL: "https://crwn-db-c37f9.firebaseio.com",
    projectId: "crwn-db-c37f9",
    storageBucket: "crwn-db-c37f9.appspot.com",
    messagingSenderId: "1012971388354",
    appId: "1:1012971388354:web:d8ccf74db809a8c03cea5b"
};

export const createUserProfileDocument = async (userAuth , additionalData) => {

    if (!userAuth)  return ;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
const  snapShot = await userRef.get();

if(!snapShot.exists){

    const {displayName , email}= userAuth;
   const createdAt= new Date(); 

   try{
    await userRef.set({ 
        displayName ,
         email , 
          createdAt ,
         ...additionalData
        })
} catch (error){
console.log( 'error creating user' ,  error.message);
}
}
return userRef;
};


firebase.initializeApp(config);
export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle=() =>auth.signInWithPopup(provider);
export default firebase;