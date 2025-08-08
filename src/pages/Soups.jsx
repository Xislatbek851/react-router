import { soupsData } from "../assets/data"
import ProductCard from "../components/layout/ui/ProductCard"




const Soups = () => {
  return (
    <section>
      <div className="container">
        <div className="mt-14">
          <h1 className="font-extrabold text-3xl leading-[100%] text-yellow-300 mb-7">Soups</h1>
          <div className="flex justify-between flex-wrap gap-5">
            {soupsData.map((item) => (
                    <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
export default Soups