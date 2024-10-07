import { Header } from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'

import './global.css'
import EstiloGlobal from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Hero />
      <div className="container">
        <ListaVagas />
      </div>
    </>
  )
}

export default App
