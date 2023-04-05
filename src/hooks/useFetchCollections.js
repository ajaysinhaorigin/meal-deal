import { useDispatch } from 'react-redux'
import {
  getFilteredRestaurents,
  setError,
  setError,
  setLoading,
} from '../features/restaurentSlice'
import { useEffect } from 'react'

const useFetchCollections = ({ link }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading())
    fetchCollections()
  }, [link])

  const fetchCollections = async () => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3752011&lng=76.782122&collection=${link}&offset=0&pageType=COLLECTION&type=rcv2&page_type=DESKTOP_COLLECTION_LISTING`
      )
      const json = await res.json()
      if (json?.statusCode === 0) {
        console.log(json)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return <div>useFetchCollections</div>
}

export default useFetchCollections
