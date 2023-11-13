import Navbar from "../components/Navbar";
import { useState } from "react";
import { checkIfUserValid, saveUserInfo } from './../utils/users'
import { useNavigate } from "react-router-dom"; 


const Login = ()=> {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [userValid, setUserValid] = useState(true)
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = await checkIfUserValid(email, password)
        if (isValid) {
            setUserValid(true)
            saveUserInfo(email, password)
            navigate("/")
        } else {
            setUserValid(false)
        }
        
    }
    return (
        <>
        <Navbar />
        <div className="container mt-4 mt-4 ml-4 mr-4 pl-4 pr-4" >
            {userValid?(<p></p>):(<p>error logging in, retry....</p>)}
        <form>
            <div className="mb-3">
                <label htmlFor="registrationEmail" className="form-label">Email Address </label>
                <input type="email" className="form-control" id="registrationEmail" aria-describedby="emailHelp" placeholder="username or email"
                onChange={(e)=> setEmail(e.target.value)}/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="registrationPassword" className="form-label">Password </label>
                <input type="password" className="form-control" id="registrationPassword" placeholder="password" 
                onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in</label>
            </div>
            <button type="submit" className="btn btn-primary" onClick={async e => await handleSubmit(e)}>Login</button>
        </form>
        </div>
        </>
    )
}


export default Login