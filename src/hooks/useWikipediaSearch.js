
import { useEffect, useState } from 'react'
import { searchWikipediaArticles, getWikipediaImage } from '../services/wikipediaApi'


export function useWikipediaSearch(searchText) {

  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState (false)
  const [error, setError] = useState (null)


  useEffect(() => {

    if (!searchText) { 
      return
    }

      async function loadArticles() {
        try {
          setIsLoading (true)
          setError (null)
            const searchArticles = await searchWikipediaArticles (searchText)

            const articlesWithImages = await Promise.all (
              searchArticles.map(async (article) => {
                const originalImage = await getWikipediaImage(article.key)

                return {
                  ...article, originalImage
                }

              })
            )

            console.log ("Resultados con imagenes originales", articlesWithImages)


          setArticles(articlesWithImages)

        } catch {
          setError ("No se pudieron cargar los artículos, inténtalo de nuevo")

        } finally {
          setIsLoading (false)
        }
          
      }

    loadArticles()
  }, [searchText])

  return { articles, isLoading, error }
}
