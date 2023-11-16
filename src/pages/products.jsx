import React , { useState, useEffect } from 'react'
import { getAllProducts } from '../utils/products'
import { ProductCard } from '../components/productCard'
import './../styles/products.css'
import Header from '../components/Header'


export const Products =  () => {
    const [prods, setProds ] = useState([])
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllProducts();
            setProds(data);
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchData(); // Call the function to fetch data when the component mounts
      }, []);
      
  return (
    <div >
    <Header />
      <section>
        {prods.map(prod => (<ProductCard key={prod.id} product={prod} />))}
        
      </section>
    </div>
  )
}