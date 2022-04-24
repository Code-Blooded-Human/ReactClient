import React, { useState } from "react";
import ReactQuill from 'react-quill';


import * as Y from 'yjs'

import { QuillBinding } from 'y-quill'
// import QuillCursors from 'quill-cursors'
import { WebrtcProvider } from 'y-webrtc'
import 'react-quill/dist/quill.snow.css';
import { createDocument, getDocument, updateDocument } from "./api";
import { decodeU8Int, encodeU8Int } from "./utils";
import { RTC_SERVER } from "../const";
import { useRecoilValue } from "recoil";
import { tokenState } from "../recoilState";
import QuillCursors from 'quill-cursors';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import CommentBox from "./CommentBox";

let ydoc = null;
const QuillEditor = (props) => {
  let quillRef=null;
  let reactQuillRef=null;


  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean'],
      ['save']
    ],
  }

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image' 
  ]
  

  const token = useRecoilValue(tokenState);

  const [input, setInput] = useState(undefined);
  
  React.useEffect(() => {
    attachQuillRefs()
    
    ydoc = new Y.Doc()
    let providerFileName=props.name;
    if(props.label){
      providerFileName = providerFileName+props.label;
    }
    const provider = new WebrtcProvider(providerFileName, ydoc, { signaling: [RTC_SERVER], password: props.password })
    const ydocument = ydoc.getText('quill');
    

    

    getDocument(props.name, props.label ,token).then(d=>{
      console.log(d);
      let updateVector = decodeU8Int(d.data.content);
      Y.applyUpdate(ydoc, updateVector);
    });


    new QuillBinding(ydocument, quillRef);
  }, [])

  const attachQuillRefs = () => {
    if (typeof reactQuillRef.getEditor !== 'function') return;
    quillRef = reactQuillRef.getEditor();
  }
  
  const save = async ()=>{
    console.log(ydoc)
    const state1 = Y.encodeStateAsUpdate(ydoc);

    if(props.label){
      alert("Cant save an older version, creating a new doc with name="+props.name+"-"+props.label);

      let newName = props.name+"-"+props.label
      await createDocument(newName, token);
      updateDocument(newName, encodeU8Int(state1), input ,token);


      return;
    }

    updateDocument(props.name, encodeU8Int(state1), input ,token);
  }

  return (
    <>
    <div>
        {/* <input type="text" placeholder="Enter Version name" value={input} onInput={e => setInput(e.target.value)}></input>
        <button onClick={save}>Save</button> */}
        <ReactQuill 
          ref={(el) => { reactQuillRef = el }}
          theme={'snow'} 
          modules={modules}
                    formats={formats} />
      </div>
      <div style={{position:'fixed', bottom:0, width:'100%', textAlign:'right'}}>
        <div><CommentBox /><TextField id="outlined-basic" label="Version Name" variant="outlined" size="small" style={{margin:'10px'}}  value={input} onChange={e => setInput(e.target.value)} /> <Button style={{margin:'10px'} } onClick={save} variant="outlined">Save</Button></div>
      </div>
    </>
  )
}

export default QuillEditor;