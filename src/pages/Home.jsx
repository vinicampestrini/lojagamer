import GameCard from "../components/GameCard"
import ImagemJogo from "../assets/Imagem.avif"

const Home = () => {

  const games = [
    { id: 1, titulo: "Jogo-01", preco: "R$ 200,00", Imagem: ImagemJogo },
    { id: 1, titulo: "Jogo-01", preco: "R$ 300,00", Imagem: ImagemJogo },
    { id: 1, titulo: "Jogo-01", preco: "R$ 400,00", Imagem: ImagemJogo },
    { id: 1, titulo: "Jogo-01", preco: "R$ 500,00", Imagem: ImagemJogo },
  ];

  return (
    <main className="px-[5%] mt-10 mb-16 grow">
      <h2 className="titulo text-3xl">JOGOS EM DESTAQUES</h2>
      {/* é aqui que os cards ficam um do lado do outro */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6">
        {games.map((jogo) => (
          <GameCard
            key={jogo.id}
            titulo={jogo.titulo}
            preco={jogo.preco}
            imagem={jogo.imagem}
          />
        ))}
      </section>



    </main>
  )
}

export default Home
