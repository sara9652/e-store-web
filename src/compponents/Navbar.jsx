import React from 'react'

const Navbar = ({search,setSearch,cartItems,setIsCartOpen}) => {

const totalItems = (cartItems ?? []).reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="border-gray-200 p-4 shadow-md bg-blue-500 sticky top-0 z-50 ">
        <div className='flex justify-around items-center  max-w-5xl mx-auto'>
            <h1 className='text-white text-2xl font-bold'> ˚ ༘⋆🛍️｡˚Saradhi Store </h1>
            <input  
            type="text" 
            value={search} 
            onChange={(e)=> setSearch(e.target.value)}
            placeholder=' 🔍 Search Products . . . .' 
            className='p-3 text-base bg-blue-100 rounded-md w-1/2 focus:outline-none'  />

            <button className='relative text-white text-3xl cursor-pointer ml-5' 
            onClick={()=>setIsCartOpen((prev)=>!prev)}
            >🛒 
              {totalItems>0 && <span className='absolute -top-2 right-2 bg-amber-400 px-2 py-1 rounded-full text-sm' >{totalItems}</span>}
            </button>
        </div>
    </nav>
  )
}

export default Navbar
