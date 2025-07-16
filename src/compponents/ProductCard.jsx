import React from 'react'

const ProductCard = ({product,addToCart}) => {
  return (
    <div className='bg-white shadow hover:shadow-xl transition-all  duration-200  p-4 '>
      <img src={product.image} alt={product.name} 
      className='w-full h-72 object-contain mb-1' />
      <h2 className='text-lg font-semibold text-blue-600'>{product.name}</h2>
      <p className='text-gray-400 mb-1'>{product.color}</p>
        <div className='flex items-center justify-between'>
          <div>
            <p className='font-bold text-blue-600 text-xl'>₹{product.price}</p>
            <p className='text-sm text-gray-400 line-through'>₹2999</p>
          </div>
          <button onClick={()=>addToCart(product)} className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition-all duration-200'> Add to cart</button>
        </div>
    </div>
  )
}

export default ProductCard
