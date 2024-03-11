import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxo from "./assets/icon-luxury.svg"

export default function App() {
  return(
    <main className="min-h-svh bg-off-white-bg py-20 px-6">

      <section>
        <div className="bg-orange p-12 rounded-t-lg">
          <img src={iconSedans} alt="ícone dos carros sedan" className="mb-7" />
          <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-off-white-bg">Sedans</h2>
          <p className="font-lexend mb-7 text-off-white">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans " className="font-lexend bg-off-white-bg block px-10 py-3 w-fit rounded-3xl text-orange" target="_blank">Ver mais</a>
        </div>

        <div className="bg-green p-12">
            <img src={iconSuvs} alt="ícone dos carros SUV" className="mb-7"/>
            <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-off-white-bg">SUVs</h2>
            <p className="font-lexend mb-7 text-off-white">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
            <a href="https://www.webmotors.com.br/suvs"  className="font-lexend bg-off-white-bg block px-10 py-3 w-fit rounded-3xl text-green" target="_blank">Ver mais</a>
        </div>

           
        <div className="bg-dark-green p-12 rounded-b-lg">
            <img src={iconLuxo} alt="" className="mb-7" />
            <h2 className="font-shoulders mb-7 uppercase text-4xl font-bold text-off-white-bg">Luxuosos</h2>
            <p className="font-lexend mb-7 text-off-white">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo</p>
            <a href="https://www.webmotors.com.br/carros-de-luxo" className="font-lexend bg-off-white-bg block px-10 py-3 w-fit rounded-3xl text-dark-green" target="_blank">Ver mais</a>
        </div>
      </section>

    </main>
  )
}