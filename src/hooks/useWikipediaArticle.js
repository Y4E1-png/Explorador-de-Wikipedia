
import { useEffect, useState } from "react";
import { getWikipediaArticle, getWikipediaImage } from "../services/wikipediaApi";

export function useWikipediaArticle (articleKey)  {

    const [article, setArticle] = useState (null)
    const [articleImg, setArticleImg] = useState (null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect (() => {

        if (!articleKey) {
            return
        }

        async function loadImage () {
            try {
                const result = await getWikipediaImage (articleKey)
                setArticleImg (result)
            } catch {
                setArticleImg (null)
            }
        }

        async function loadArticle () {
            setIsLoading (true)
            setError (null)
            try {
                const result = await getWikipediaArticle (articleKey)
                setArticle (result)
            } catch {
                setError ("No se pudo cargar el artículo")

            } finally {
                setIsLoading (false)
            }
        }

        loadImage () 
        loadArticle ()

    }, [articleKey])

    return { article, articleImg, isLoading, error }
}

