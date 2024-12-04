import React from 'react'
// importing axios for Api request
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import { useState, useEffect } from 'react'  


function List() {
    const nav = useNavigate() // Hook to 
    const [countries,setcountries]= useState([])
    const [ name,setName]=useState('')
    // const [flag,setFlag]=               
    
// delet country function
const remove =(id) => setcountries(countries.filter((c,i)=> i !== id))
// add country
const add=(e)=> {
    e.preventDefault()
    setcountries([...countries,{name:{common:name},flags:{png:flag}}])
    setName("")
    setFlag('')
}



    useEffect(()=>{
        axios
        .get("https://restcountries.com/v3.1/all?fields=name,flags")
        .then(res=>setcountries(res.data))
        .catch(error=> console.error(error)) // console log the error in red
    },[])
return (
    <div>
        <h1>Countries List</h1>
        <table className='table table-striped'>
            <thead>
                <tr>Name</tr>
                <tr>Flag</tr>
                <tr>Actions</tr>
            </thead>
            <tbody>
                {
                    countries.map((c,i)=>(
                        <tr key={i}>
                            <td>{c.name.common}</td>
                            <td>
                                <img src={c.flags.png} alt="{c.name.common}" height={50} />
                            </td>
                            <td>
                                <button  className='btn btn-primary'>View</button>
                                <button onClick={()=>remove()} className='btn btn-danger'>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default List