import React from 'react'
import pizza from '../assets/image/pizza.png'

const pizzaData = [
  {
    id: 1,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
  {
    id: 2,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
  {
    id: 3,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
  {
    id: 4,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
    {
    id: 5,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
  {
    id: 6,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
  {
    id: 7,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
  {
    id: 8,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
    {
    id: 9,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
  {
    id: 10,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
  {
    id: 11,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
  {
    id: 12,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
    {
    id: 13,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
  {
    id: 14,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
  {
    id: 15,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  },
  {
    id: 16,
    name: 'С креветками и трюфелями',
    description: 'Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное масло, черный перец, пармезан.350 г',
    price: 'от 600 ₽',
    image: pizza
  }
]

const Pizza = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-14">
          <h1 className="font-extrabold text-3xl leading-[100%] text-yellow-300 mb-7">Pizza</h1>
          <div className="flex justify-between gap-5">
            {pizzaData.map((item) => (
              <div key={item.id} className="w-[256px] h-[468px]">
                <img src={item.image} alt="pizza" />
                <h3 className="text-gray-500 font-extrabold text-2xl leading-7">{item.name}</h3>
                <p className="text-gray-400 font-medium text-[13px] leading-[19px] mt-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-7 mt-4">
                  <h3 className="font-bold text-2xl leading-[19px]">{item.price}</h3>
                  <button className="w-32 h-9 bg-yellow-300 text-white rounded-[8px] font-bold text-[13px]">
                    В корзину
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pizza
