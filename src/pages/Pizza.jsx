
import { pizzaData } from '../assets/data'
import ProductCard from '../components/layout/ui/ProductCard'



const Pizza = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-14">
          <h1 className="font-extrabold text-3xl leading-[100%] text-yellow-300 mb-7">Pizza</h1>
          <div className="grid grid-cols-4 gap-5">
            {pizzaData.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pizza
