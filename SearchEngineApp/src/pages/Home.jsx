import React, { useState } from "react";
import users from '../Constant/users.json';
import Suggestions from "../Components/Suggestions";

const Home =  () => {
  const[inputvalue,setInputvalue]=useState('');
   console.log(inputvalue);
   const results=users.filter((pictitle)=>{
    return inputvalue && pictitle && pictitle.title.includes(inputvalue); 
   })
   console.log(results);
   
  return (
    <>
      <input placeholder="type here...." value={inputvalue} onChange={(event)=>setInputvalue(event.target.value)}></input>
      <Suggestions results={results}/>
      
      {/* <Suggestions results={results.title} id={results.id}/> */}
      {/* {users && users.map((data)=>{
        console.log(data);
        //setSearchdata(searchdata);
        return(
           
            <div key={data.id} >
          <h2>{data.albumId}</h2>
          <p>{data.title}</p>
          </div>
          
          
             
        )      
      })} */}
    </>
  );
}

export default Home;
