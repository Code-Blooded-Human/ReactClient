import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import { API_SERVER } from '../const';
import { tokenState } from '../recoilState';
import { Link } from 'react-router-dom';
import DocIcon from './DocIcon';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import {useParams} from 'react-router-dom'



function ShowVersions() {
    const { name } = useParams();
  const token = useRecoilValue(tokenState);
  const [docs, setDocs] = useState([])

  async function getDocs(){
    const d = await axios.get(API_SERVER+"/api/document/"+name,{headers: {'Authorization': `Bearer ${token}`}})
    console.log(d);
    setDocs(d.data.doc.content);
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
    <Box sx={{ width: '100%', margin:'30px' }}>
      <Grid container rowSpacing={3} columnSpacing={3}>
        {docs.map(function(doc, index){
                    if(doc.label && doc.label != "No Label"){
                        console.log(doc.label)
                        return <DocIcon name={doc.label} to={"/document/"+name+"/"+doc.label} />
                    }
                   
                  })}
      </Grid>
    </Box>
  )
}

export default ShowVersions