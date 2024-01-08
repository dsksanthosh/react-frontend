import './TodoApp.css'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'

import HeaderComponent from './HeaderComponent'
import LoginComponent from './LoginComponent'
import WelcomeComponent from './WelcomeComponent'
import ListTodosComponent from './ListTodosComponent'
import ErrorComponent from './ErrorComponent'
import LogOutComponent from './LogOutComponent'
import AuthProvider, {useAuth } from './Security/authContext'
import TodoComponent from './TodoComponent'

function AuthenticateRoute({children}){
    
    const authContext= useAuth()
    
    if(authContext.isAuthenticated)
    return children
    
    return <Navigate to="/" />
}

export default function TodoApp(){
    return(
        <div className="TodoApp">

        <AuthProvider> 
            <BrowserRouter>
                <HeaderComponent/>  
                <Routes>
                    <Route path='/' element={<LoginComponent/>}/>
                    <Route path='/login' element={<LoginComponent/>}/>
                    <Route path='/welcome/:username' element={
                                        <AuthenticateRoute>
                                            <WelcomeComponent/>
                                        </AuthenticateRoute>
                                        }/>
                    <Route path='/list-todos' element={
                                        <AuthenticateRoute>
                                            <ListTodosComponent/>
                                        </AuthenticateRoute>}/>
                    <Route path='/todo/:id' element={
                                        <AuthenticateRoute>
                                            <TodoComponent/>
                                        </AuthenticateRoute>}/>
                    <Route path='*' element={<ErrorComponent/>}/>
                    <Route path='/log-out' element={
                                        <AuthenticateRoute>
                                            <LogOutComponent/>
                                        </AuthenticateRoute> }/>

                </Routes>
            </BrowserRouter>
        </AuthProvider>
            

        </div>
    )
}












