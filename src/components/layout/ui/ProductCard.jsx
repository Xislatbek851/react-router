import React from 'react'
import { FiHeart, FiShoppingCart, FiStar } from 'react-icons/fi'
import { useCart } from '../../../contexts/CartContext'
import { useLanguage } from '../../../contexts/LanguageContext'

const ProductCard = ({ product }) => {
  const { addToCart, addToFavorites, removeFromFavorites, isInFavorites } = useCart()
  const { t } = useLanguage()

  const handleAddToCart = () => {
    addToCart(product)
  }

  const handleToggleFavorite = () => {
    if (isInFavorites(product.id)) {
      removeFromFavorites(product.id)
    } else {
      addToFavorites(product)
    }
  }

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Product Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Favorite Button */}
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
            isInFavorites(product.id)
              ? 'bg-red-500 text-white shadow-lg'
              : 'bg-white/90 text-gray-400 hover:bg-red-500 hover:text-white'
          }`}
        >
          <FiHeart className={`w-5 h-5 ${isInFavorites(product.id) ? 'fill-current' : ''}`} />
        </button>

        {/* Rating Badge */}
        <div className="absolute top-3 left-3 bg-amber-400 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
          <FiStar className="w-3 h-3 fill-current" />
          <span>4.8</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors duration-300">
          {product.name}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {product.description}
        </p>
        
        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-amber-600">
            {product.price}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="px-3 py-1 bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg hover:shadow-xl"
          >
            <FiShoppingCart className="w-4 h-4" />
            <span className="hidden sm:inline">{t('addToCart')}</span>
            <span className="sm:hidden">+</span>
          </button>
        </div>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-amber-400 rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </div>
  )
}

export default ProductCard