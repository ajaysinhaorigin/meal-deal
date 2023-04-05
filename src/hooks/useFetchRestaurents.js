import { useEffect } from 'react'
import { API_URL } from '../common/config'
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
      const data = await fetch(API_URL)
      const json = await data.json()
      if (json?.statusCode === 0) {
        dispatch(getSortList(json?.data?.sorts))
        dispatch(getCarosels(json?.data?.cards[0]?.data?.data?.cards))
        dispatch(getAllRestaurents(json?.data?.cards[2]?.data?.data?.cards))
        dispatch(
          getFilteredRestaurents(json?.data?.cards[2]?.data?.data?.cards)
        )
      } else {
        dispatch(setError(json?.statusMessage))
      }
    } catch (error) {
      dispatch(setError(error))
    }
  }

  return { allRestaurents, error }
}

export default useFetchRestaurents
