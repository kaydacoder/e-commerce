import unsplashOne from "./assets/unsplash_cLaaxa4DSnc-removebg-preview 1.png";
import arrowOne from "./assets/Vector-186.png";
import arrowTwo from "./assets/Vector-187.png";
import imageOne from "./assets/stephanie-harvey-N9lmtlOuaDM-unsplash.jpg";
import imageTwo from "./assets/stephanie-harvey-T0inbt7nRME-unsplash.jpg";
import imageThree from "./assets/nicolas-hirajeta-N7oHWhK9UDM-unsplash.jpg";
import catImgOne from './assets/jessica-arends-yzPWspWSDm0-unsplash.jpg';
import catImgTwo from './assets/lakeisha-bennett-WzP3YnV9T-U-unsplash.jpg';
import catImgThree from './assets/margarita-terekhova-j3pZ-RVk7ZI-unsplash.jpg';
import {Link} from 'react-router-dom'

export default function name() {
    return(
        <>
        <article className='flex justify-center py-10 px-1 sm:px-44 lg:px-52'>
        <section  className='w-max xl:w-full p-10 px-3  md:px-10 rounded-md flex overflow-hidden' style={{backgroundColor: '#C1DCDC'}}>
          <div className=' w-full'>
            <h1 className='font-bold text-5xl'>Buy Your <br/> Dream Plants</h1>
            <div className='my-6'>
              <section className='inline-block '><h3 className='text-2xl font-medium'>50+</h3><p className='font-medium text-xs'>Plant Species</p></section>
              <span className=' md:inline-block border-s border-gray-500 hidden  h-12 mx-6'></span>
              <section className='inline-block mx-2'><h3 className='text-2xl font-medium'>{475 + Math.floor(Math.random()* 1000)}+</h3><p className='font-medium text-xs'>Customers</p></section>
            </div>
            <div>
              <div className=' bg-white rounded-md p-2 flex w-max'>
                <input className='md:w-72 w-56 text-sm font-medium outline-none' placeholder='What are you looking for?' type="text" />
                <button className=' bg-gray-200 hover:bg-gray-400 transition-colors p-2 rounded-md' type="submit">
                  <Link to={'store'}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className=' w-full hidden xl:flex'>
            <div className='flex items-end'><img src={arrowOne} className='w-32' alt="" /></div>
            <div className='bg-black h-72 w-80 relative top-10 rounded-full rounded-br-none'>
              <img src={unsplashOne} className=' h-96 relative bottom-20 left-5 object-cover' alt="" />
            </div>
            <div><img src={arrowTwo} className='h-32' alt="" /></div>
          </div>
        </section>
      </article>

      <article className=' lg:flex py-10 px-1 sm:px-36 lg:px-44 xl:px-52'>
        <div className='w-52 pe-10 pb-10 lg:pb-0 '>
          <h4 className=' font-bold tracking-wide text-xl'>Best Selling Plants</h4>
          <p className='text-gray-400 text-xs my-3'>Easiest way to healthy life by buying your favourite plants </p>
          <button className=' bg-gray-300 hover:bg-gray-400 transition-colors p-2 rounded'>
            <Link className="flex items-center" to={'store'}>
              <span className='text-xs me-2 font-medium tracking-wide'>See more</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </button>
        </div>
        <section className='w-full grid grid-cols-2 sm:grid-cols-3 lg:flex justify-around'>
            <div>
              <img src={imageOne} className=' object-cover h-60 w-28 lg:w-32 xl:h-64 xl:w-48 rounded-md' alt="" />
              <p className='text-xs font-medium tracking-wide my-2'>Artificial Plants</p>
              <p className='text-xs font-medium tracking-wide my-2 text-gray-400'>£150.00</p>
            </div>

            <div>
              <img src={imageTwo} className=' object-cover h-60 w-28 lg:w-32 xl:h-64 xl:w-48 rounded-md' alt="" />
              <p className='text-xs font-medium tracking-wide my-2'>Natural Plants</p>
              <p className='text-xs font-medium tracking-wide my-2 text-gray-400'>£40.00</p>
            </div>

            <div>
              <img src={imageThree} className=' object-cover h-60 w-28 lg:w-32 xl:h-64 xl:w-48 rounded-md' alt="" />
              <p className='text-xs font-medium tracking-wide my-2'>Artificial Plants</p>
              <p className='text-xs font-medium tracking-wide my-2 text-gray-400'>£50.00</p>
            </div>
        </section>
      </article>

      <article className='py-10 mt-20 px-10 sm:px-44 xl:px-52'>
        <div className=' text-center'>
          <h2 className=' text-xl font-bold'>About us</h2>
          <p className='mt-2 text-gray-400 text-xs font-medium '>Order now and appreciate the beauty of nature</p>
        </div>
        <section className='flex mt-10 justify-around'>
          <div className='w-max px-5'>
            <article className='flex justify-center'>
              <div className=' bg-gray-200 w-max p-3 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                </svg>
              </div>
            </article>
          
            <p className='text-sm font-semibold text-center my-3'>Large Assortment</p>
            <p className=' text-gray-400 text-xs font-medium text-center '>we offer many different types of products with fewer variations in each category.</p>
          </div>
          <div className='w-max px-5'>
            <article className='flex justify-center'>
              <div className=' bg-gray-200 w-max p-3 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                </svg>
              </div>
            </article>
          
            <p className='text-sm font-semibold text-center my-3'>Fast & Free Shipping</p>
            <p className=' text-gray-400 text-xs font-medium text-center '>4-day or less delivery time, free shipping and an expedited delivery option.</p>
          </div>
          <div className='w-max px-5'>
            <article className='flex justify-center'>
              <div className=' bg-gray-200 w-max p-3 rounded-full'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
            </article>
          
            <p className='text-sm font-semibold text-center my-3'>24/7 Support</p>
            <p className=' text-gray-400 text-xs font-medium text-center '>answers to any business related inquiry 24/7 and in real-time.</p>
          </div>
        </section>
      </article>
  
  
      <article className='py-10 mt-20'>
        <div className=' text-center px-10 sm:px-52'>
          <h2 className=' text-xl font-bold'>Categories</h2>
          <p className='mt-2 text-gray-400 text-xs font-medium '>Find what you are looking for</p>
        </div>
        <section className='mt-20 py-10 px-1 sm:px-10 md:px-36 lg:px-44 xl:px-52 flex justify-center sm:justify-between lg:justify-around' style={{backgroundColor: '#C1DCDC'}}>
          <div className=' relative bottom-20 hidden sm:block'>
            <div className=' w-max'>
              <img className=' w-36 h-64 lg:w-44 lg:h-72 xl:w-52 xl:h-80 2xl:w-64 2xl:h-96 object-cover rounded-xl' src={catImgThree} alt="" />
              <p className='text-center mt-2 text-sm font-medium'>Natural Plants</p>
            </div>
          </div>

          <div>
            <div className=' 2xl:w-max'>
              <img className='w-36 h-64 lg:w-44 lg:h-72 xl:w-52 xl:h-80 2xl:w-64 2xl:h-96 object-cover rounded-xl' src={catImgOne} alt="" />
              <p className='text-center mt-2 text-sm font-medium'>Plant Accessories</p>
            </div>
            <p className=' text-xs text-gray-400 text-center 2xl:w-64 xl:w-52 lg:w-44 w-36 my-2'>Horem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className=' flex justify-center mt-4'>
              <button className=' bg-white hover:bg-gray-100 transition-colors p-2 rounded'>
              <Link className="flex items-center" to={'store'}>
                <span className='text-xs me-2 font-medium tracking-wide'>Explore</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </Link>
            </button>
            </div>
          </div>

          <div className=' relative bottom-20 hidden sm:block'>
            <div className=' w-max'>
              <img className='w-36 h-64 lg:w-44 lg:h-72 xl:w-52 xl:h-80 2xl:w-64 2xl:h-96 object-cover rounded-xl' src={catImgTwo} alt="" />
              <p className='text-center mt-2 text-sm font-medium'>Artificial Plants</p>
            </div>
          </div>
        </section>
      </article>
        </>
    )
}