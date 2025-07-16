import React, { useState } from 'react'
import "./App.css";
import productsData from "./productsData.json"
import Navbar from './compponents/Navbar';
import Sidebar from './compponents/Sidebar';
import ProductCard from './compponents/ProductCard';
import CartSidebar from './compponents/CartSidebar';
const App = () => {

   const [search,setSearch]=useState("");

   const [priceRange,setPriceRange]=useState(
    [Math.min(...productsData.products.map((p)=>p.price)),
      Math.max(...productsData.products.map((p)=>p.price))
    ])

    const[selectColor,setSelectColor]=useState("")

    const [selectProduct,setSelectProduct]=useState([]);


  const products = [...new Set(productsData.products.map((p) => p.brands))].sort();

  // Cart
  const [cartItems,setCartItems]= useState([]);
  const [isCartOpen,setIsCartOpen]=useState(false)

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existingItem=prev.find((item)=>item.id===product.id);
      if(existingItem){
        // update quantity only
        return prev.map((item)=>item.id===product.id?{...item,quantity:item.quantity+1}: item)
      }
      return [...prev,{...product,quantity:1}]
    });
    setIsCartOpen(true);
  };
  const removeFromCart = (id) => {
    setCartItems((prev)=>prev.filter((item) => item.id !== id))
  };
  const updateQuantity = (id,quantity) => {
    if(quantity<=0){
      //removeFromCart
      removeFromCart(id)
    }else{
      setCartItems((prev)=>prev.map((item)=>item.id==id?{...item,quantity}:item))
    }
  };


  
  /* ----------------------------------------------------------------------- */
    const filterProducts=productsData.products.filter((product)=>{

      const matchSearch = product.name.toLowerCase()
      .includes(search.toLowerCase())
      || product.color.toLowerCase().includes(search.toLowerCase());

      const matchProduct = selectProduct.length === 0 || 
        selectProduct.includes(product.brands)
      
      const matchPrice = product.price >= priceRange[0] && product.price <= priceRange[1] ;
      const matchColor = selectColor === "" || selectColor === "All" || product.color === selectColor;
      return matchSearch && matchProduct && matchPrice && matchColor;
    })
  /* ----------------------------------------------------------------------- */
  return (
    <>
     <Navbar 
     search={search} 
     setSearch={setSearch} 
     cartItems={cartItems}
     isCartOpen={isCartOpen}
     setIsCartOpen={setIsCartOpen}
    />
     <div className='flex '>
          <Sidebar 
            selectProduct={selectProduct} 
            setSelectProduct={setSelectProduct }
            products={products} 
            selectColor={selectColor}
            setSelectColor={setSelectColor}
            priceRange={priceRange} 
            setPriceRange={setPriceRange} />
        <div className='flex-1 bg-blue-50'>
           <div className='max-w-4xl mx-auto p-4 '>
            <h1 className='p-4 font-bold'>Products({filterProducts.length})</h1>
                  {filterProducts.length==0?
                  (<p className='text-center text-gray-600 '>No Products Found Matching Your Criteria.</p>)
                  :(<div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-5'>
                    {filterProducts.map((product)=>(
                      <ProductCard key={product.id} product={product} addToCart={addToCart} />
                      
                    ))}
              </div>)}
           </div>
        </div> 
        <CartSidebar 
        cartItems={cartItems}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        /> 
    </div> 
    </>
  )
}

export default App
