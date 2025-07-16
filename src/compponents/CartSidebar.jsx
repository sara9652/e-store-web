import React from 'react'

const CartSidebar = ({cartItems,isCartOpen,setIsCartOpen,updateQuantity,removeFromCart}) => {
    const totalPrice=cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0)
  return (
    <div className={`fixed top-0 right-0 w-60 h-full 
     bg-white shadow-xl z-50 transform transition-transform 
     duration-300  ${isCartOpen?"translate-x-0":"translate-x-full"}`}>
        <div className="p-4 h-full flex flex-col justify-between">
  <div className="overflow-y-auto max-h-[80vh] pr-2">
    <div className='flex items-center justify-between mb-4'>
      <h2 className='font-bold text-blue-500'>Your Cart</h2>
      <button className='cursor-pointer' onClick={() => setIsCartOpen(false)}>✖</button>
    </div>

    {cartItems.length === 0 ? (
      <p className='text-gray-600 text-center mt-10'>Your Cart Is Empty</p>
    ) : (
      <div className='flex flex-col'>
        {cartItems.map((item) => (
          <div key={item.id} className='flex mb-4'>
            <img src={item.image} className='w-16 h-16 object-contain mr-4' />
            <div className='flex-1'>
              <h3 className='text-sm font-semibold'>{item.name}</h3>
              <p className='text-xs text-gray-500'>
                ₹{item.price} x {item.quantity}
              </p>
              <div className='flex items-center mt-1'>
                <button
                  className='px-2 py-1 bg-blue-200 rounded'
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className='mx-2'>{item.quantity}</span>
                <button
                  className='px-2 py-1 bg-blue-200 rounded'
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className='pl-3 text-red-600 text-xl font-bold cursor-pointer'
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>

  {/* Footer (total + checkout) */}
  <div className='border-t pt-4'>
    <p className='text-lg font-semibold'>Total: ₹{totalPrice.toFixed(2)}</p>
    <button
      className='w-full bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-800 transition mt-4'
      disabled={cartItems.length === 0}
    >
      Proceed to Checkout
    </button>
  </div>
</div>

    </div>
  )
}

export default CartSidebar
