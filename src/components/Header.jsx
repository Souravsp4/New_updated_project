import React, {useState, useEffect} from 'react'

import {Link, useNavigate} from "react-router-dom";
import {HashLink} from "react-router-hash-link"
import { checkIfUserValid } from '../utils/users';


const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState("")
  const navigate = useNavigate()
  const handleClick = () => {
    localStorage.removeItem("info")
    localStorage.removeItem("username")
    setUser("")
    setLoggedIn(false)
    navigate("/")
  }
  useEffect(()=>{
    (()=> {
      const userInfoStr = localStorage.getItem("info")
      if(userInfoStr == null) {
        setLoggedIn(false)
      } else {
        const userInfo = JSON.parse(userInfoStr)
        const { email , password } = userInfo
        if(email === "" || email === null || password === "" || password === null) {
          setLoggedIn(false)
        }
        checkIfUserValid(email, password).then(value => {
          if(value) {
            setLoggedIn(true)
            const username = localStorage.getItem("username")
            setUser(username)
          }
        }).catch(e=> {
          console.log(e)
        })
      }
    })()
  }, [loggedIn, user])
  return (
   <nav>
    <h1>Name</h1>
    <main>

    <HashLink to={"/#home"}>Home</HashLink>
   < HashLink to={"/#about"}>About</HashLink>
    <Link to={"/contact"}>Contact</Link>
    <Link to="/product">Products</Link>
    <HashLink to="/#feedbacks">Feedbacks</HashLink>
    {loggedIn?(<Link>welcome {user}</Link>):(<Link to="/login">Log in</Link>)}
    {loggedIn?(<Link onClick={handleClick}>Log out</Link>):(<p></p>)}

    {/* <HashLink to={"/#about"}>About</HashLink>
    <HashLink to={"/#brands"}>Brand</HashLink>
    <Link to={"/Services"}>Services</Link> */}
    
    </main>
   </nav>
  )
}

export default Header