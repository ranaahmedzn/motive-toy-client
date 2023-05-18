import { createContext} from "react";
import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider()

const AuthProvider = ({children}) => {
    const user = {email: 'ranasheikh@gmail.com'}

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const twitterLogin = () => {
        return signInWithPopup(auth, twitterProvider);
    }

    const authInfo = {
        user,
        createUser,
        signInUser,
        googleLogin,
        twitterLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;