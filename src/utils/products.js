import axios from 'axios'

const baseUrl = "http://localhost:5000/products"


const getAllProducts = async () => {
    try {
        const res = await axios.get(baseUrl)
        console.log("Called--------------")
        return res.data
    } catch(err) {
        console.log(err)
    }
}

const getProductById = async (id) => {
    try {
        const res = await axios.get(baseUrl + `/${id}`)        
        return res.data
    } catch(err) {
        console.log(err)
    }
}


export { getAllProducts, getProductById }