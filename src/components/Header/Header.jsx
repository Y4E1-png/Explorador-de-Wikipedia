
import { HeaderContainer, Brand, NavigationBar, SearchForm, SearchLabel, SearchInput, SearchButton } from "./Header.styles"
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from "react"
import logoPrincipal from '../../assets/logo-principal.png'

function Header({ isOverlay }) {

  const [searchText, setSearchText] = useState("")

  const navigate = useNavigate()

  const handleSearchSubmit = (e) => {
    e.preventDefault ()

    const readySearchText = searchText.trim ()

    if (!readySearchText) {
      return
    }
    
    navigate(`/?search=${encodeURIComponent(readySearchText)}`)

  }

  return (
    <HeaderContainer $isOverlay = {isOverlay}>
      
      <Brand>
        <img 
          src = {logoPrincipal}
          alt=""
          width="50"
          height="50"
        />
        <span>Explorador de Wikipedia</span>
      </Brand>

      <NavigationBar $isOverlay={isOverlay} aria-label="Navegación principal">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/mis-lecturas">Mis lecturas</NavLink>
      </NavigationBar>

      <SearchForm role="search" onSubmit={handleSearchSubmit}>
        <SearchLabel htmlFor="article-search">Buscar en Wikipedia</SearchLabel>
        <SearchInput
          id="article-search"
          name="search"
          type="search"
          placeholder="Escribe un tema…"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <SearchButton type="submit" aria-label="Buscar artículo" title="Buscar">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle
              cx="11"
              cy="11"
              r="7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />

            <path
              d="m16 16 4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </SearchButton>
      </SearchForm>
    </HeaderContainer>

  )
}

export default Header
