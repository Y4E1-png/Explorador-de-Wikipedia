
import axios from "axios";

const WIKIPEDIA_SEARCH_URL = 
  'https://es.wikipedia.org/w/rest.php/v1/search/page'

const WIKIPEDIA_PAGE_URL = 
  'https://es.wikipedia.org/w/rest.php/v1/page'

const WIKIPEDIA_QUERY_URL = 
  'https://es.wikipedia.org/w/api.php'


export async function searchWikipediaArticles (searchText) {
  const response = await axios.get (WIKIPEDIA_SEARCH_URL, {
    params: {
      q: searchText,
      limit: 7,
    },
  })
  console.log ("Respuesta completa de wikipedia", response.data)

  return response.data.pages
}

export async function getWikipediaArticle (articleKey) {
  const response = await axios.get(
    `${WIKIPEDIA_PAGE_URL}/${encodeURIComponent(articleKey)}/with_html`
  )

  return response.data
}


export async function getWikipediaImage (articleKey) {
  const response = await axios.get (WIKIPEDIA_QUERY_URL, {
    params: {
      action: 'query',
      prop: 'pageimages',
      piprop: 'original',
      titles: articleKey,
      redirects: 1,
      format: 'json',
      formatversion: 2,
      origin: '*',
    },
  })

  console.log ("respuesta de imagen", response.data)
    
    
  return response.data.query.pages[0].original?.source ?? null
   
}