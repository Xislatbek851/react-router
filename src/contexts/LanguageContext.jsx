import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('uz');

  const translations = {
    uz: {
      // Header
      orderCall: 'Qo\'ng\'iroq qilish',
      home: 'Bosh sahifa',
      pizza: 'Pitsa',
      pasta: 'Pasta',
      soups: 'Sho\'rvalar',
      salads: 'Salatlar',
      drinks: 'Ichimliklar',
      dessert: 'Shirinliklar',
      antipasti: 'Antipasti',
      promotions: 'Aksiyalar',
      contact: 'Aloqa',
      cart: 'Savatcha',
      favorites: 'Sevimlilar',
      exit: 'Chiqish',
      
      // Cart
      cartEmpty: 'Savatcha bo\'sh',
      remove: 'O\'chirish',
      total: 'Jami',
      checkout: 'Buyurtma berish',
      
      // Common
      addToCart: 'Savatchaga qo\'shish',
      addToFavorites: 'Sevimlilarga qo\'shish',
      price: 'Narxi',
      description: 'Tavsif',
      
      // Phone
      phoneNumber: '8 499 391-52-75'
    },
    en: {
      // Header
      orderCall: 'Order Call',
      home: 'Home',
      pizza: 'Pizza',
      pasta: 'Pasta',
      soups: 'Soups',
      salads: 'Salads',
      drinks: 'Drinks',
      dessert: 'Dessert',
      antipasti: 'Antipasti',
      promotions: 'Promotions',
      contact: 'Contact',
      cart: 'Cart',
      favorites: 'Favorites',
      exit: 'Exit',
      
      // Cart
      cartEmpty: 'Cart is empty',
      remove: 'Remove',
      total: 'Total',
      checkout: 'Checkout',
      
      // Common
      addToCart: 'Add to Cart',
      addToFavorites: 'Add to Favorites',
      price: 'Price',
      description: 'Description',
      
      // Phone
      phoneNumber: '8 499 391-52-75'
    },
    ru: {
      // Header
      orderCall: 'Заказать звонок',
      home: 'Главная',
      pizza: 'Пицца',
      pasta: 'Паста',
      soups: 'Супы',
      salads: 'Салаты',
      drinks: 'Напитки',
      dessert: 'Десерт',
      antipasti: 'Антипасти',
      promotions: 'Акции',
      contact: 'Контакты',
      cart: 'Корзина',
      favorites: 'Избранное',
      exit: 'Выход',
      
      // Cart
      cartEmpty: 'Корзина пуста',
      remove: 'Удалить',
      total: 'Итого',
      checkout: 'Оформить заказ',
      
      // Common
      addToCart: 'Добавить в корзину',
      addToFavorites: 'Добавить в избранное',
      price: 'Цена',
      description: 'Описание',
      
      // Phone
      phoneNumber: '8 499 391-52-75'
    }
  };

  const t = (key) => {
    return translations[currentLanguage][key] || key;
  };

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
