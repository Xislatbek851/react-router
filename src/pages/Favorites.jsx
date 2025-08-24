import React from 'react'
import { Link } from 'react-router-dom'
import { FiHeart, FiTrash2, FiShoppingCart, FiArrowLeft } from 'react-icons/fi'
import { useCart } from '../contexts/CartContext'
import { useLanguage } from '../contexts/LanguageContext'

const Favorites = () => {
  const { favorites, removeFromFavorites, addToCart } = useCart()
  const { t } = useLanguage()

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              <FiHeart className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Sevimlilar bo'sh</h2>
              <p className="text-gray-600 mb-6">Hali hech qanday mahsulotni sevimlilarga qo'shmagansiz</p>
              <Link 
                to="/"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FiArrowLeft className="w-5 h-5" />
                <span>Bosh sahifaga qaytish</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4 flex items-center justify-center space-x-3">
              <FiHeart className="w-10 h-10 text-red-500" />
              <span>Sevimli mahsulotlar</span>
            </h1>
            <p className="text-lg text-gray-600">Sizning sevimli mahsulotlaringiz ({favorites.length})</p>
          </div>

          {/* Favorites Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favorites.map((item, index) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Remove from favorites button */}
                  <button
                    onClick={() => removeFromFavorites(item.id)}
                    className="absolute top-3 right-3 w-10 h-10 bg-white/90 hover:bg-red-500 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  >
                    <FiTrash2 className="w-5 h-5 text-red-500 hover:text-white" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-xl font-bold text-amber-600">
                      {item.price}
                    </div>
                  </div>

                  {/* Add to cart button */}
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full px-4 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <FiShoppingCart className="w-5 h-5" />
                    <span>{t('addToCart')}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <Link 
              to="/"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-amber-400 text-amber-600 font-bold rounded-lg hover:bg-amber-400 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <FiArrowLeft className="w-5 h-5" />
              <span>Barcha mahsulotlarni ko'rish</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Favorites
