
import { LoadingPage, LoadingRing } from "./LoadingIndicator.styles"


const LoadingIndicator = () => {
  return (
    <LoadingPage role="status" aria-live="polite">
      <LoadingRing>
        Cargando
        <span aria-hidden="true"></span>
      </LoadingRing>
    </LoadingPage>
  )
}


export default LoadingIndicator