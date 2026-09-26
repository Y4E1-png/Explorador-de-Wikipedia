
import { useParams, useNavigate } from "react-router-dom"
import { useWikipediaArticle } from "../../hooks/useWikipediaArticle"
import { useDispatch, useSelector } from "react-redux"
import { addArticle, removeArticle } from "../../store/readingListSlice"
import logoPrincipal from "../../assets/logo-principal.png"
import { DetailPage, DetailHero, HeroImage, DetailTopbar, DetailActions, DetailBrand, SaveButton, SearchLink, HeroHeading, HeroLabel, ArticleTitle, HeroTitleGroup, ArticleBody, ArticleParagraph, ArticleFooter, FooterPrompt, WikipediaLink, TopbarStart, BackButton, SavedArticlesLink, ReadArticleLink } from "./ArticleDetail.styles"
import { extractParagraphs } from "../../utils/extractParagraphs"
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator"




function ArticleDetail() {

  const { articleKey } = useParams ()

  const navigate = useNavigate ()

  const { article, articleImg, isLoading, error } = useWikipediaArticle (articleKey)
  
  const dispatch = useDispatch ()

  const isArticleSaved = useSelector((state) =>
    state.readingList.articles.some(
      (savedArticle) => savedArticle.key === articleKey
    )
  )

  if (isLoading) {
    return (
      <LoadingIndicator />
    )
  }

  if (error) {
    return <p>{error}</p>
  }
  
  if (!article) {
    return null
  }

  const paragraphs = extractParagraphs(article.html)

  const saveArticle = () => {
    const articleToSave = {
      key: article.key,
      title: article.title,
      image: articleImg ?? null,
      description: paragraphs [0] ?? ''
    }
    dispatch (addArticle(articleToSave))
  }

  const handleRemoveArticle = () => {
    dispatch (removeArticle(article.key))
  }

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <DetailPage>
      <DetailHero>
        {articleImg && (
          <HeroImage 
            src={articleImg}
            alt={`Imagen relacionada con ${article.title}`}
          />
        )}

        <DetailTopbar>
          <TopbarStart>
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

             <DetailBrand to = "/" aria-label="Volver al inicio">
              <img src={logoPrincipal} alt="" width="50" height="50"/>
              <span>Explorador de Wikipedia</span>
            </DetailBrand>
          </TopbarStart>

          <DetailActions aria-label="Acciones del artículo">
            <SavedArticlesLink to = "/mis-lecturas" aria-label="Ir a guardados" title="Ir a guardados">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M6 3h12v18l-6-4-6 4V3Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SavedArticlesLink>
            
            <SaveButton type="button" onClick={ isArticleSaved ? handleRemoveArticle : saveArticle } $isSaved = {isArticleSaved} aria-pressed={isArticleSaved} aria-label="Guardar en mis lecturas" title={ isArticleSaved ? "Quitar de mis lecturas" : "Guardar en mis lecturas" }>
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67 10.94 4.61a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SaveButton>
            
            <SearchLink to = "/" aria-label="Buscar otro artículo" title="Buscar otro artículo">
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="m16 16 4 4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </SearchLink>
          </DetailActions>
        </DetailTopbar>

        <HeroHeading>
          <HeroTitleGroup>
            <HeroLabel>Artículo de Wikipedia</HeroLabel>
            <ArticleTitle>{article.title}</ArticleTitle>
          </HeroTitleGroup>
        </HeroHeading>

        <ReadArticleLink href="#contenido-articulo">
          <span>Leer el artículo</span>

          <svg viewBox="0 0 40 20" aria-hidden="true" focusable="false">
            <path
              d="M2 4L20 18L38 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ReadArticleLink>
      </DetailHero>

      <ArticleBody id="contenido-articulo">
        {paragraphs.length === 0 && (
          <p>No se encontró una introducción para este artículo.</p>
        )}

        {paragraphs.map ((paragraph, index) => (
          <ArticleParagraph key={index}>
            {paragraph}
          </ArticleParagraph>
        ))}

        <ArticleFooter>
          <FooterPrompt>¿Quieres saber más?</FooterPrompt>

          <WikipediaLink href={`https://es.wikipedia.org/wiki/${encodeURIComponent(article.key)}`} target="_blank" rel="noreferrer">

            Leer el artículo completo en Wikipedia

          </WikipediaLink>
        </ArticleFooter>
      </ArticleBody>
    </DetailPage>
  )
}

export default ArticleDetail


