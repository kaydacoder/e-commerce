import { Link } from "react-router-dom";
import { commerce } from "./App";
import { useState, useEffect } from "react";
import {nanoid} from 'nanoid';


function LI(props) {
    const {title, quantity, price} = props

    return(
        <div className="flex justify-between">
        <div className=" flex items-end text-xs w-full my-3">
            <div className=" w-full"><p>{title}</p> <p className="text-gray-500 mt-1"> Quantity: {quantity}</p></div>
            <div className="text-end">£{price}</div>
        </div>
        </div>
    )
}

const customerDetails = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    shippingCountry: '',
    shippingOptions: '',
    cardNumber: '',
    MMYY: '',
    CVC: ''
  }







function PageZero() {

   
    return(
        <article>
              <div className="flex justify-between">
                        <input  className=" outline-none p-2 text-xs rounded" required placeholder="First Name" type="text" />
                        <input  className=" outline-none p-2 text-xs rounded" required placeholder="Last Name" type="text" />
                    </div>
                    <div className="flex flex-col">
                        <input className=" outline-none p-2 text-xs rounded my-3" required placeholder="Email" type="email" />
                        <input className=" outline-none p-2 text-xs rounded" required placeholder="Address" type="text" />  
                    </div>
                    <div className="flex justify-between my-3">
                        <input className=" outline-none p-2 text-xs rounded" required placeholder="City" type="text" />
                        <input className=" outline-none p-2 text-xs rounded" required placeholder="ZIP/ Postal Code" type="text" />
                    </div>
                    <div className="flex justify-between my-3">
                       <section>
                        <label className=" text-xs block text-gray-400" htmlFor="sc">Shipping Country:</label>
                            <select className=" outline-none p-2 py-1 text-xs rounded mt-1" name="sc" id="sc">
                                <option value="united_kingdom">United Kingdom</option>
                                <option value="united_states">United States</option>
                                <option value="irish">Irish</option>
                                <option value="spain">Spain</option>
                                <option value="germany">Germany</option>
                                <option value="italy">Italy</option>
                                <option value="morocco">Morocco</option>
                            </select>
                       </section>
                    </div>
                    <div className="flex justify-between my-3">
                    <section>
                        <label className=" text-xs block text-gray-400" htmlFor="sc">Shipping Options:</label>
                            <select className=" outline-none p-2 py-1 text-xs rounded mt-1" name="sc" id="sc">
                                <option value="united_kingdom">International</option>
                            </select>
                       </section>
                    </div>
        </article>
    )
}

function PageOne() {
    
    const[itemsCart, setItemsCart] = useState([]);
    const[total, setTotal] = useState(0);
    useEffect(() => {
        async function fetchData() {
            let dataOne = await commerce.cart.retrieve();
            let dataTwo = await dataOne.line_items;
            setItemsCart(dataTwo)
            setTotal(dataOne.subtotal.formatted_with_symbol)
        }
        fetchData()   
    },[])
    

    return(
        <article className="my-5">
             { itemsCart.map((item) => <LI key={nanoid()} title ={item.name} quantity={item.quantity} price={item.line_total.formatted} />)  }
            <div className=" w-full flex items-end text-sm mt-9 pb-3 border-b border-b-gray-400">
                <p className=" w-full font-medium">Total</p>
                <p>{total}</p>
            </div>  

            <p className=" flex text-sm mt-8">Payment method</p> 
            <input className=" bg-transparent outline-none text-xs p-2"placeholder="Card number" type="text" max={16} maxLength={16} name="cardNum" id="cardNum" />  
            <div className=" flex">
            <input className=" bg-transparent outline-none text-xs p-2"placeholder="MM/YY" type="text"max={5} maxLength={5} name="cardNum" id="cardNum" />  
            <input className=" bg-transparent outline-none text-xs p-2"placeholder="CVC" type="text"max={3} maxLength={3} name="cardNum" id="cardNum" />  
            </div>
        </article>
    )
}

export default function App() {

    const [pageNum, setPageNum] = useState(0)
  
    return (
        <div className=' py-10 flex justify-center min-h-screen px-1 sm:px-44 lg:px-52'>
            <div className="w-96 p-6 h-max shadow-lg "  style={{backgroundColor: '#C1DCDC'}}>
                <h1 className=" text-sm text-center font-medium tracking-wide">Checkout</h1>
                <div className=" flex justify-between mt-4">
                    {pageNum !== 2 && <p className={` text-xs ${pageNum === 1? 'opacity-25' : null}`}><span className="p-2 py-0 rounded-full bg-black text-white me-1">1</span>Shipping address</p>}
                    {pageNum !== 2 && <p className={` text-xs ${pageNum === 0? 'opacity-25' : null}`}><span className="p-2 py-0 rounded-full bg-black text-white me-1">2</span>Payment details</p>}
                </div>

                {pageNum !== 2 &&<p className=" text-sm mt-8 transition-all">{pageNum === 0? 'Shipping address': 'Order summary'}</p>}

                <form className="mt-4 transition-all" action="" onSubmit={(e) => e.preventDefault()}>
                  
                {pageNum === 0 && <PageZero/>}
                {pageNum === 1 && <PageOne/>}
                {pageNum === 2 && <div>
                    <p className=" text-center text-xs leading-5"><span className=" text-center text-sm">Your confirmation order is:</span> <br /> {nanoid()}</p>
                    </div>}


                    
                    <div className={` flex ${pageNum < 2? 'justify-between': 'justify-center'}`}>
                    {pageNum < 2?
                    <>
                       {pageNum === 0?  <Link to={'/cart'}>
                            <button className="text-xs p-2 rounded transition-colors  text-white hover:bg-rose-500 hover:border-rose-500 bg-rose-600 border border-rose-600">BACK TO CART</button>
                        </Link>:
                         <button onClick={() => setPageNum(p => p - 1)} className="text-xs p-2 rounded transition-colors  text-white hover:bg-rose-500 hover:border-rose-500 bg-rose-600 border border-rose-600">BACK</button>
                        }
                        <button  onClick={() => setPageNum(p => p === 2 ? (p = 2) : (p + 1))} 
                        className="text-xs p-2 rounded transition-colors text-white hover:bg-blue-500 hover:border-blue-500 bg-blue-600 border border-blue-600">NEXT</button>
                        </>: 
                        <Link className="mt-4" to={'/'} onClick={() => commerce.cart.empty().then((response) => response)}>
                        <button className="text-xs p-2 rounded transition-colors  text-white hover:bg-sky-500 hover:border-sky-500 bg-sky-600 border border-sky-600">HOME</button>
                        </Link>
                     
                    }
                    </div> 
                </form>
            </div>
        </div>
    )
}