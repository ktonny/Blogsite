import React from 'react'
import { useState } from 'react'

function Signup() {
    const[FormData, setFormData] = useState({
        "Username": "",
        "Email": "",
        "Password": ""
    });
    const handleInputOnChange = (event) =>{};
  return (
    <div>
        <div>
            <h1>E254-magazine</h1>
            <form>
                <label>
                    Username:
                    <input
                    type='text'
                    value={FormData.Username}
                    name='Username'
                    onChange={handleInputOnChange}
                    />
                </label>
                <br />

                <label>
                    Email:
                    <input
                    type='email'
                    value={FormData.Email}
                    name='Email'
                    onChange={handleInputOnChange}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                    type='password'
                    value={FormData.Password}
                    name='Password'
                    onChange={handleInputOnChange}
                    />
                </label>
                <br />
                <button type='submit'>Sign in</button>
            </form>
        </div>
    </div>
  )
}

export default Signup