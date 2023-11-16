import React , {useEffect, useState}  from 'react'
import { useNavigate } from 'react-router-dom'
import './../styles/productCard.css'
import { checkIfUserLoggedIn , addItemToUserCart, checkIfInCart} from '../utils/users'



export const ProductCardCart = (prod) => {
    const navigate = useNavigate()
    const [inCart, setInCart] = useState(false)
    const { name,id,  price, imageUrl, category} = prod.product
    const handleClick = (e) => {
        console.log(id)
    }
    useEffect(() => {
      (async () => {
        const isIncart = await checkIfInCart(id)
        setInCart(isIncart)
      })()
    }, inCart)
    console.log(inCart)
  return (
    <div>
                <div className="product">
          <img src={imageUrl} alt="Product 8" />
          <p>{name}</p>
          <p>{price}</p>
          <button onClick={(e)=> handleClick()}>Remove</button>
        </div>

    </div>
  )
}
