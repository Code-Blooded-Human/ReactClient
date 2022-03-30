import React, { useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { tokenState } from '../recoilState.js';
import { getDocument } from './api.js';
import QuillEditor from './QuillEditor';

function Document(props) {
const { name, label } = useParams();
console.log({label});
const [doc, setDoc] = useState({data:{}});

const token = useRecoilValue(tokenState);

useEffect(() => {
    getDocument(name, label ,token).then((d)=>{console.log(d); setDoc(d)});
}, []);

  return (
    <>
    <QuillEditor name={name} label={label}/>
    </>
  )
}

export default Document