import React, {useState, useEffect} from'react'
import Header from '../components/Header'
import { fetchCartItems, fetchCartItemsId } from '../utils/users'
import { ProductCardCart } from '../components/ProductCardCart'

export const Cart = () => {
    const [cartItems, setCartItems] = useState([])
    useEffect( ()=> {
        (async() => {
            try {
                const items = await fetchCartItems()
                console.log(items)
                setCartItems(items)
            } catch(err) {
                console.log(err)
            }
            
        })()
        
    }, [])
  return (
    <div>
    <Header />
      <section>
              {cartItems.map(prod => (<ProductCardCart key={prod.id} product={prod} /> ))}
      </section>
    </div>
  )
}
