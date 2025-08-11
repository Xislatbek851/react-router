import store from '../assets/image/store.png'


// Kartochka ma'lumotlari
const contactItems = [
  {
    id: 1,
    icon: store,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 2,
    icon: store,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 3,
    icon: store,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 4,
    icon: store,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  }
]

const Contact = () => {
  return (
    <section className='bg-blue-100 h-[668px] mt-15'>
      <div className='container'>
        <h2 className='text-center mb-15 pt-14 font-extrabold text-yellow-400 text-3xl'>
          Оплата и доставка
        </h2>
        <div className='flex gap-[30px] flex-wrap'>
          {contactItems.map(item => (
            <div key={item.id} className='w-[255px] h-[104px] bg-white rounded-[14px]'>
              <div className='bg-white w-[77px] h-[77px] rounded-[50%] relative bottom-9 left-22'>
                <img className='m-auto relative top-3.5' src={item.icon} alt="icon" />
              </div>
              <p className='relative bottom-10 left-6 font-bold text-[14px] leading-[22px]'>
                {item.text}
              </p>
            </div>
          ))}
        </div>

        
<iframe className='mt-8'
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15187.59732419911!2d69.23283547427707!3d41.29107991582349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b75a96124ff%3A0x7d69fec345a05250!2sRoma%20Pizza%20%7C%20Muqimiy!5e0!3m2!1sru!2s!4v1754643272099!5m2!1sru!2s"
  width="1110"
  height="322"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      
      </div>
    </section>
  )
}

export default Contact
