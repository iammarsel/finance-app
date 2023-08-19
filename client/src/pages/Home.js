import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react";
import Sidebar from './Sidebar';
function Home() {
  const [EntryList, setEntryList] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3001/entries").then((response) => {
      setEntryList(response.data)
    })
  }, [])
  
  return <div> <Sidebar />  {EntryList.map((value, key) => { return <div className='text-center'> {value.title}  {value.tag} {value.amount} {value.tag}</div>})}</div>
}

export default Home