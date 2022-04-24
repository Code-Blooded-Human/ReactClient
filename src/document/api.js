import axios from "axios";
import { API_SERVER, USER_TOKEN } from "../const";


export async function getDocument(name, label, token){
   const document = await axios.post(API_SERVER+'/api/document/fetch',{name:name, label:label}, {headers: {'Authorization': `Bearer ${token}`}});
   return document;
}

export async function getPassword(token){
   const passwords = await axios.get(API_SERVER+'/api/user/getPasswords', {headers: {'Authorization': `Bearer ${token}`}});
   console.log(passwords);
   return passwords.data.passwords;
}

export async function updatePassword(password, token){
   const passwords = await axios.post(API_SERVER+'/api/user/updatePasswords',{passwords:password} ,{headers: {'Authorization': `Bearer ${token}`}});
   return passwords.data.passwords;
}

export async function updateDocument(name, content,label, token){
   const res = await axios.post(API_SERVER+'/api/document/update',{name:name, data:content, label:label}, {headers: {'Authorization': `Bearer ${token}`}} )
   console.log(res);
   if(res.data.status == "SUCCESS"){
      return true;
   }else{
      return false;
   }
}


export async function createDocument(name, token){
   const res = await axios.post(API_SERVER+'/api/document/create',{name:name}, {headers: {'Authorization': `Bearer ${token}`}} )
   console.log(res);
   if(res.data.status == "SUCCESS"){
      return true;
   }else{
      return false;
   }
}
