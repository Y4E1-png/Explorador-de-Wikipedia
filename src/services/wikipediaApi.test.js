import { afterAll, beforeAll, beforeEach, describe, expect, jest, test } from '@jest/globals'
import axios from 'axios'
import {
  getWikipediaArticle,
  getWikipediaImage,
  searchWikipediaArticles,
} from './wikipediaApi'

jest.mock('axios')

describe('wikipediaApi', () => {
  let consoleSpy

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {})
  })

  beforeEach(() => {
    axios.get.mockReset()
  })

  afterAll(() => {
    consoleSpy.mockRestore()
  })

  test('busca artículos con el texto y el límite esperados', async () => {
    const pages = [{ key: 'Sol', title: 'Sol' }]
    axios.get.mockResolvedValue({ data: { pages } })

    await expect(searchWikipediaArticles('sol')).resolves.toEqual(pages)
    expect(axios.get).toHaveBeenCalledWith(
      'https://es.wikipedia.org/w/rest.php/v1/search/page',
      {
        params: {
          q: 'sol',
          limit: 7,
        },
      },
    )
  })

  test('codifica la key antes de solicitar un artículo', async () => {
    const article = { key: 'Café_con_leche', title: 'Café con leche' }
    axios.get.mockResolvedValue({ data: article })

    await expect(getWikipediaArticle('Café con leche')).resolves.toEqual(article)
    expect(axios.get).toHaveBeenCalledWith(
      'https://es.wikipedia.org/w/rest.php/v1/page/Caf%C3%A9%20con%20leche/with_html',
    )
  })

  test('devuelve la imagen original de un artículo', async () => {
    axios.get.mockResolvedValue({
      data: {
        query: {
          pages: [{ original: { source: 'https://images.example/sol.jpg' } }],
        },
      },
    })

    await expect(getWikipediaImage('Sol')).resolves.toBe(
      'https://images.example/sol.jpg',
    )
  })

  test('devuelve null cuando Wikipedia no proporciona una imagen', async () => {
    axios.get.mockResolvedValue({
      data: {
        query: {
          pages: [{}],
        },
      },
    })

    await expect(getWikipediaImage('Artículo sin imagen')).resolves.toBeNull()
  })

  test('propaga un error de la petición para que el hook pueda manejarlo', async () => {
    axios.get.mockRejectedValue(new Error('Error de red'))

    await expect(searchWikipediaArticles('sol')).rejects.toThrow('Error de red')
  })
})
