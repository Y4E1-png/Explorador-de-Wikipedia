
import { useDispatch, useSelector } from "react-redux"
import { addArticle, removeArticle } from "../../store/readingListSlice"
import { Card, CardContent, CardDescription, CardImage, CardMedia, CardTitle, CardActions, ArticleLink, SaveButton, NoImageMessage } from "./ArticleCard.styles"


function ArticleCard ({ article }) {


  const dispatch = useDispatch ()

  const isArticleSaved = useSelector((state) =>
    state.readingList.articles.some(
      (savedArticle) => savedArticle.key === article.key
    )
  )

  const handleSaveCard =()=> {
    const articleToSave = {
      key: article.key,
      title: article.title,
      image: article.originalImage ?? null,
      description: article.description ?? ''
    }
    dispatch (addArticle(articleToSave))
  }

  const handleRemoveArticle = () => {
    dispatch (removeArticle(article.key))
  }


  return (
    <Card>
      <CardMedia>
        {article.originalImage && (
          <CardImage 
            src={article.originalImage}
            alt={`Imagen relacionada con ${article.title}`}
          />
        )}

        {!article.originalImage && (
          <NoImageMessage>Sin imagen</NoImageMessage>
        )}
      </CardMedia>

      <CardContent>
        <CardTitle>
          {article.title}
        </CardTitle>

        {article.description && (
          <CardDescription>
            {article.description}
          </CardDescription>
        )}
        <CardActions>
          <SaveButton type="button" onClick={ isArticleSaved ? handleRemoveArticle : handleSaveCard } $isSaved= {isArticleSaved} aria-pressed= {isArticleSaved} aria-label="Guardar en mis lecturas" title={isArticleSaved ? "Quitar de mis lecturas" : "Guardar en mis lecturas"}>
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"> 
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67 10.94 4.61a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </SaveButton>

          <ArticleLink to = {`/articulo/${encodeURIComponent(article.key)}`}>
            Leer más
          </ArticleLink>
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default ArticleCard