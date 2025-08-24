import React from 'react'
import { Link } from 'react-router-dom'
import { FiTrash2, FiMinus, FiPlus, FiShoppingBag, FiArrowLeft } from 'react-icons/fi'
import { useCart } from '../contexts/CartContext'
import { useLanguage } from '../contexts/LanguageContext'

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal } = useCart()
  const { t } = useLanguage()

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
              <FiShoppingBag className="w-16 h-16 text-amber-400 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('cartEmpty')}</h2>
              <p className="text-gray-600 mb-6">Savatchangizda hali mahsulot yo'q</p>
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-800 flex items-center space-x-3">
              <FiShoppingBag className="w-8 h-8 text-amber-500" />
              <span>{t('cart')}</span>
              <span className="text-lg text-gray-500">({cartItems.length} mahsulot)</span>
            </h1>
            <button
              onClick={clearCart}
              className="px-4 py-2 text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
            >
              Savatchani tozalash
            </button>
          </div>

          {/* Cart Items */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {cartItems.map((item, index) => (
              <div 
                key={item.id}
                className={`p-6 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-all duration-300 ${
                  index === 0 ? 'animate-slide-in' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg shadow-md"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {item.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="text-lg font-bold text-amber-600">
                      {item.price}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                    >
                      <FiMinus className="w-4 h-4 text-gray-600" />
                    </button>
                    <span className="w-12 text-center text-lg font-semibold text-gray-800">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
                    >
                      <FiPlus className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-all duration-200"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-8 bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-800">Buyurtma xulosasi</h3>
              <div className="text-right">
                <div className="text-2xl font-bold text-amber-600">
                  {cartTotal.toLocaleString()} ₽
                </div>
                <div className="text-sm text-gray-500">Jami to'lov</div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-gray-600">
                <span>Mahsulotlar ({cartItems.length})</span>
                <span>{cartTotal.toLocaleString()} ₽</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Yetkazib berish</span>
                <span className="text-green-600">Bepul</span>
              </div>
              <hr className="border-gray-200" />
              <div className="flex justify-between text-lg font-semibold text-gray-800">
                <span>{t('total')}</span>
                <span>{cartTotal.toLocaleString()} ₽</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="flex-1 px-6 py-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-white font-bold rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                {t('checkout')}
              </button>
              <Link 
                to="/"
                className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-lg hover:border-amber-400 hover:text-amber-600 transition-all duration-300"
              >
                Davom etish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart