import '../App.css'
import { useState } from 'react'


function Form() {
    const [ConfirmePW, setConfirmePW] = useState('')
    const [ConfirmeMassege, setConfirmeMassege] = useState('')
    const [PassWord, setPassWord] = useState('')
    const [PassWordMassage, setPassWordMassage] = useState('')
    const [Email, setEmail] = useState('')
    const [EmailMessage, setEmailMassege] = useState('')
    const [FirstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [Message, setMessage] = useState('')
    const [Message2, setMessage2] = useState('')

    

    const psswordhandler = (e) => {
        setPassWord(e.target.value)
        if (PassWord.length < 8) {
            setPassWordMassage(' field must be at least 8 characters.')
        } else {
            setPassWordMassage('')
        }
    }

    const confirmehandler = (e) => {
        setConfirmePW(e.target.value)
        console.log(PassWord + '**********')
        console.log(ConfirmePW + '///////////')
        if (e.target.value != PassWord) {
            setConfirmeMassege('Confirm password does not match')

        } else {
            setConfirmeMassege('')
        }
    }
    const emailhandler = (e) => {
        setEmail(e.target.value)
        if (Email.length < 8) {
            setEmailMassege('field must be at least 8 characters.')
        } else {
            setEmailMassege('')
        }
    }

    const nameChanges = (e) => {
        setFirstName(e.target.value)
        // useState('')
        if (FirstName.length < 2) {
            setMessage('First Name must be at least 2 charachters')

        } else {
            setMessage('')
        }

    }
    const lastnamehandler = (e) => {
        setLastName(e.target.value)
        // useState('')
        if (lastName.length < 2) {
            setMessage2('First Name must be at least 2 charachters')

        } else {
            setMessage2('')
        }

    }
    // const nameValidation =()=>{


    return (
        <div className='container'>
            <form >
            <div className='label'>
                <label name='name' >Fist Name </label>
                <input type="text" placeholder='Please enter first name ' onChange={nameChanges} />
            </div>
            <div>
                <p>{Message}</p>
            </div>
            <div className='label'>
                <label name='last'>Last Name </label>
                <input type="text" placeholder='Please enter last name' onChange={lastnamehandler} />
            </div>
            <p>{Message2}</p>
            <div className='label'>
                <label name='email' >Email </label>
                <input type="email" placeholder='Please enter your email' onChange={emailhandler} />
            </div>
            <p>{EmailMessage}</p>
            <div className='label'>
                <label name='pasword'>Pasword </label>
                <input type="password" placeholder='Please enter password' onChange={psswordhandler} />
            </div>
            <p>{PassWordMassage}</p>
            <div className='label'>
                <label name='pasword'>Confirme Pasword </label>
                <input type="password" onChange={confirmehandler} />
            </div>
            <p>{ConfirmeMassege}</p>
        </form>
        
    </div >
)
}

export default Form