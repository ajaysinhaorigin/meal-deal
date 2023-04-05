import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoading, getFilteredRestaurents } from '../features/restaurentSlice'

const useSortedRestaurents = (sortby) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading())
    fetchSortedRestaurents()
  }, [sortby])

  const fetchSortedRestaurents = async () => {
    try {
      const res = await fetch(
        `https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7333148&lng=76.7794179&${sortby}&page_type=DESKTOP_WEB_LISTING`
      )
      const json = await res.json()
      dispatch(getFilteredRestaurents(json?.data?.cards[2]?.data?.data?.cards))
    } catch (error) {
      console.log(error)
    }
  }
}

export default useSortedRestaurents
