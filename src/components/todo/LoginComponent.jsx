import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Security/authContext'

export default function LoginComponent(){

    const [username,setusername]=useState('samantha')
    const [password,setpassword]=useState('')

    const [showerrormsg,seterrormsg]=useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUsernameChange(event){
        setusername(event.target.value)
    }

    function handlePasswordChange(event){
        setpassword(event.target.value)
    }

async function handlesubmit(){
        if(await authContext.login(username,password)){
            navigate(`/welcome/${username}`)
            
        }else{
            seterrormsg(true)
        }
    }

    return(

        <div className="Login">
            
            {showerrormsg && <div className='error'>Authentication Failed</div>}

            <div className="LoginForm">
                <h1>Time to Login!</h1>
                <div>
                    <label>Username: </label>
                    <input type="text" name="username"
                             value={username}
                             onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" name="password"
                            value={password}
                             onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login"
                            onClick={handlesubmit}>Login</button>
                </div>
            </div>

            
        </div>
    )
}