import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div key={product.id} className="w-[256px] h-[468px]">
                <img src={product.image} alt="pizza" />
                <h3 className="text-gray-500 font-extrabold text-2xl leading-7">{product.name}</h3>
                <p className="text-gray-400 font-medium text-[13px] leading-[19px] mt-4">
                  {product.description}
                </p>
                <div className="flex items-center gap-7 mt-4">
                  <h3 className="font-bold text-2xl leading-[19px]">{product.price}</h3>
                  <button className="w-32 h-9 bg-yellow-300 text-white rounded-[8px] font-bold text-[13px]">
                    В корзину
                  </button>
                </div>
              </div>
  )
}

export default ProductCard