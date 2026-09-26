
import { removeArticle } from "../../store/readingListSlice";
import { useDispatch } from "react-redux";
import { SavedCard, CardHeader, CardTitle, ImageFrame, CardImage, CardStatus, NoImage, CardActions, CardDescription, CardInformation, ReadLink, RemoveButton } from "./SavedArticleCard.styles";

const SavedArticleCard = ({ article }) => {

  const dispatch = useDispatch ()

  const handleRemoveArticle = () => {
    dispatch (removeArticle(article.key))
  }

  return (
    <SavedCard>
      <CardHeader>
        <CardTitle>
          {article.title}
        </CardTitle>
        <CardStatus>
          Guardado
        </CardStatus>
      </CardHeader>
      <ImageFrame>
        {article.image ? (
          <CardImage
            src={article.image} alt={`Imagen relacionada con ${article.title}`} 
          />
        ) : (
          <NoImage>
            Sin Imagen
          </NoImage>
        )}
      </ImageFrame>

      <CardInformation>
        {article.description && (
          <CardDescription>
            {article.description}
          </CardDescription>
        )}
        <CardActions>
          <ReadLink to = {`/articulo/${encodeURIComponent(article.key)}`}>
            Leer artículo
          </ReadLink>
          <RemoveButton type="button" onClick={handleRemoveArticle} aria-label={`Eliminar ${article.title} de mis lecturas`} title="Eliminar de mis lecturas">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M4 7h16M9 7V4h6v3M7 7l1 13h8l1-13M10 11v5M14 11v5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </RemoveButton>
        </CardActions>
      </CardInformation>
    </SavedCard>
  )
} 

export default SavedArticleCard

