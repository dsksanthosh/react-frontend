import { useEffect, useState } from "react"
import { deleteTodosApi, retrieveTodosApi, } from "./Api/TodosApiService"
import { useAuth } from "./Security/authContext"
import { useNavigate} from "react-router-dom"


export default function ListTodosComponent(){

   // const today = new Date()
    const authcontext= useAuth()

    const username = authcontext.username

    const navigate = useNavigate()

    //const targetDate = new Date(today.getFullYear()+5,today.getMonth(),today.getDay())

    const [todos,setTodos]=useState([])

    const [message,setmessage]=useState(null)

     useEffect( () => refreshTodos(),[])

    function refreshTodos(){
        
        retrieveTodosApi(username)
            .then(response => setTodos(response.data))
            .catch(error => console.log(error))  
        
    }

    function deleteTodo(id){
       deleteTodosApi(username,id)
       .then( () => {
                    setmessage(id +'is deleted')
                    refreshTodos()
                    }
            )
       .catch(error=>console.log(error))

    }

    function updateTodo(id){
        navigate(`/todo/${id}`)
    }

    function addTodo(){
        navigate('/todo/-1')
    }
     
    
    return(
        <div className="container">
           <h1>Things to do</h1> 
           <div>
            <div>{message && <div className="alert alert-warning">{message}</div>}</div>
            <table className="table">
                
                <thead>
                    <tr>
                        <th>description</th>
                        <th>done?</th>
                        <th>TargetDate</th>
                        <th>delete</th>
                        <th>update</th>
                    </tr>
                </thead>

                <tbody>
                   {
                     todos.map(
                        todo => (
                            <tr key={todo.id}>
                                <td>{todo.description}</td> 
                                <td>{todo.done.toString()}</td>
                                {/* <td>{todo.targetDate.toDateString()}</td> */}
                                <td>{todo.targetDate.toString()}</td>
                               <td> <button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}>delete</button> </td>
                               <td> <button className="btn btn-success" onClick={()=>updateTodo(todo.id)}>update</button> </td>
                            </tr>
                            )
                        )
                    }  
                </tbody>

            </table>
           </div>
           <div className="btn btn-success" onClick={addTodo}>add new todo</div>
        </div>
    )
}