import { useEffect, useState } from 'react'
import './index.css'
import Home from "./Home";
import Store from "./Store";
import Cart from "./Cart";
import CheckOut from "./CheckOut";
import { Outlet, createBrowserRouter, createRoutesFromElements, RouterProvider, Route, NavLink, Link} from "react-router-dom";

// bg-gray-200 hover:bg-gray-400 transition-colors

import Commerce from '@chec/commerce.js';



// Create a Commerce instance
export let commerce = new Commerce('pk_test_53313b9c96b4e8e47a3c69999f12191eb78d114672fdf', true);
// console.log(commerce)


let cartChecker = commerce.cart.retrieve()


function Layout() {

  const [isCart, setIsCart] =useState(false);

  useEffect(() => {
    async function getData() {
      let dataOne = await commerce.cart.retrieve()
      let dataTwo = await dataOne.total_items
      return setIsCart(dataTwo)
    }
    getData();
    commerce.cart.retrieve().then((cart) => cart.total_items)
    
  }, [cartChecker])

  return (
    
    <div className='Poppins w-screen overflow-x-hidden'>
      <nav className='md:flex items-center  p-10 px-20 '>
        <div className='Montserrat font-semibold md:w-max w-full text-center md:text-start text-lime-600'><Link to={'/'}><span>GREENMIND</span></Link></div>
        <div className=' w-full flex  my-10 md:my-0 justify-center'>
          <ul className='flex'>
            <li className='mx-6 text-sm font-medium'><NavLink  className={({isActive}) => isActive? 'text-black': 'text-gray-400'} to={'/'}>Home</NavLink> </li>
            <li className='mx-6 text-sm font-medium'><NavLink  className={({isActive}) => isActive? 'text-black': 'text-gray-400'} to={'store'}>Store</NavLink></li>
          </ul>
        </div>
        <div className=' w-full text-center  md:w-96 xl:w-72 md:text-start'>
          <NavLink className={({isActive}) => isActive? `hidden`: `inline-block`} to={'cart'}>
          <span className="relative z-10 left-9 bottom-2 sm:left-11 sm:bottom-2 md:left-6 md:top-2 md:bottom-4  md:flex bg-emerald-600 p-1 py-0 pt-0 rounded-full h-max w-max">
            <span className={`relative rounded-full p-0 m-0 h-max w-max text-white inline-flex`} style={{fontSize: '9px'}}>{isCart}</span>
          </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}  className={`inline-block mx-2 sm:mx-4 w-4 h-4 stroke-black`}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
          </NavLink>
        </div>
      </nav>
        
      <Outlet />
      <footer className=' px-2 sm:px-32 xl:px-52 py-10 ' style={{backgroundColor: '#C1DCDC'}}>
        <section className='  lg:flex'>
          <div className='w-full'>
            <div className='Montserrat font-semibold w-max text-lime-600'><span>GREENMIND</span></div>
            <p className='text-gray-500 text-xs font-medium my-6 lg:my-4'>We help you find your dream plant</p>
            <div className='flex my-4'>
              <section>
                <svg xmlns="http://www.w3.org/2000/svg"  className="bi bi-instagram w-4 h-4 fill-gray-500 cursor-pointer hover:fill-gray-700" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </section>

              <section className='mx-2'>
                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-twitter w-4 h-4 fill-gray-500 cursor-pointer hover:fill-gray-700" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </section>

              <section>
                <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-tiktok w-4 h-4 fill-gray-500 cursor-pointer hover:fill-gray-700" viewBox="0 0 16 16">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                </svg>
              </section>

            </div>
          </div>
          <div className='w-full flex justify-between xl:justify-around'>
            <article>
              <p className='text-xs font-semibold my-4 cursor-pointer hover:text-gray-700' >Information</p>
              <ul>
                <li className='text-xs text-gray-500 cursor-pointer hover:text-gray-600'>About</li>
                <li className='text-xs text-gray-500 my-3 cursor-pointer hover:text-gray-600'>Product</li>
                <li className='text-xs text-gray-500 cursor-pointer hover:text-gray-600'>Blog</li>
              </ul>
            </article>

            <article>
              <p className='text-xs font-semibold my-4 cursor-pointer hover:text-gray-700'>Company</p>
              <ul>
                <li className='text-xs text-gray-500 cursor-pointer hover:text-gray-600'>Community</li>
                <li className='text-xs text-gray-500 my-3 cursor-pointer hover:text-gray-600'>Career</li>
                <li className='text-xs text-gray-500 cursor-pointer hover:text-gray-600'>Our story</li>
              </ul>
            </article>

            <article>
              <p className='text-xs font-semibold my-4 cursor-pointer hover:text-gray-700'>Contact</p>
              <ul>
                <li className='text-xs text-gray-500 cursor-pointer hover:text-gray-600'>Getting Started</li>
                <li className='text-xs text-gray-500 my-3 cursor-pointer hover:text-gray-600'>Pricing</li>
                <li className='text-xs text-gray-500 cursor-pointer hover:text-gray-600'>Resources</li>
              </ul>
            </article>
          </div>
        </section>
        <p className='text-gray-400 text-xs font-medium lg:mt-0 mt-6'> 2023 all Right Reserved Term of use GREENMIND</p>
      </footer>
    </div>
   
  )
}

function BackToHomeLink() {
  return(
    <div className=' min-h-screen flex justify-center'>
    <Link to={'/'} className='text-sm tracking-wide transition-colors text-green-500 hover:text-green-700'>Back To Home Page</Link>
    </div>
  )
}

function SomeThingWentWrong() {
  return(
    <section className=' min-h-screen'>
      <p className=' text-center text-sm text-gray-400 mb-6'>Something went wrong</p>
      <div className=' flex justify-center'>
    <Link to={'/'} className='text-sm tracking-wide transition-colors text-green-500 hover:text-green-700'>Back To Home Page</Link>
    </div>
    </section>
    
  )
}

const routes = createBrowserRouter(createRoutesFromElements(
<Route path='/'  element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='store' element={<Store/>}  errorElement={<SomeThingWentWrong/>}/>
  <Route path='cart' element={<Cart/>} errorElement={<SomeThingWentWrong/>}/>
  <Route path='checkout' element={<CheckOut/>} errorElement={<SomeThingWentWrong/>}/>
  <Route path=':id' element={<BackToHomeLink/>}/>
</Route>
)
)

export default function App() {
  return (<RouterProvider router={routes}/>)
}
