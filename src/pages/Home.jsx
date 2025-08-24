import React from 'react'
import { Link } from 'react-router-dom'
import yellow from '../assets/image/yellow-img.png'
import black from '../assets/image/black-img.png'
import minipizza from '../assets/image/mini-piza.png'
import { useLanguage } from '../contexts/LanguageContext'

const newProducts = [
  { id: 1, name: "Карбонара", price: "от 120 ₽", image: minipizza },
  { id: 2, name: "Карбонара", price: "от 120 ₽", image: minipizza },
  { id: 3, name: "Карбонара", price: "от 120 ₽", image: minipizza },
  { id: 4, name: "Карбонара", price: "от 120 ₽", image: minipizza }
]

const Home = () => {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-100">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <img 
              src={yellow} 
              alt="yellow banner" 
              className="w-full max-w-md lg:max-w-lg animate-fade-in"
            />
            <img 
              src={black} 
              alt="black banner" 
              className="w-full max-w-md lg:max-w-lg animate-fade-in"
              style={{ animationDelay: '200ms' }}
            />
          </div>
        </div>
      </section>

      {/* New Products Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Yangi mahsulotlar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Eng so'nggi va mazali taomlarimizni tatib ko'ring
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {newProducts.map((item, index) => (
              <div 
                key={item.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 text-center">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-20 h-20 mx-auto mb-4 object-cover rounded-lg"
                  />
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{item.name}</h3>
                  <p className="font-bold text-amber-500 text-lg">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Kategoriyalar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Turli xil taomlarimizni kashf eting
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Pizza', path: '/pizza', color: 'from-red-400 to-red-600' },
              { name: 'Pasta', path: '/pasta', color: 'from-yellow-400 to-yellow-600' },
              { name: 'Sho\'rvalar', path: '/soups', color: 'from-blue-400 to-blue-600' },
              { name: 'Salatlar', path: '/salads', color: 'from-green-400 to-green-600' },
              { name: 'Ichimliklar', path: '/drinks', color: 'from-purple-400 to-purple-600' }
            ].map((category, index) => (
              <Link
                key={category.name}
                to={category.path}
                className="group block text-center animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${category.color} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105`}>
                  <h3 className="font-bold text-lg">{category.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-amber-400 to-yellow-500 rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hozir buyurtma bering
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Eng mazali taomlarimizni uyingizga yetkazib beramiz
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-amber-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105"
            >
              Aloqa
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
