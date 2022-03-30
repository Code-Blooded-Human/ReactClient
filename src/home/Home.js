import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { API_SERVER } from '../const';
import { tokenState } from '../recoilState';
import { Link } from 'react-router-dom';

function Home() {
  
  const token = useRecoilValue(tokenState);
  const [docs, setDocs] = useState([])

  async function getDocs(){
    const d = await axios.get(API_SERVER+"/api/document",{headers: {'Authorization': `Bearer ${token}`}})
    console.log(d);
    setDocs(d.data.docs);
  }

  useEffect(() => {
    getDocs();
  
    return () => {
      
    }
  }, [])

  function getLabels(name,content){
    return (content.map((c,i)=>{
      let to ="/document/"+name+"/"+c.label;
      if(c.label != "No Label"){
        return (<ul key={i}><Link to={to}>{c.label}</Link></ul>)
      }
      
    }))
  }
  
  return (
    <div>
      <ul>
      {docs.map(function(doc, index){
                    let to = "/document/"+doc.name;
          
                    return <li key={ index }><Link to={to}>{doc.name}</Link> {getLabels(doc.name,doc.content)}</li>;
                    
                  })}
      </ul>
      {/* <DataTable /> */}
    </div>
  )
}

export default Home