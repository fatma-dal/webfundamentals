import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value
        }));
    };

    return (
        <div>
        <form>
            <div>
            <label>First Name:</label>
            <input 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
            />
            </div>
            <div>
            <label>Last Name:</label>
            <input 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
            />
            </div>
            <div>
            <label>Email:</label>
            <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
            />
            </div>
            <div>
            <label>Password:</label>
            <input 
                type="password" 
                name="password" 
                value={formData.password} 
                onChange={handleChange} 
            />
            </div>
            <div>
            <label>Confirm Password:</label>
            <input 
                type="password" 
                name="confirmPassword" 
                value={formData.confirmPassword} 
                onChange={handleChange} 
            />
            </div>
        </form>
        <div>
            <h3>Form Data:</h3>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
            <p>Email: {formData.email}</p>
            <p>Password: {formData.password}</p>
            <p>Confirm Password: {formData.confirmPassword}</p>
        </div>
        </div>
    );
    }

export default Form;