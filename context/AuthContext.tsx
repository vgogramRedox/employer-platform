'use client';
import {  createContext, useState, useEffect } from 'react';
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '@/config/firebase';
import { selector, useRecoilState, useRecoilValue } from 'recoil';
import {  UserProfileAtom } from '@/Recoil/recoilStates';
import { count } from 'console';

//@ts-ignore
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>("")
  const [userProfile,setUserProfile]=useRecoilState(UserProfileAtom)

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
 
  };

  const googleLogOut = () => {
    signOut(auth);
  };

  const userProfileSelector=selector({
    key:"userProfileSelector",
    get:({ get})=>{
const user=get(UserProfileAtom)
const newUser={
  ...user,email:user?.email
  
}
return newUser
    }
})
  const value=useRecoilValue(userProfileSelector)
  // console.log(user,value)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      
      setUser(currentUser);
     
    

    });
    console.log(user,userProfile)

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
