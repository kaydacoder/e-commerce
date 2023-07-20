import {Link} from 'react-router-dom';
import { commerce } from "./App";
import React, {useEffect, useState } from "react";
import LoadingComp from './LoadingComp'
import {nanoid} from 'nanoid';

// Create a Commerce instance



const ItemInCart = (props) => {

    // commerce.cart.delete().then((response) => response - 1)

    return(
        <div className='flex mt-3'>
            <div><img className='w-24 h-24 object-cover' src={props.src} alt="" /></div>
            <div className='w-full ps-5'>
                <p className='text-sm font-medium'>{props.title}</p>
                <p className='text-xs my-1'>{props.price}</p>
                <div className='text-xs mt-3'>
                    <button className='px-1 ms-0 rounded mx-1 transition-colors text-red-400 hover:text-red-500 '>-</button>
                    <span>{props.quantity}</span>
                    <button className='px-1 rounded mx-1 transition-colors text-green-400 hover:text-green-500 '>+</button>
                </div>
                <button onClick={() => commerce.cart.remove(props.id).then((response) => response)} 
                className='text-xs mt-2 transition-colors text-red-400 hover:text-red-500'>remove</button>
            </div>
            </div>
    )
}

export default function App() {


    // commerce.cart.retrieve().then((cart) => console.log(cart));

    const [text,setText] = useState(<LoadingComp/>)
    const[subTotal, setSubTotal] = useState(0);
    useEffect(() => {
        async function getData() {
           let dataFirstOne =   await commerce.cart.retrieve();
           let dataFirstTwo =  await dataFirstOne.subtotal;
           let dataFirstThree =  await dataFirstTwo.formatted;
           setSubTotal(dataFirstThree)
        }
        getData();
    },[])

    const[itemsCart, setItemsCart] = useState([]);
    useEffect(() => {
        async function fetchData() {
            let dataOne = await commerce.cart.retrieve();
            let dataTwo = await dataOne.line_items;
            setItemsCart(dataTwo)
        }
        fetchData()   
    },[])


    function clearCart() {
        setText('Your cart is empty')
        return commerce.cart.empty().then((response) => response)

    }

   return (<article className=' py-10 flex justify-center min-h-screen px-1 sm:px-44 lg:px-52'>
       <main>
            <h1 className=" text-center">Your Shopping Cart</h1>
            <div className='mt-8 md:mt-4 ps-10 md:ps-0'>

           { itemsCart.map(item => <ItemInCart key={nanoid()} id={item.id} src={item.image.url} 
           title={item.name} price={item.price.formatted_with_code} quantity={item.quantity}/>)  }

            </div>
            <div className="w-max flex flex-col md:flex-row mt-20">
                <section className=" w-max md:w-full text-start flex items-center "><span>Subtotal: £{subTotal}</span></section>
                <section className=" w-max md:w-full md:flex ms-40 justify-around">
                    <button onClick={() => clearCart()} className="p-2 px-3 mb-10 md:mb-0 block rounded w-max transition-colors bg-red-500 hover:bg-red-700 text-white text-sm md:me-10">EMPTY CART</button>
                    <Link to={'/checkout'}>
                        <button className="p-2 px-3 rounded w-max transition-colors block bg-blue-500 hover:bg-blue-700 text-white text-sm">CHECKOUT</button>
                    </Link>
                </section>
            </div>
       </main>
      
    </article>)
}