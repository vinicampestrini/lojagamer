import { Link } from "react-router-dom"

const Error = () => {
  return (
    <main className="px-[5%] my-20 grow text-center flex flex-col items-center justify-center">
        <h2 className="text-[#95ff00] text-6xl font-bold">404</h2>
          <p className="text-2xl font-semibold mb-2 text-white">Ops! Página não encontrada.</p>
          <p className="text-gray-400 mb-8 max-w-md">Parece que você se perdeu no mapa do jogo. A página que você está procurando não existe ou foi removida</p>
          <Link to="/" className="text-black py-3 px-20 bg-amber-200 rounded-2xl">Voltar para a Home</Link>
    </main>
  )
}

export default Error
