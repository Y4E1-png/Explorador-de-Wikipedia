import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import SavedArticleCard from "../../components/SavedArticleCard/SavedArticleCard"
import { ReadingPage, ReadingContent, ReadingHeader, ReadingTitle, ReadingSubtitle, ReadingCount, ArticlesGrid, EmptyIcon, EmptyState, EmptyText, EmptyTitle, ExploreLink, BackButton } from "../../pages/ReadingList/ReadingList.styles";


const ReadingList = () => {

  const savedArticles = useSelector (
    (state) => state.readingList.articles
  )

  const navigate = useNavigate ()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <ReadingPage>
      <ReadingContent>
        <ReadingHeader>
          <BackButton type="button" onClick={handleGoBack} aria-label="Volver a los resultados" title="Volver a los resultados">     
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M19 12H5M12 19l-7-7 7-7" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
              />
            </svg>
          </BackButton>

          <ReadingTitle>
            Mis lecturas
          </ReadingTitle>

          <ReadingSubtitle>
            Artículos que guardaste
          </ReadingSubtitle>

          {savedArticles.length > 0 && (
            <ReadingCount>
              Tienes {savedArticles.length} artículos guardados
            </ReadingCount>
          )}
        </ReadingHeader>

        {savedArticles.length === 0 && (
          <EmptyState>
            <EmptyIcon aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <path
                  d="M6 3h12v18l-6-4-6 4V3Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </EmptyIcon>

            <EmptyTitle>
              Todavía no tienes artículos guardados
            </EmptyTitle>

            <EmptyText>
              Guarda los artículos que quieras consultar después y aparecerán en tu colección
            </EmptyText>

            <ExploreLink to="/">
              Explorar artículos
            </ExploreLink>
          </EmptyState>
        )}

        {savedArticles.length > 0 && (
          <ArticlesGrid>
            {savedArticles.map ((article) => (
              <SavedArticleCard 
                key={article.key} 
                article = {article} 
              />
            ))}
          </ArticlesGrid>
        )}
      </ReadingContent>
    </ReadingPage>
  )
}

export default ReadingList
