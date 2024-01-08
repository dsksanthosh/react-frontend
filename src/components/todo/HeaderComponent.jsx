import {Link } from 'react-router-dom'
import { useAuth } from './Security/authContext'



export default function HeaderComponent(){

    const authContext=useAuth()
    const isauthenticated = authContext.isAuthenticated

    function logout(){
        authContext.logout()
    }
    

    return(
        <header className="border-bottom border-light border-5 mb-5 p-2">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg">
                    <li className="navbar-brand ms-2 fs-2 fw-bold text-black">Santhosh</li>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item fs-5">
                               {isauthenticated && <Link className="nav-link" to="/welcome/samantha">Home</Link>}
                            </li>
                            <li className="nav-item fs-5">
                                {isauthenticated && <Link className="nav-link" to="/list-todos">Todos</Link>}
                            </li>
                        </ul>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                        {!isauthenticated && <Link className="nav-link" to="/login">Login</Link>}
                        </li>
                        <li className="nav-item fs-5">
                        {isauthenticated && <Link className="nav-link" to="/log-out" onClick={logout}>Logout</Link>}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
    )
}