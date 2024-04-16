import { createContext } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import auth from "../../Firebase/Firebase.init";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    // create user
    const createUser = ( email, password) => {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    const allvalues = {
        createUser
    }
    return (
        <AuthContext.Provider  value={allvalues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;