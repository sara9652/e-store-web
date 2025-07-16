import React from "react";
import productsData from "../productsData.json";

const Sidebar = ({
  products,
  priceRange,
  setPriceRange,
  selectProduct,
  setSelectProduct,
  selectColor,
  setSelectColor,
}) => {
  const colorOption = [
    ...new Set(productsData.products.map((p) => p.color)),
  ].sort();

  const minPrice = Math.min(...productsData.products.map((p) => p.price));
  const maxPrice = Math.max(...productsData.products.map((p) => p.price));

  return (
    <div className=" bg-blue-200 p-4 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto w-44 shadow-md">
      <h1 className="text-xl font-semibold mb-6 text-blue-500">Filter</h1>

      {/* Product Categories select */}
      <div className="mb-6">
        <h3 className="text-blue-500 font-medium mb-3">Available Products</h3>

        {products.map((category, index) => (
          <label
            key={index}
            className="flex items-center ml-3 mb-2 cursor-pointer"
          >
            <input
              onChange={() =>
                setSelectProduct(
                  selectProduct.includes(category)
                    ? selectProduct.filter((p) => p !== category)
                    : [...selectProduct, category]
                )
              }
              value={selectProduct.includes(category)}
              type="checkbox"
              className="mr-2 accent-blue-600"
            />
            {category}
          </label>
        ))}
      </div>
      {/* Price Range */}
      <div className="mb-6">
        <h3 className="text-blue-500 font-medium mb-3">Price Range</h3>
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={priceRange[1]}
          onChange={(e) => setPriceRange([minPrice, parseInt(e.target.value)])}
          className="w-full accent-blue-800"
        />
        <div className="flex justify-between text-sm mt-2 font-medium">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>
      {/* Colors */}
      <div className="mb-6">
        <h3 className="text-blue-500 font-medium mb-3">Select Colors</h3>
        <select
          value={selectColor}
          onChange={(e) => setSelectColor(e.target.value)}
          className="w-full border border-blue-300 rounded-b-md p-1 focus:outline-none focus:ring-2 focus:ring-blue-300">
          <option value="">All</option>
          {colorOption.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <pre>
        
      </pre>
    </div>
  );
};

export default Sidebar;
