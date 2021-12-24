import React, { useState, useEffect, useContext } from 'react';
import app from './base';
// import {hello} from './base.js';
import {createUserWithEmailAndPassword,
signInWithEmailAndPassword,
onAuthStateChanged,
signOut} from "firebase/auth"
import {auth} from './base'
export const AuthContext = React.createContext();
// const usersCollectionRef
export const AuthProvider= ({children}) =>{
    const [user, setUser] = useState();
    function logIn(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
      }
      function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
      }
      function logOut() {
        return signOut(auth);
      }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
          });
      
          return () => {
            unsubscribe();
          };
    }, []);
    
    return (
        <AuthContext.Provider value={{user, logIn, signUp, logOut}}>
           {children} 
        </AuthContext.Provider>
    )
}
export function useUserAuth(){
    return useContext(AuthProvider)
}