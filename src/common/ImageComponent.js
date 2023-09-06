import { CORS_URL, IMG_URL_CDN } from './config'
const ImageComponent = ({ cdn }) => {
  return (
    <img
      src={CORS_URL + IMG_URL_CDN + cdn}
      alt="image"
      className="w-full h-full"
    />
  )
}

export default ImageComponent
