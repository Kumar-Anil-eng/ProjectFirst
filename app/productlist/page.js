"use client"
import {useEffect,useState} from 'react'
export default function Page(){
 
  useEffect(()=>{
async function fetchDAta(){
  let data =await fetch("https://dummyjson.com/profetchducts")
  data =await data.json()
console.log(data)
}



  },[])
  return(
    <div>
      <h1>Product List</h1>
    
    </div>
  )
}