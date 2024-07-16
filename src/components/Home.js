import React from 'react'
import { useCart } from '../context/Context';
import SIngleProduct from './SIngleProduct';
const Home = () => {
  const { state, dispatch } = useCart();
  const { cart, Products } = state;;
  return (
    <div style={{display:"flex"}}>
      <div style={{display:"flex",width:"78%",padding:"20px",flexWrap: "wrap",justify:"space-around"}}>
        {Products.map((prod) =>{
          return <SIngleProduct prod={prod} key={prod.id}/>
        })}
      </div>
      
    </div>
  )
}

export default Home