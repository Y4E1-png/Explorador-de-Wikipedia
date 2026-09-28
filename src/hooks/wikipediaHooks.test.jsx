import { act, renderHook, waitFor } from '@testing-library/react'
import { beforeEach, describe, expect, jest, test } from '@jest/globals'
import { useWikipediaArticle } from './useWikipediaArticle'
import { useWikipediaSearch } from './useWikipediaSearch'
import {
  getWikipediaArticle,
  getWikipediaImage,
  searchWikipediaArticles,
} from '../services/wikipediaApi'

jest.mock('../services/wikipediaApi')

describe('useWikipediaSearch', () => {
  beforeEach(() => {
    searchWikipediaArticles.mockReset()
    getWikipediaImage.mockReset()
  })

  test('no realiza peticiones cuando no hay texto de búsqueda', () => {
    const { result } = renderHook(() => useWikipediaSearch(null))

    expect(result.current).toEqual({
      articles: [],
      isLoading: false,
      error: null,
    })
    expect(searchWikipediaArticles).not.toHaveBeenCalled()
    expect(getWikipediaImage).not.toHaveBeenCalled()
  })

  test('agrega la imagen original a cada resultado', async () => {
    const articles = [
      { key: 'Sol', title: 'Sol' },
      { key: 'Luna', title: 'Luna' },
    ]
    searchWikipediaArticles.mockResolvedValue(articles)
    getWikipediaImage
      .mockResolvedValueOnce('sol.jpg')
      .mockResolvedValueOnce('luna.jpg')

    const { result } = renderHook(() => useWikipediaSearch('astronomía'))

    await waitFor(() => {
      expect(result.current.articles).toEqual([
        { key: 'Sol', title: 'Sol', originalImage: 'sol.jpg' },
        { key: 'Luna', title: 'Luna', originalImage: 'luna.jpg' },
      ])
    })

    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeNull()
  })

  test('mantiene el orden aunque las imágenes terminen en otro orden', async () => {
    let resolveFirstImage
    const firstImage = new Promise((resolve) => {
      resolveFirstImage = resolve
    })

    searchWikipediaArticles.mockResolvedValue([
      { key: 'Primero', title: 'Primero' },
      { key: 'Segundo', title: 'Segundo' },
    ])
    getWikipediaImage
      .mockReturnValueOnce(firstImage)
      .mockResolvedValueOnce('segundo.jpg')

    const { result } = renderHook(() => useWikipediaSearch('orden'))

    await waitFor(() => {
      expect(getWikipediaImage).toHaveBeenCalledTimes(2)
    })

    await act(async () => {
      resolveFirstImage('primero.jpg')
      await firstImage
    })

    await waitFor(() => {
      expect(result.current.articles.map((article) => article.key)).toEqual([
        'Primero',
        'Segundo',
      ])
    })
  })

  test('muestra un mensaje cuando falla la búsqueda', async () => {
    searchWikipediaArticles.mockRejectedValue(new Error('Error de red'))

    const { result } = renderHook(() => useWikipediaSearch('error'))

    await waitFor(() => {
      expect(result.current.error).toBe(
        'No se pudieron cargar los artículos, inténtalo de nuevo',
      )
    })

    expect(result.current.isLoading).toBe(false)
    expect(result.current.articles).toEqual([])
  })
})

describe('useWikipediaArticle', () => {
  beforeEach(() => {
    getWikipediaArticle.mockReset()
    getWikipediaImage.mockReset()
  })

  test('no realiza peticiones cuando no hay key', () => {
    const { result } = renderHook(() => useWikipediaArticle(null))

    expect(result.current).toEqual({
      article: null,
      articleImg: null,
      isLoading: false,
      error: null,
    })
    expect(getWikipediaArticle).not.toHaveBeenCalled()
  })

  test('carga el artículo y su imagen', async () => {
    const article = { key: 'Sol', title: 'Sol', html: '<p>Estrella</p>' }
    getWikipediaArticle.mockResolvedValue(article)
    getWikipediaImage.mockResolvedValue('sol.jpg')

    const { result } = renderHook(() => useWikipediaArticle('Sol'))

    await waitFor(() => {
      expect(result.current.article).toEqual(article)
      expect(result.current.articleImg).toBe('sol.jpg')
    })

    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeNull()
  })

  test('conserva el artículo aunque falle únicamente la imagen', async () => {
    const article = { key: 'Sol', title: 'Sol', html: '<p>Estrella</p>' }
    getWikipediaArticle.mockResolvedValue(article)
    getWikipediaImage.mockRejectedValue(new Error('Imagen no disponible'))

    const { result } = renderHook(() => useWikipediaArticle('Sol'))

    await waitFor(() => {
      expect(result.current.article).toEqual(article)
    })

    expect(result.current.articleImg).toBeNull()
    expect(result.current.error).toBeNull()
  })

  test('muestra un mensaje cuando falla el artículo', async () => {
    getWikipediaArticle.mockRejectedValue(new Error('Artículo no disponible'))
    getWikipediaImage.mockResolvedValue(null)

    const { result } = renderHook(() => useWikipediaArticle('Error'))

    await waitFor(() => {
      expect(result.current.error).toBe('No se pudo cargar el artículo')
    })

    expect(result.current.isLoading).toBe(false)
    expect(result.current.article).toBeNull()
  })
})
