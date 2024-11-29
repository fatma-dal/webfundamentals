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
    
    const [users, setUsers] = useState([])// Store list of users
    const [header, setHeader] = useState("Welcome to User Registration") // Dynamic header

        const submithandler = (e) => {
            e.preventDefault()
            const newUser = { FirstName, lastName, Email }
            setUsers([...users, newUser])
        
            // Clear inputs
            setFirstName("")
            setLastName("")
            setEmail("")
            setPassWord("")
            setConfirmePW("")
            setMessage("")
            setMessage2("")
            setEmailMassege("")
            setPassWordMassage("")
            setConfirmeMassege("")
        

            setHeader("Thank you for registering!")
        }

    return (
            <div className="container">
            <h1>{header}</h1>
            <form onSubmit={submithandler}>
            <div className="label">
                <label htmlFor="name">First Name </label>
                <input
                type="text"
                placeholder="Please enter first name"
                value={FirstName}
                onChange={nameChanges}
                />
            </div>
            <p>{Message}</p>
            <div className="label">
                <label htmlFor="last">Last Name </label>
                <input
                type="text"
                placeholder="Please enter last name"
                value={lastName}
                onChange={lastnamehandler}
                />
            </div>
            <p>{Message2}</p>
            <div className="label">
                <label htmlFor="email">Email </label>
                <input
                type="email"
                placeholder="Please enter your email"
                value={Email}
                onChange={emailhandler}
                />
            </div>
            <p>{EmailMessage}</p>
            <div className="label">
                <label htmlFor="password">Password </label>
                <input
                type="password"
                placeholder="Please enter password"
                value={PassWord}
                onChange={psswordhandler}
                />
            </div>
            <p>{PassWordMassage}</p>
            <div className="label">
                <label htmlFor="confirmPassword">Confirm Password </label>
                <input
                type="password"
                placeholder="Confirm your password"
                value={ConfirmePW}
                onChange={confirmehandler}
                />
            </div>
            <p>{ConfirmeMassege}</p>
            <button type="submit">Create User</button>
            </form>
    
            <div>
            <h2>Registered Users</h2>
            {users.map((user, index) => (
                <div key={index} className="user-card">
                <p>
                    <strong>First Name:</strong> {user.FirstName}
                </p>
                <p>
                    <strong>Last Name:</strong> {user.lastName}
                </p>
                <p>
                    <strong>Email:</strong> {user.Email}
                </p>
                </div>
            ))}
            </div>
        </div>
        );
    }


export default Form