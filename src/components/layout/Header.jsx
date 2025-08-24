import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiHeart, FiMenu, FiX, FiGlobe, FiPhone } from 'react-icons/fi'
import logo from '../../assets/image/logo.svg'
import { useLanguage } from '../../contexts/LanguageContext'
import { useCart } from '../../contexts/CartContext'

const Header = () => {
  const { t, currentLanguage, changeLanguage } = useLanguage()
  const { cartCount } = useCart()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const languages = [
    { code: 'uz', name: 'O\'zbek', flag: '🇺🇿' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' }
  ]

  const navItems = [
    { path: '/', label: 'home' },
    { path: '/pizza', label: 'pizza' },
    { path: '/pasta', label: 'pasta' },
    { path: '/soups', label: 'soups' },
    { path: '/salads', label: 'salads' },
    { path: '/drinks', label: 'drinks' },
    { path: '/dessert', label: 'dessert' },
    { path: '/antipasti', label: 'antipasti' },
    { path: '/promotions', label: 'promotions' },
    { path: '/contact', label: 'contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white'
    }`}>
      <nav className='container mx-auto px-4 lg:px-6'>
        {/* Top section with logo, phone, and language */}
        <div className='flex justify-between items-center py-4'>
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-110"
            />
          </Link>

          {/* Phone and Language - Hidden on mobile */}
          <div className='hidden md:flex items-center space-x-6'>
            <button className='px-6 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-sm font-bold rounded-full hover:from-amber-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'>
              {t('orderCall')}
            </button>
            <a 
              className='text-2xl font-bold text-amber-500 hover:text-amber-600 transition-colors duration-300 flex items-center space-x-2' 
              href="tel:84993915275"
            >
              <FiPhone className="text-amber-500" />
              <span>{t('phoneNumber')}</span>
            </a>
            
            {/* Language Selector */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-gray-200 hover:border-amber-400 transition-colors duration-300">
                <FiGlobe className="text-gray-600" />
                <span className="text-sm font-medium text-gray-700">
                  {languages.find(lang => lang.code === currentLanguage)?.flag}
                </span>
              </button>
              <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`w-full text-left px-4 py-3 hover:bg-amber-50 transition-colors duration-200 flex items-center space-x-3 ${
                      currentLanguage === lang.code ? 'bg-amber-100 text-amber-700' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="font-medium">{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className='md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200'
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6 text-gray-700" />
            ) : (
              <FiMenu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Navigation and Cart section */}
        <div className='flex justify-between items-center py-4 border-t border-gray-100'>
          {/* Navigation Menu */}
          <nav className='hidden lg:flex space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className='text-gray-700 hover:text-amber-500 font-medium transition-colors duration-300 relative group'
              >
                {t(item.label)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Cart and Favorites - Desktop */}
          <div className='hidden md:flex items-center space-x-4'>
            <Link 
              to="/favorites" 
              className='relative p-3 rounded-full hover:bg-amber-50 transition-colors duration-300 group'
            >
              <FiHeart className="w-6 h-6 text-gray-600 group-hover:text-amber-500 transition-colors duration-300" />
            </Link>
            
            <Link 
              to="/cart" 
              className='relative p-3 rounded-full hover:bg-amber-50 transition-colors duration-300 group'
            >
              <FiShoppingCart className="w-6 h-6 text-gray-600 group-hover:text-amber-500 transition-colors duration-300" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </Link>

            <button className='px-6 py-2 bg-gray-200 text-gray-700 text-sm font-bold rounded-full hover:bg-gray-300 transition-colors duration-300'>
              {t('exit')}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        }`}>
          <div className='py-4 space-y-4 border-t border-gray-100'>
            {/* Mobile Phone and Language */}
            <div className='flex flex-col space-y-3'>
              <button className='w-full px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-white text-sm font-bold rounded-lg hover:from-amber-500 hover:to-yellow-600 transition-all duration-300'>
                {t('orderCall')}
              </button>
              <a 
                className='text-lg font-bold text-amber-500 hover:text-amber-600 transition-colors duration-300 text-center' 
                href="tel:84993915275"
              >
                {t('phoneNumber')}
              </a>
              
              {/* Mobile Language Selector */}
              <div className="flex justify-center space-x-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      currentLanguage === lang.code 
                        ? 'bg-amber-100 text-amber-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {lang.flag} {lang.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Navigation */}
            <nav className='flex flex-col space-y-2'>
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className='px-4 py-3 text-gray-700 hover:text-amber-500 hover:bg-amber-50 rounded-lg font-medium transition-all duration-300'
                >
                  {t(item.label)}
                </Link>
              ))}
            </nav>

            {/* Mobile Cart and Favorites */}
            <div className='flex justify-center space-x-4 pt-4 border-t border-gray-100'>
              <Link 
                to="/favorites" 
                onClick={closeMobileMenu}
                className='flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors duration-300'
              >
                <FiHeart className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{t('favorites')}</span>
              </Link>
              
              <Link 
                to="/cart" 
                onClick={closeMobileMenu}
                className='relative flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-amber-50 transition-colors duration-300'
              >
                <FiShoppingCart className="w-5 h-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">{t('cart')}</span>
                {cartCount > 0 && (
                  <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>

            <button className='w-full px-4 py-2 bg-gray-200 text-gray-700 text-sm font-bold rounded-lg hover:bg-gray-300 transition-colors duration-300'>
              {t('exit')}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header