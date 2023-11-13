import axios from 'axios'

const baseUrl = "http://localhost:4000/"

export const saveUser = async (fName, lName, email, password) => {
    //const config = { headers: {"Content-Type": "application/json"}}
    let user = { firstName: fName, lastName:lName, email: email, password: password}
    try {
        const res = await axios.post(baseUrl + "users", user)
        console.log(res.data)
        return true
    } catch(err) {
        console.log(err)
        return false
    }
    
}

export const checkIfUserValid = async (email, userPassword) => {
    try {
        const res = await axios.get(baseUrl + `api/users/email/${email}`)
        const { password } = res.data[0]
        if(password == userPassword){
            return true
        } 
        return false
    } catch(e) {
        console.log(e)
        return false
    }
}

export const saveUserInfo = (email, password) => {
    const userInfo = {email: email, password: password}
    localStorage.setItem("info", JSON.stringify(userInfo) )
    localStorage.setItem("username", email.split("@")[0])
}
