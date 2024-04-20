import React, { useState } from 'react'

const UserDetails = ({res}) => {
    const[resultdis,setResultdis]=useState({});
    const handleDisplays=()=>{
        {
            res=setResultdis(resultdis);
        }
    }
  return (
    <div onClick={handleDisplays}>{res.title}</div>
  )
}

export default UserDetails