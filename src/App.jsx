
import { GlobalStyles } from "./styles/GlobalStyles"
import  Header  from './components/Header/Header'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail"
import ReadingList from "./pages/ReadingList/ReadingList"

function App() {

  const location = useLocation()

  const searchText = new URLSearchParams(location.search).get('search')

  const isHomeHero = location.pathname === '/' && !searchText

  const isArticleDetail = location.pathname.startsWith('/articulo/')

  return (
    <>
      <GlobalStyles />

      {!isArticleDetail && (
        <Header isOverlay = {isHomeHero} />
      )}
      
      <main>
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/articulo/:articleKey" element= {<ArticleDetail />} />
          <Route path="/mis-lecturas" element= {<ReadingList />} />
        </Routes>
      </main>

      <footer className="credits">
        <p>
          Textos e imágenes procedentes de Wikipedia y Wikimedia Commons.
          Consulta el artículo original para conocer la autoría y licencia
          de sus contenidos.
        </p>
      </footer>
    </>
  )
}

export default App
