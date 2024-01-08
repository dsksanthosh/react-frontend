import {Link,useParams } from 'react-router-dom'
import { useState } from 'react'
import { retrieveTodosApi } from './Api/TodosApiService'

export default function WelcomeComponent(){
    const {username} = useParams()

    const [message,setmessage]=useState(null)

    function callHelloworldRestApi(){
       // console.log('clicked')
        
        retrieveTodosApi(username)
                        .then ((response) => successmsg(response))
                        .catch((error) => errormsg(error))
                        .finally(() => console.log('clean up'))

    }

    function successmsg(response){
       // console.log(response)
        setmessage(response.data)
    }

    function errormsg(error){
        console.log(error)
    }

    return(
        <div className="welcome component">
            <div>
                <h1>welcome {username}</h1>
                Manage your todos <Link to='/list-todos'>click</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloworldRestApi}>call Hello World</button>
            </div>
            <div className="message">
                {message}
            </div>
        </div>
    )
}