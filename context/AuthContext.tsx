'use client';
import {  createContext, useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/config/firebase';

//@ts-ignore
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>("yooooo");
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    console.log("sign")
  };

  const googleLogOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return()=>{
      unsubscribe()
    }
  }, []);
  return (
  <AuthContext.Provider 
  value={{ user, setUser,googleLogOut,googleSignIn }}>
    {children}
    </AuthContext.Provider>);
};

// export const UserAuth = () => {
//   return useContext(AuthContext);
// };
