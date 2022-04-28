import axios from "axios";
import { API_SERVER, USER_TOKEN } from "../const";
const sha1 = require('js-sha1');  


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

export async function verifyPassword(name, passwordShaB62, token){
   const res = await axios.post(API_SERVER+'/api/document/verifyPassword',{name, passwordShaB62}, {headers: {'Authorization': `Bearer ${token}`}} )
   console.log(res);
   if(res.data.status == "SUCCESS"){
      return true;
   }else{
      return false;
   }
}



export async function createDocument(name, token, password){

   let hashedPassword = sha1(password)
   const res = await axios.post(API_SERVER+'/api/document/create',{name:name, passwordShaB62:hashedPassword}, {headers: {'Authorization': `Bearer ${token}`}} )
   console.log(res);
   if(res.data.status == "SUCCESS"){
      return true;
   }else{
      return false;
   }
}
