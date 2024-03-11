import iconLuxo from "../assets/icon-luxury.svg"

export default function Luxuosos() {
  return (
    <section className="bg-dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
        <img src={iconLuxo} alt="" className="mb-7" />
        <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-off-white-bg">Luxuosos</h2>
        <p className="font-lexend mb-7 text-off-white lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo</p>
        <a href="https://www.webmotors.com.br/carros-de-luxo" className="font-lexend bg-off-white-bg block px-10 py-3 w-fit rounded-3xl text-dark-green border-2 border-off-white-bg hover:bg-dark-green hover:text-off-white-bg" target="_blank">Ver mais</a>
    </section>
  )
}
