import axios from 'axios'
import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'

function Show() {
    const {name}= useParams() 
    const [country,setCountry]= useState(null)
    // fitch data use effect
    useEffect(()=> {
        axios.get('https://restcountries.com/v3.1/name/'+ name)
        .then(res=>setCountry(res.data[0]))
        .catch(erroe=>console.error(error))
    },[name])
  return (
    <div>
        {country?
        <>
        <h1>{country.name.common}</h1>
        <img src={country.flags.png} alt='' height={100}/>
        <p>capital: {country.capital[0]}</p>
        <p>TimeZone:</p>
        {country.timezone.map((t,i)=> <p key={i}>{t}</p>)}</>: <><p>Loding...</p></>}
        </div>
    
  )
}

export default Show