import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import {
  MemoryRouter,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, jest, test } from '@jest/globals'
import ArticleCard from '../src/components/ArticleCard/ArticleCard'
import FeatureArticle from '../src/components/FeatureArticle/FeatureArticle'
import Header from '../src/components/Header/Header'
import LoadingIndicator from '../src/components/LoadingIndicator/LoadingIndicator'
import SavedArticleCard from '../src/components/SavedArticleCard/SavedArticleCard'
import ArticleDetail from '../src/pages/ArticleDetail/ArticleDetail'
import Home from '../src/pages/Home/Home'
import ReadingList from '../src/pages/ReadingList/ReadingList'
import readingListReducer from '../src/store/readingListSlice'
import { useWikipediaArticle } from '../src/hooks/useWikipediaArticle'
import { useWikipediaSearch } from '../src/hooks/useWikipediaSearch'

jest.mock('../src/hooks/useWikipediaArticle')
jest.mock('../src/hooks/useWikipediaSearch')

const featuredArticle = {
  key: 'Asamblea_General_de_las_Naciones_Unidas',
  title: 'Asamblea General de las Naciones Unidas',
  html: `
    <section data-mw-section-id="0">
      <p>Organización internacional.<sup class="reference">[1]</sup></p>
      <p>Segundo párrafo.</p>
    </section>
  `,
}

function createTestStore(articles = []) {
  return configureStore({
    reducer: {
      readingList: readingListReducer,
    },
    preloadedState: {
      readingList: {
        articles,
      },
    },
  })
}

function renderWithContext(ui, options = {}) {
  const { articles = [], route = '/' } = options
  const store = createTestStore(articles)

  return {
    store,
    ...render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
      </Provider>,
    ),
  }
}

function LocationDisplay() {
  const location = useLocation()

  return <p data-testid="location">{location.pathname + location.search}</p>
}

beforeEach(() => {
  useWikipediaArticle.mockReturnValue({
    article: featuredArticle,
    articleImg: 'asamblea.jpg',
    isLoading: false,
    error: null,
  })
  useWikipediaSearch.mockReturnValue({
    articles: [],
    isLoading: false,
    error: null,
  })
})

describe('componentes compartidos', () => {
  test('LoadingIndicator comunica que la página está cargando', () => {
    render(<LoadingIndicator />)

    expect(screen.getByRole('status')).toHaveTextContent('Cargando')
  })

  test('Header envía una búsqueda limpia y codificada a la URL', async () => {
    const user = userEvent.setup()

    renderWithContext(
      <>
        <Header isOverlay={false} />
        <LocationDisplay />
      </>,
    )

    await user.type(
      screen.getByRole('searchbox', { name: 'Buscar en Wikipedia' }),
      '  luna roja  ',
    )
    await user.click(screen.getByRole('button', { name: 'Buscar artículo' }))

    expect(screen.getByTestId('location')).toHaveTextContent(
      '/?search=luna%20roja',
    )
  })

  test('ArticleCard guarda y quita un artículo', async () => {
    const user = userEvent.setup()
    const article = {
      key: 'Café_con_leche',
      title: 'Café con leche',
      description: 'Bebida preparada con café y leche',
      originalImage: null,
    }
    const { store } = renderWithContext(<ArticleCard article={article} />)
    const saveButton = screen.getByRole('button', {
      name: 'Guardar en mis lecturas',
    })

    expect(screen.getByText('Sin imagen')).toBeInTheDocument()
    expect(saveButton).toHaveAttribute('aria-pressed', 'false')

    await user.click(saveButton)

    expect(store.getState().readingList.articles).toEqual([
      {
        key: 'Café_con_leche',
        title: 'Café con leche',
        description: 'Bebida preparada con café y leche',
        image: null,
      },
    ])
    expect(saveButton).toHaveAttribute('aria-pressed', 'true')

    await user.click(saveButton)

    expect(store.getState().readingList.articles).toEqual([])
    expect(
      screen.getByRole('link', { name: 'Leer más' }),
    ).toHaveAttribute('href', '/articulo/Caf%C3%A9_con_leche')
  })

  test('SavedArticleCard elimina el artículo seleccionado', async () => {
    const user = userEvent.setup()
    const savedArticle = {
      key: 'México',
      title: 'México',
      image: null,
      description: 'País de América del Norte',
    }
    const { store } = renderWithContext(
      <SavedArticleCard article={savedArticle} />,
      { articles: [savedArticle] },
    )

    expect(screen.getByText('Guardado')).toBeInTheDocument()
    expect(screen.getByText('Sin Imagen')).toBeInTheDocument()

    await user.click(
      screen.getByRole('button', {
        name: 'Eliminar México de mis lecturas',
      }),
    )

    expect(store.getState().readingList.articles).toEqual([])
  })
})

