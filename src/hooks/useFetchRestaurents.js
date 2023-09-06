import { useEffect } from 'react'
import { RESTAURENT_API_URL } from '../common/config'

import { useSelector, useDispatch } from 'react-redux'
import {
  setLoading,
  getCarosels,
  getAllRestaurents,
  getFilteredRestaurents,
  getSortList,
  setError,
} from '../features/restaurentSlice'

const useFetchRestaurents = () => {
  const { allRestaurents, error } = useSelector((store) => store?.restaurant)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLoading())
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const data = await fetch(RESTAURENT_API_URL)
      const json = await data.json()

      if (json?.statusCode === 0) {
        dispatch(getSortList(json?.data?.cards[4]?.card?.card?.sortConfigs))
        dispatch(
          getCarosels(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
        )
        dispatch(
          getAllRestaurents(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          )
        )
        // console.log(json?.data)
        dispatch(
          getFilteredRestaurents(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants
          )
        )
      } else {
        dispatch(setError(json?.data?.statusMessage))
      }
    } catch (error) {
      // console.log(error)
    }
  }

  return { allRestaurents, error }
}

export default useFetchRestaurents
