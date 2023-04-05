import { useParams } from 'react-router-dom'
import useFetchCollections from '../hooks/useFetchCollections'
const Collection = () => {
  const { link } = useParams()
  useFetchCollections(link)
  return <div>Collection</div>
}

export default Collection
