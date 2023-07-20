import {nanoid} from 'nanoid';
import { commerce } from "./App";
import { useEffect, useState } from "react";






const Product = (props) => {
    return(
        <div>
              <img src={props.src} className=' object-cover h-44 w-28 md:w-32 lg:h-48 xl:w-48 rounded-md' alt="" />
              <p className='text-xs font-medium tracking-wide my-2'>{props.title}</p>
              <p className='text-xs font-medium tracking-wide my-3 text-gray-400'>£{props.price}</p>
              <button className="text-black hover:text-emerald-500" onMouseDown={props.handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </button>
        </div>
    )
}

export default function App() {

    let [productArray, setProductArray] = useState([]);
    useEffect (() => {
      async function fetchData() {
        const products = await commerce.products.list();
        const pTwo = products.data
        return setProductArray(pTwo)
      }
      fetchData()
 
    }, [])

  function alterCart(item) {
    commerce.cart.retrieve().then((cart) => cart.total_items);
    return commerce.cart.add(item.id, 1)
  }

    return(
     
        <article className=' py-10 flex min-h-screen justify-center px-1 sm:px-44 lg:px-52'>
          {productArray? <main className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-x-40">
            {productArray.map(item => <Product handleClick={() => alterCart(item)} 
            src={item.image.url} title={item.name} price={item.price.formatted_with_code}
            key={nanoid()}/>)}
            </main>: 'loading...'}
        </article>

     
    )
}