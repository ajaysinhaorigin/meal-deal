import { useState, useEffect } from 'react'
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
  const { allRestaurents, error } = useSelector((store) => store?.restaurent)

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
      // console.log(json.data)
      let caroselList, resList, sortList

      if (isMobile()) {
        console.log('from mobile')
        console.log(json.data)

        // function getRetaurents(json) {
        //   for (let i = 0; i < json?.data?.cards.length; i++) {
        //     let checkRestaurents =
        //       json?.data?.success?.cards[i]?.gridWidget?.gridElements
        // //        ?.infoWithStyle?.restaurants
        //     if (checkRestaurents) {
        //       return checkRestaurents
        //     }
        //   }
        // }

        caroselList =
          json?.data?.success?.cards[0]?.gridWidget?.gridElements?.infoWithStyle
            ?.info
        resList =
          json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
            ?.restaurants
      } else {
        console.log('from desktop')
        // console.log(json.data.cards)

        function getRetaurents(json) {
          for (let i = 0; i < json?.data?.cards.length; i++) {
            let checkRestaurents =
              json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
            if (checkRestaurents) {
              return checkRestaurents
            }
          }
        }

        caroselList = json?.data?.cards[0]?.card?.card?.imageGridCards?.info
        sortList = json?.data?.cards[4]?.card?.card?.sortConfigs
        resList = getRetaurents(json)
      }
      dispatch(getCarosels(caroselList))
      dispatch(getAllRestaurents(resList))
      dispatch(getFilteredRestaurents(resList))
      // dispatch(getSortList(sortList))
    } catch (error) {
      console.log(error)
    }
  }

  return { allRestaurents, error }
}

export default useFetchRestaurents
