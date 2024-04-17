import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GithubAuthProvider, signOut, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import auth from "../../Firebase/Firebase.init";
import PropTypes from 'prop-types'


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {

    // social auth providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // console.log(user);
    console.log(loading);

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };


    // update
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })

    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    // google
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };


    // github
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    };


    //logout
    const logout = () => {
        setUser(null);
        signOut(auth);
    };


    const resetPass = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);


    const allvalues = {

        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        user,
        loading,
        updateUserProfile,
        resetPass
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