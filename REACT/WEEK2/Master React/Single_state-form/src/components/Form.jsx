import React from 'react'
import { useState } from 'react'


function Form() {
    const [data,setData]= useState({
        firstname :'',
        lastname:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const datahandler =(e)=>{
        setData((prevdata)=>({...prevdata,[e.target.name]: e.target.value})
            
        )}

return (
    <div>
        <form >
        <label>First Name</label>
        <input name='firstname' type="text" onChange={datahandler}/>
        <br />
        {/* --------------------------: */}
        <label>Last name</label>
        <input name='lastname'type="text" onChange={datahandler} />
        <br />
        {/* ---------------------------- */}
        <label>Email</label>
        <input name='email' type="email" onChange={datahandler}/>
        <br />
        {/* --------------------------- */}
        <label>Password</label>
        <input name='password' type="password" onChange={datahandler}/>
        <br />
        <label>Confirm Password</label>
        <input name='confirmpassword' type="password" onChange={datahandler} />

        </form>
        <p>First Name :{data.firstname }</p>
        <p>Last Name :{data.lastname }</p>
        <p>Email :{data.email }</p>
        <p>Password :{data.password }</p>
        <p>Confirm password :{data.confirmpassword }</p>
        <p></p>

        
        

    </div>
)
}

    export default Form 