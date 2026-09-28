
import { useWikipediaArticle } from "../../hooks/useWikipediaArticle"
import { FeatureContainer, FeatureImage, FeatureLabel, FeatureDescription, FeatureTitle, FeatureLink, FeatureContent, FeatureHeading } from "./FeatureArticle.styles"
import { extractParagraphs } from "../../utils/extractParagraphs"
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator"




function FeatureArticle () {

  const selectedArticle = "Elecciones_generales_de_Brasil_de_2026"
  
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
          Leer más
        </FeatureLink>
      </FeatureContent>
    </FeatureContainer>
  )
}

export default FeatureArticle