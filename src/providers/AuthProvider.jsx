import { createContext, useEffect, useState} from "react";
import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    // console.log(user)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            setUser(currentUser)
        })
        
        return () => unsubscribe();
    }, [])

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const twitterLogin = () => {
        return signInWithPopup(auth, twitterProvider);
    }

    const updateUserProfile = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl
        })
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }


    const authInfo = {
        user,
        createUser,
        signInUser,
        signOutUser,
        googleLogin,
        twitterLogin,
        updateUserProfile,
        resetPassword
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;