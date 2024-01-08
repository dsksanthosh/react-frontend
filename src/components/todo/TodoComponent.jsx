import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "./Security/authContext"
import { addTodoApi, retrieveTodoApi, updateTodoApi } from "./Api/TodosApiService"
import { useEffect, useState } from "react"
import { ErrorMessage, Field, Form, Formik } from "formik"

export default function TodoComponent(){

    const {id}=useParams()

    const AuthContext=useAuth()

    const username=AuthContext.username

    useEffect(()=>retrieveTodo())

    const [description,setdescription]=useState('')

    const [targetDate,setdate]=useState('')

    const navigate = useNavigate()

    
    function retrieveTodo(){

        if(id != -1){
        retrieveTodoApi(username,id)
        .then(response => {setdescription(response.data.description)
                            setdate(response.data.targetDate)
                        })
        .catch(error=>console.log(error))
        }

    }

    function onsubmit(values){
        const todo={
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false,
        }
        //console.log(todo)
        if(id != -1){
            console.log("id in updateTodo"+id)
            updateTodoApi(username,id,todo)
            .then(navigate("/list-todos"))
            .catch(error => console.log(error))
        }else{
            console.log("id in addTodo"+id)
            addTodoApi(username,todo)
            .then(navigate("/list-todos"))
            .catch(error => console.log(error))        
        }
    }

    function validate(values){
        //console.log(values)

        let errors={}

            if(values.description.length < 5){
                errors.description="Enter more than 5 characters"
            }

            if(values.targetDate== null || values.targetDate===''){
                errors.targetDate="Enter targetDate"
            }

            return errors
    }

    return(
        <div className="container">
        <div> Todo Component</div>
        <div>
            <Formik initialValues={ {description,targetDate} }
                    enableReinitialize={true} 
                    onSubmit={onsubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false} >
                {
                    (props) =>(
                        <Form>
                            <ErrorMessage
                                        name="description"
                                        component="div"
                                        className="alert alert-warning" />

                            <ErrorMessage
                                        name="targetDate"
                                        component="div"
                                        className="alert alert-warning" />

                            <fieldset className="form-group">
                                <label>description</label>
                                <Field type="text" className="form-control" name="description"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>targetDate</label>
                                <Field type="date" className="form-control" name="targetDate"/>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">save</button>
                            </div>
                        </Form>
                    )
                }
            </Formik>
        </div>
        </div>
    )

}
