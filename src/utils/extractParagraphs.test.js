import { describe, expect, test } from '@jest/globals'
import { extractParagraphs } from './extractParagraphs'

describe('extractParagraphs', () => {
  test('extrae los párrafos de la introducción y elimina las referencias', () => {
    const articleHtml = `
      <section data-mw-section-id="0">
        <p>Primer párrafo.<sup class="reference">[1]</sup></p>
        <p>Segundo párrafo.</p>
        <p>   </p>
      </section>
      <section data-mw-section-id="1">
        <p>Este párrafo pertenece a otra sección.</p>
      </section>
    `

    expect(extractParagraphs(articleHtml)).toEqual([
      'Primer párrafo.',
      'Segundo párrafo.',
    ])
  })

  test('devuelve un arreglo vacío cuando no existe la introducción', () => {
    const articleHtml = '<section data-mw-section-id="1"><p>Contenido</p></section>'

    expect(extractParagraphs(articleHtml)).toEqual([])
  })
})
