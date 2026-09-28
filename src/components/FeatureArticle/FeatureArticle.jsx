
import { useWikipediaArticle } from "../../hooks/useWikipediaArticle"
import { FeatureContainer, FeatureImage, FeatureLabel, FeatureDescription, FeatureTitle, FeatureLink, FeatureContent, FeatureHeading } from "./FeatureArticle.styles"
import { extractParagraphs } from "../../utils/extractParagraphs"
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator"




function FeatureArticle () {

  const selectedArticle = "Asamblea_General_de_las_Naciones_Unidas"
  
  const { article, articleImg, isLoading, error } = useWikipediaArticle (selectedArticle)

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

  const paragraphs = extractParagraphs (article.html)

  return (
    <FeatureContainer>
      {articleImg && (
        <FeatureImage 
          src={ articleImg }
          alt={`Imagen relacionada con ${article.title}`}
        />
      )}
      <FeatureContent>
        <FeatureHeading>
          <FeatureLabel>Artículo Destacado de la Semana</FeatureLabel>

          <FeatureTitle>{ article.title }</FeatureTitle>
        </FeatureHeading>

        {paragraphs[0] && (
          <FeatureDescription>{ paragraphs [0] }</FeatureDescription>
        )}

        <FeatureLink to= {`/articulo/${encodeURIComponent(article.key)}`}>
          <span>Leer más</span>
        </FeatureLink>
      </FeatureContent>
    </FeatureContainer>
  )
}

export default FeatureArticle