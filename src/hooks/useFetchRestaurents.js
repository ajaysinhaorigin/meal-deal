import { useEffect } from 'react'
import {
  CORS_URL,
  RESTAURENT_DESKTOP_API_URL,
  RESTAURENT_MOBILE_API_URL,
} from '../common/config'
import { useSelector, useDispatch } from 'react-redux'
import {
  setLoading,
  getCarosels,
  getAllRestaurents,
  getFilteredRestaurents,
  getSortList,
  setError,
} from '../features/restaurentSlice'
import { isMobile } from '../common/helperFunctions'

const useFetchRestaurents = () => {
  const { allRestaurents, error } = useSelector((store) => store?.restaurant)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setLoading())
    fetchData()
  }, [])

  async function fetchData() {
    try {
      const data = await fetch(
        isMobile()
          ? CORS_URL + RESTAURENT_MOBILE_API_URL
          : CORS_URL + RESTAURENT_DESKTOP_API_URL
      )
      const json = await data.json()

      let caroselList, resList

      if (isMobile()) {
        console.log('from mobile')
        console.log(json.data)
        caroselList =
          json?.data?.success?.cards[0]?.gridWidget?.gridElements?.infoWithStyle
            ?.info
        resList =
          json?.data.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants
      } else {
        console.log('from desktop')
        console.log(json.data)

        const resList1 =
          json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants
        const resList2 =
          json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        const resList3 =
          json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants

        caroselList = json?.data?.cards[0]?.card?.card?.imageGridCards?.info

        resList = resList1 || resList2 || resList3
      }
      dispatch(getCarosels(caroselList))
      dispatch(getAllRestaurents(resList))
      dispatch(getFilteredRestaurents(resList))
    } catch (error) {
      console.log(error)
    }
  }

  return { allRestaurents, error }
}

export default useFetchRestaurents
