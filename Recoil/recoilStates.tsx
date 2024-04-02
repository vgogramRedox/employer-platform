import { UserProfileType } from '@/types/app'
import {atom,selector} from 'recoil'

const userProfileState:UserProfileType={
    name:"",
    photoURL:"",
    email:"",
    VgogramVerified:false,
    access:"",
    refresh:"",
    googleUid:"",
    age:"",
    address:"",
    profileStatusComplete:undefined,
    premiumStatus:false
}




export const UserProfileAtom=atom({
    key:'user-profile',
    default:userProfileState
})