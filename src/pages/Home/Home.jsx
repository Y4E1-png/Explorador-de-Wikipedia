
import { useSearchParams } from 'react-router-dom'
import { useWikipediaSearch } from '../../hooks/useWikipediaSearch'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import FeatureArticle from '../../components/FeatureArticle/FeatureArticle'
import { ResultsSection, ResultsTitle, ResultsSummary, ResultsGrid, ResultsHeading, BackLink } from './Home.styles'
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator'

function Home() {

  const [searchParams] = useSearchParams()

  const searchText = searchParams.get ("search")

  const { articles, isLoading, error } = useWikipediaSearch(searchText)

  if (searchText && isLoading) {
    return <LoadingIndicator /> 
  }

  if (searchText && error) {
    return <p>{error}</p>
  }


  return (
    <section>

      {!searchText && (
        <FeatureArticle />
      )}

      {searchText && (
        
        <ResultsSection>  
          <ResultsHeading>
            <BackLink to = "/" aria-label ="Volver al inicio" title = "Volver al inicio">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path 
                  d="M19 12H5M12 19l-7-7 7-7" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"/>
              </svg>
            </BackLink>
            <ResultsTitle>
              Explora Wikipedia
            </ResultsTitle>
          </ResultsHeading>

          <ResultsSummary>
            Resultados para: <strong>{ searchText }</strong>
          </ResultsSummary>

          {!isLoading && articles.length === 0 && (
            <p>No se encontraron artículos para: { searchText }</p>
          )}

          {articles.length > 0 && (
            <ResultsGrid>
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))}
            </ResultsGrid>
          )}
        </ResultsSection>
      )}
    </section>
  )
}

export default Home
