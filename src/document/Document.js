import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { tokenState } from '../recoilState.js';
import { getDocument, getPassword, updatePassword } from './api.js';
import QuillEditor from './QuillEditor';

function Document(props) {
const { name, label } = useParams();
console.log({label});
const [doc, setDoc] = useState({data:{}});
const [docPassword, setDocPassword] = useState();

const token = useRecoilValue(tokenState);

async function fetchPassword(name){
  let passwordString = await getPassword( token);
  if(passwordString == undefined){
    passwordString ='{}';
  }
  
  let password = JSON.parse(passwordString);
  if(password[name] == undefined){
    password[name] = prompt('Type here');
  }
  let updatedPasswords = JSON.stringify(password);
  updatePassword(updatedPasswords, token);
  return password[name];
}

useEffect(() => {
    getDocument(name, label ,token).then((d)=>{console.log(d); setDoc(d)});
    fetchPassword(name).then(password =>{setDocPassword(password); console.log({password})})
}, []);

  return (
    <>
     {docPassword && <QuillEditor name={name} label={label} password={docPassword}/>}
    </>
  )
}

export default Document