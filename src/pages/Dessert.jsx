import ProductCard from '../components/layout/ui/ProductCard'
import { dessertData } from '../assets/data'



const Dessert = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-14">
          <h1 className="font-extrabold text-3xl leading-[100%] text-yellow-300 mb-7">Desserts</h1>
          <div className="flex justify-between flex-wrap gap-5">
            {dessertData.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dessert