import axios from 'axios'
import { getProductById } from './products'

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


export const checkIfUserLoggedIn = () => {
    const username = localStorage.getItem("username")
    return username != null
}


export const addItemToUserCart = async (id) => {
    const email = getUserInfo()
    try {
        const res = await axios.get(baseUrl + `api/users/email/${email}`)
        const userInfoFetched = res.data[0]
        if(userInfoFetched.cartItemsId == undefined) {
            const dataToBeUpdated = {cartItemsId: [id], ...userInfoFetched}
            const updatedRes = await axios.put(baseUrl + `users/${userInfoFetched.id}`, dataToBeUpdated)
            console.log(updatedRes.status)
        } else {
             console.log(id)
            console.log(userInfoFetched.cartItemsId)
            const updateCartItemsId = userInfoFetched.cartItemsId.push(id)
            console.log(updateCartItemsId)
            const dataToBeUpdated = {cartItemsId: updateCartItemsId, ...userInfoFetched}
            const updatedRes = await axios.put(baseUrl + `users/${userInfoFetched.id}`, dataToBeUpdated)
            console.log(updatedRes.status)
        }
    } catch(err) {
        console.log(err)
    }
}

export const fetchCartItemsId = async () => {
    const email = getUserInfo()
    try {
        const user = await axios.get(baseUrl + `api/users/email/${email}`)
        return (user.data[0].cartItemsId==undefined)?[]:user.data[0].cartItemsId
    }catch(err) {
        console.log(err)
    }
} 

export const fetchCartItems = async() => {
    try {
        const ids = await fetchCartItemsId()
        const items = ids.map(async id => {
            try{ 
                const prod = await getProductById(id)
                console.log(prod)
                return prod
            } catch(err) {
                console.log(err)
            }
        })
        return await Promise.all(items)
    }catch(err) {
        console.log(err)
    }
    
}

export const checkIfInCart = async (itemId) => {
    try{
        const ids = await fetchCartItemsId()
        for(let id of ids) {
            if(itemId == id) {
                return true
            }
        }
        return false 
    }catch(error) {
        console.log(error)
    }
}

const getUserInfo = () => {
    const userInfo = localStorage.getItem("info")
    if(userInfo != null) {
        const info = JSON.parse(userInfo)
        const { email } = info
        return email
    }
}

