import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GithubAuthProvider, signOut } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import PropTypes from 'prop-types'


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    // social auth providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const [user, setUser] = useState(null);
    console.log(user);

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };


    // google
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };


    // github
    const githubLogin = () => {
        return signInWithPopup(auth, githubProvider);
    };


    //logout
    const logout = () => {
        setUser(null);
        signOut(auth);
    };



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, []);


    const allvalues = {
       
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user
    };
    return (
        <AuthContext.Provider value={allvalues}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object.isRequired,
}

export default AuthProvider;