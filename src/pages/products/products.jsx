import React from 'react'
import ProductCard from '../../components/productCard/productCard'

const Products = () => {
  return (
    <div className='w-full h-full pt-14 overflow-hidden'>
        <div className="w-full h-full overflow-y-scroll no-scrollbar p-5 flex gap-2 flex-wrap justify-between items-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default Products