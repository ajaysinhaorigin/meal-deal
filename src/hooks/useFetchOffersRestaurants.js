import { useEffect } from 'react'
import { RESTAURANT_OFFER_API } from '../common/config'
import { useDispatch } from 'react-redux'
import {
  getRestaurantOffers,
  setLoading,
  setError,
} from '../features/restaurantOfferSlice'

const useFetchOffersRestaurants = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading())
    fetchOfferedRestaurants()
  }, [])

  const fetchOfferedRestaurants = async () => {
    try {
      const res = await fetch(RESTAURANT_OFFER_API)
      const json = await res.json()
      // console.log(json)
      if (json?.statusCode === 0) {
        dispatch(getRestaurantOffers(json?.data?.cards))
      } else {
        dispatch(setError(json?.statusMessage))
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }
  return null
}

export default useFetchOffersRestaurants
