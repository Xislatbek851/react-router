import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/image/logo.svg'
import Icon from '../../assets/image/icon.svg'
import { useLanguage } from '../../contexts/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <img src={Logo} alt="Logo" className="h-12 mb-4" />
              <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                Eng mazali va sifatli taomlarimiz bilan tanishing. 
                Biz sizning ta'mingizni qondirish uchun har kuni ishlaymiz.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-amber-400">Tezkor havolalar</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/pizza" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Pizza</Link></li>
                <li><Link to="/pasta" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Pasta</Link></li>
                <li><Link to="/soups" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Sho'rvalar</Link></li>
                <li><Link to="/salads" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Salatlar</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-amber-400">Aloqa</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <p>📞 8 499 391-84-49</p>
                <p>📍 Москва ул. Проспект Вернадского 86В</p>
                <p>🕒 24/7 ochiq</p>
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="border-t border-gray-700 pt-8 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold mb-4">
                {t('orderCall')}
              </h3>
              <p className="text-gray-300 text-sm">
                Savollaringiz bormi? Biz sizga yordam berishdan xursand bo'lamiz
              </p>
            </div>

            {/* Social Media Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <button
                  key={index}
                  className="w-12 h-12 border border-gray-600 rounded-xl flex items-center justify-center hover:border-amber-400 hover:bg-amber-400/10 transition-all duration-300"
                >
                  <img src={Icon} alt={`Social ${index}`} className="w-6 h-6" />
                </button>
              ))}
              <button className="px-6 py-3 border border-amber-400 rounded-xl text-amber-400 hover:bg-amber-400 hover:text-white transition-all duration-300 font-medium">
                Bizga yozing
              </button>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <p className="text-gray-400 text-sm">
                  YaBao © 2024. Barcha huquqlar himoyalangan
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <Link to="#" className="hover:text-amber-400 transition-colors duration-200">YouTube</Link>
                <Link to="#" className="hover:text-amber-400 transition-colors duration-200">Facebook</Link>
                <Link to="#" className="hover:text-amber-400 transition-colors duration-200">Instagram</Link>
                <Link to="#" className="hover:text-amber-400 transition-colors duration-200">ВКонтакте</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer