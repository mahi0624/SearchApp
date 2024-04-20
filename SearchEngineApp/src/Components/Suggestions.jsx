import React, { useState } from 'react'
import UserDetails from './UserDetails'

const Suggestions = ({results}) => {
     //const[restitle,setRestitle]=useState([]);
     //setRestitle(restitle);
      
  return(
    <div >
        {
            results.map((res,id)=>{
                return(
                    <div key={id}>
                        <UserDetails res={res}/>
                    </div>
                )
            })
        }
    </div>
  )
     
}


export default Suggestions