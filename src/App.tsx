import { GameBanner } from './componentes/GameBanner';
import * as Dialog from '@radix-ui/react-dialog'

import "../src/styles/main.css";
import logoImg from "./assets/logo-true.png"
import { CreateAddBanner } from './componentes/CreateAddBanner';
import { useEffect, useState } from 'react';
import { CreateAddModal } from './componentes/CreateAddModal';
import axios from 'axios';


interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

function App() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
        setGames(response.data)
      })
  }, [])

  return (
    <div className="max-w-[1280px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="logo do site" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu <span className="text-transparent bg-gradient bg-clip-text">duo</span> está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map(game => {
          return (
            <GameBanner
            key={game.id}
            title={game.title} 
            bannerUrl={game.bannerUrl} 
            adsCount={game._count.ads}
            />
          )
        })}
      </div>
      <Dialog.Root>
      <CreateAddBanner/>
      <CreateAddModal />
      </Dialog.Root>
    </div>
  )
}
/*comentario para saber */
export default App
