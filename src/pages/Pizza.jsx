
import React from 'react'
import { pizzaData } from '../assets/data'
import ProductCard from '../components/layout/ui/ProductCard'
import { useLanguage } from '../contexts/LanguageContext'

const Pizza = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100 pt-24 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-amber-600 mb-4">
              {t('pizza')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Eng mazali va sifatli pitsalarimizni tatib ko'ring
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {pizzaData.map((item, index) => (
              <div 
                key={item.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={item} />
              </div>
            ))}
          </div>

          {/* Bottom Info */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Pitsa haqida
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Bizning pitsalarimiz eng yaxshi ingredientlar va an'anaviy retseptlar asosida tayyorlanadi. 
                Har bir pitsa maxsus pishirish usuli bilan taqdim etiladi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pizza