describe('FeatureArticle', () => {
  test('muestra el indicador mientras carga', () => {
    useWikipediaArticle.mockReturnValue({
      article: null,
      articleImg: null,
      isLoading: true,
      error: null,
    })

    renderWithContext(<FeatureArticle />)

    expect(screen.getByRole('status')).toHaveTextContent('Cargando')
  })

  test('muestra el error recibido por el hook', () => {
    useWikipediaArticle.mockReturnValue({
      article: null,
      articleImg: null,
      isLoading: false,
      error: 'No se pudo cargar el artículo',
    })

    renderWithContext(<FeatureArticle />)

    expect(screen.getByText('No se pudo cargar el artículo')).toBeInTheDocument()
  })

  test('muestra el artículo destacado y su primer párrafo', () => {
    renderWithContext(<FeatureArticle />)

    expect(
      screen.getByRole('heading', {
        name: 'Asamblea General de las Naciones Unidas',
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Organización internacional.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Leer más' })).toHaveAttribute(
      'href',
      '/articulo/Asamblea_General_de_las_Naciones_Unidas',
    )
  })
})

describe('Home', () => {
  test('muestra el artículo destacado cuando no hay búsqueda', () => {
    renderWithContext(<Home />)

    expect(
      screen.getByText('Artículo Destacado de la Semana'),
    ).toBeInTheDocument()
  })

  test('muestra resultados de búsqueda', () => {
    useWikipediaSearch.mockReturnValue({
      articles: [
        {
          id: 1,
          key: 'Sol',
          title: 'Sol',
          description: 'Estrella del sistema solar',
          originalImage: 'sol.jpg',
        },
      ],
      isLoading: false,
      error: null,
    })

    renderWithContext(<Home />, { route: '/?search=sol' })

    expect(screen.getByText('Resultados para:')).toHaveTextContent('sol')
    expect(screen.getByRole('heading', { name: 'Sol' })).toBeInTheDocument()
  })

  test('muestra el error de la búsqueda', () => {
    useWikipediaSearch.mockReturnValue({
      articles: [],
      isLoading: false,
      error: 'No se pudieron cargar los artículos, inténtalo de nuevo',
    })

    renderWithContext(<Home />, { route: '/?search=error' })

    expect(
      screen.getByText(
        'No se pudieron cargar los artículos, inténtalo de nuevo',
      ),
    ).toBeInTheDocument()
  })
})

describe('ReadingList', () => {
  test('muestra un mensaje cuando no hay artículos guardados', () => {
    renderWithContext(<ReadingList />)

    expect(
      screen.getByText('Todavía no tienes artículos guardados'),
    ).toBeInTheDocument()
  })

  test('muestra la cantidad y las tarjetas guardadas', () => {
    const savedArticle = {
      key: 'México',
      title: 'México',
      image: null,
      description: 'País de América del Norte',
    }

    renderWithContext(<ReadingList />, { articles: [savedArticle] })

    expect(screen.getByText('Tienes 1 artículos guardados')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'México' })).toBeInTheDocument()
  })
})

describe('ArticleDetail', () => {
  test('muestra la introducción y permite guardar el artículo', async () => {
    const user = userEvent.setup()
    const { store } = renderWithContext(
      <Routes>
        <Route path="/articulo/:articleKey" element={<ArticleDetail />} />
      </Routes>,
      { route: '/articulo/Asamblea_General_de_las_Naciones_Unidas' },
    )

    expect(screen.getByText('Organización internacional.')).toBeInTheDocument()
    expect(screen.queryByText('[1]')).not.toBeInTheDocument()

    const saveButton = screen.getByRole('button', {
      name: 'Guardar en mis lecturas',
    })
    await user.click(saveButton)

    expect(store.getState().readingList.articles).toEqual([
      {
        key: 'Asamblea_General_de_las_Naciones_Unidas',
        title: 'Asamblea General de las Naciones Unidas',
        image: 'asamblea.jpg',
        description: 'Organización internacional.',
      },
    ])
    expect(
      screen.getByRole('link', {
        name: 'Leer el artículo completo en Wikipedia',
      }),
    ).toHaveAttribute(
      'href',
      'https://es.wikipedia.org/wiki/Asamblea_General_de_las_Naciones_Unidas',
    )
  })

  test('avisa cuando no encuentra una introducción', () => {
    useWikipediaArticle.mockReturnValue({
      article: {
        key: 'Sin_introducción',
        title: 'Sin introducción',
        html: '<section data-mw-section-id="1"><p>Otro contenido</p></section>',
      },
      articleImg: null,
      isLoading: false,
      error: null,
    })

    renderWithContext(
      <Routes>
        <Route path="/articulo/:articleKey" element={<ArticleDetail />} />
      </Routes>,
      { route: '/articulo/Sin_introducci%C3%B3n' },
    )

    expect(
      screen.getByText('No se encontró una introducción para este artículo.'),
    ).toBeInTheDocument()
  })
})
