import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { tokenState, passwordState } from '../recoilState.js';
import { getDocument, getPassword, updatePassword, verifyPassword } from './api.js';
import QuillEditor from './QuillEditor';
var CryptoJS = require("crypto-js");
const sha1 = require('js-sha1');  

function Document(props) {
const { name, label } = useParams();
console.log({label});
const [doc, setDoc] = useState({data:{}});
const [docPassword, setDocPassword] = useState('');

const token = useRecoilValue(tokenState);
const userPassword = useRecoilValue(passwordState);

async function fetchPassword(name){
  let passwordStringEncrypted = await getPassword(token);
  let passwordString='{}'
  console.log({passwordStringEncrypted});
  if(passwordStringEncrypted == undefined){
    passwordString ='{}';
  }else{
    var bytes  = CryptoJS.AES.decrypt(passwordStringEncrypted, userPassword);
    passwordString = bytes.toString(CryptoJS.enc.Utf8);
  }
  console.log({passwordString});
  let password = JSON.parse(passwordString);

  if(password[name] == undefined ){
    password[name] = prompt('Password Enter passsword');
  }
  let isCorrectPass = await verifyPassword(name, sha1(password[name]) ,token);
  
  while(!isCorrectPass){
    
    password[name] = prompt('Incorrect Password, enter again');
    isCorrectPass = await verifyPassword(name, sha1(password[name]) ,token);
  }


  let updatedPasswords = JSON.stringify(password);
  console.log({updatedPasswords});
  let updatedPasswordsEncrypted = CryptoJS.AES.encrypt(updatedPasswords, userPassword).toString();
  updatePassword(updatedPasswordsEncrypted, token);
  return password[name];
}


useEffect(() => {
    getDocument(name, label ,token).then((d)=>{console.log(d); setDoc(d)});
    fetchPassword(name).then(password =>{
      setDocPassword(password)})
}, []);

  return (
    <>
      <QuillEditor name={name} label={label}/>
    </>
  )
}

export default Document