"use client"
import { useState } from 'react'
import './../style.css'
export default function Page(){
  const [name,setName] = useState("")
  const [age,setAge] = useState("")
  const [email,setEmail] = useState("")
  const addUser = async()=>{
    let data = await fetch("http://localhost:3000/api/users",{
      method:"Post",
      body:JSON.stringify({name,age,email})
    })
    data =await data.json()
    if(data.success){
      alert("new user added")
    }else{
      alert("some error please check")
    }
    console.log(data)

console.log(name,age,email)
  }
  return(
    <div className='add-user'>
      <h1>Add New User</h1>
      <input type="text" value={name} placeholder="enter name" onChange={(e)=>setName(e.target.value)} className="input-field"></input>
      <input type="text" value={age} placeholder="enter age" onChange={(e)=>setAge(e.target.value)} className="input-field"></input>
      <input type="text" value={email} placeholder="enter email" onChange={(e)=>setEmail(e.target.value)} className="input-field"></input>
      <button className="btn" onClick={addUser}>Add User</button>
    </div>
  )
}