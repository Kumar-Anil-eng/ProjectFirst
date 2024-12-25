import React from 'react'

export default function Home(){
  return(
    <div>
      <User name="anil"/>
      <User name="sunil"/>
      <User name="rakesh"/>
      <User name = "sonu"/>
      <h1>Home Page</h1>
    </div>
  )
}

const User = (props)=>{
  return (
    <div>
    <h1> User name is {props.name}</h1>
    </div>
  )
}
