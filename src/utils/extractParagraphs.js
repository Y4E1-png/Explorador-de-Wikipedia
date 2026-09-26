
export function extractParagraphs(articleHtml) {
  const parsedDocument = new DOMParser().parseFromString(
    articleHtml,
    'text/html'
  )

  const introductionSection = parsedDocument.querySelector(
    'section[data-mw-section-id="0"]'
  )

  if (!introductionSection) {
    return []
  }

  return Array.from(introductionSection.querySelectorAll('p'))
  
  .map((paragraph) => {
    paragraph.querySelectorAll('sup.reference').forEach((reference) => {
      reference.remove()
    })

    return paragraph.textContent.trim()
  })
  .filter((paragraphText) => paragraphText !== '')
}