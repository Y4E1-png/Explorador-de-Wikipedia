import { describe, expect, test } from '@jest/globals'
import readingListReducer, { addArticle, removeArticle } from './readingListSlice'

const article = {
  key: 'México',
  title: 'México',
  image: 'mexico.jpg',
  description: 'País de América del Norte',
}

describe('readingListSlice', () => {
  test('agrega un artículo a la lista', () => {
    const state = readingListReducer(undefined, addArticle(article))

    expect(state.articles).toEqual([article])
  })

  test('no agrega dos artículos con la misma key', () => {
    const initialState = { articles: [article] }
    const duplicate = { ...article, title: 'Título duplicado' }

    const state = readingListReducer(initialState, addArticle(duplicate))

    expect(state.articles).toEqual([article])
  })

  test('elimina un artículo utilizando su key', () => {
    const secondArticle = { ...article, key: 'Metro', title: 'Metro' }
    const initialState = { articles: [article, secondArticle] }

    const state = readingListReducer(initialState, removeArticle('México'))

    expect(state.articles).toEqual([secondArticle])
  })
})
